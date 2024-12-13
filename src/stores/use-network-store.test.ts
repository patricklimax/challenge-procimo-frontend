import { afterEach, describe, expect, it, vi } from 'vitest';
import { api } from '../api/axios';
import { useNetworksStore } from './use-networks-store';

// Mock da API - configurar em cada teste
vi.mock('../api/axios', () => ({
	api: {
		get: vi.fn()
	}
}));

describe('Teste da Store useNetworksStore', () => {
	afterEach(() => {
		useNetworksStore.setState({ networks: [], isLoading: false, error: null });
	});

	//verificar se: networks = []), (isLoading = false), (error = null);
	it('testar o estado inicial da store sendo [], false, null', () => {
		const { networks, isLoading, error } = useNetworksStore.getState();
		expect(networks).toEqual([]);
		expect(isLoading).toBe(false);
		expect(error).toBeNull();
	});

	//verificar se: isLoading = true, durante a chamada; false ao final
	it('testar isLoading durante a chamada de getNetworks', async () => {
		const mockNetworks = [
			{
				id: '1',
				name: 'Network 1',
				location: {
					latitude: 0,
					longitude: 0,
					city: 'City 1',
					country: 'Country 1'
				}
			}
		];

		(api.get as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
			data: { networks: mockNetworks }
		});

		const { getNetworks } = useNetworksStore.getState();

		// faz a chamada
		const promise = getNetworks();

		// enquanto a promise não é resolvida
		expect(useNetworksStore.getState().isLoading).toBe(true);

		// ao aguardar a conclusão
		await promise;
		expect(useNetworksStore.getState().isLoading).toBe(false);
	});

	// verificar se: networks contém os dados da API
	it('testar carregamento dos dados sem erro ao chamar getNetworks', async () => {
		const mockNetworks = [
			{
				id: '1',
				name: 'Network 1',
				location: {
					latitude: 0,
					longitude: 0,
					city: 'City 1',
					country: 'Country 1'
				}
			},
			{
				id: '2',
				name: 'Network 2',
				location: {
					latitude: 10,
					longitude: 20,
					city: 'City 2',
					country: 'Country 2'
				}
			}
		];

		(api.get as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
			data: { networks: mockNetworks }
		});

		const { getNetworks } = useNetworksStore.getState();
		await getNetworks();

		const { networks, error, isLoading } = useNetworksStore.getState();
		expect(isLoading).toBe(false);
		expect(error).toBeNull();
		expect(networks).toEqual(mockNetworks);
	});

	// error existe, networks = [], isLoading = false
	it('deve manipular erro corretamente ao falhar a chamada getNetworks', async () => {
		(api.get as ReturnType<typeof vi.fn>).mockRejectedValueOnce(
			new Error('Erro ao buscar networks')
		);

		const { getNetworks } = useNetworksStore.getState();
		await getNetworks();

		const { networks, error, isLoading } = useNetworksStore.getState();
		expect(isLoading).toBe(false);
		expect(networks).toEqual([]);
		expect(error).toBe('Erro ao carregar as networks - store');
	});
});
