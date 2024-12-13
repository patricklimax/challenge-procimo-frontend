import { afterEach, describe, expect, it, vi } from 'vitest';
import { api } from '../api/axios';
import { useNetworksIDStore } from './use-network-id-store';

// Mock da API - configurar em cada teste
vi.mock('../api/axios', () => ({
	api: {
		get: vi.fn()
	}
}));

describe('Teste da Store useNetworksIDStore', () => {
	afterEach(() => {
		useNetworksIDStore.setState({
			error: null,
			isLoading: false,
			selectedNetwork: null,
			stationsOfNetworkSelected: [],
			countStationsNetworkSelected: 0
		});
	});

	//verificar se: retorna null, false, null, [], 0);
	it('testar o estado inicial da store sendo null, false, null, [], 0', () => {
		const {
			error,
			isLoading,
			selectedNetwork,
			stationsOfNetworkSelected,
			countStationsNetworkSelected
		} = useNetworksIDStore.getState();

		expect(error).toBeNull();
		expect(isLoading).toBe(false);
		expect(selectedNetwork).toBeNull();
		expect(stationsOfNetworkSelected).toEqual([]);
		expect(countStationsNetworkSelected).toBe(0);
	});

	it('testar isLoading durante a chamada de getNetworkById', async () => {
		const mockNetwork = {
			id: '1',
			name: 'Network 1',
			stations: [
				{
					id: 'station1',
					name: 'Station 1',
					latitude: 10,
					longitude: 20,
					timestamp: 'timeStamp1',
					free_bikes: 2,
					empty_slots: 2
				},
				{
					id: 'station2',
					name: 'Station 2',
					latitude: 20,
					longitude: 30,
					timestamp: 'timeStamp2',
					free_bikes: 4,
					empty_slots: 4
				}
			]
		};

		(api.get as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
			data: { network: mockNetwork }
		});

		const { getNetworkById } = useNetworksIDStore.getState();

		// faz a chamada
		const promise = getNetworkById('1');

		// enquanto a promise não é resolvida
		expect(useNetworksIDStore.getState().isLoading).toBe(true);

		// ao aguardar a conclusão
		await promise;
		expect(useNetworksIDStore.getState().isLoading).toBe(false);
	});

	it('testar carregamento dos dados sem erro ao chamar getNetworkById', async () => {
		const mockNetwork = {
			id: '1',
			name: 'Network 1',
			stations: [
				{
					id: 'station1',
					name: 'Station 1',
					latitude: 10,
					longitude: 20,
					timestamp: 'timeStamp1',
					free_bikes: 2,
					empty_slots: 2
				},
				{
					id: 'station2',
					name: 'Station 2',
					latitude: 20,
					longitude: 30,
					timestamp: 'timeStamp2',
					free_bikes: 4,
					empty_slots: 4
				}
			]
		};

		(api.get as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
			data: { network: mockNetwork }
		});

		const { getNetworkById } = useNetworksIDStore.getState();
		await getNetworkById('1');

		const {
			selectedNetwork,
			stationsOfNetworkSelected,
			countStationsNetworkSelected,
			error
		} = useNetworksIDStore.getState();

		expect(selectedNetwork).toEqual(mockNetwork);
		expect(stationsOfNetworkSelected).toEqual(mockNetwork.stations);
		expect(countStationsNetworkSelected).toBe(mockNetwork.stations.length);
		expect(error).toBeNull();
	});

	it('deve manipular erro corretamente ao falhar a chamada getNetworkById', async () => {
		(api.get as ReturnType<typeof vi.fn>).mockRejectedValueOnce(
			new Error('Erro ao buscar a network')
		);

		const { getNetworkById } = useNetworksIDStore.getState();
		await getNetworkById('1');

		const {
			selectedNetwork,
			stationsOfNetworkSelected,
			countStationsNetworkSelected,
			error
		} = useNetworksIDStore.getState();

		expect(selectedNetwork).toBeNull();
		expect(stationsOfNetworkSelected).toEqual([]);
		expect(countStationsNetworkSelected).toBe(0);
		expect(error).toBe('Erro ao carregar a networkID - store');
	});
});
