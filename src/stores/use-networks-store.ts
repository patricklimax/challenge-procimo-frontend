import { create } from 'zustand';
import { api } from '../api/axios';
import type { Network } from '../types/network';

type NetworkStoreProps = {
	networks: Network[];
	getNetworks: () => Promise<void>;

	isLoading: boolean;
	error: string | null;
};

export const useNetworksStore = create<NetworkStoreProps>(set => ({
	networks: [],

	isLoading: false,
	error: null,

	getNetworks: async () => {
		set({ isLoading: true, error: null });

		try {
			const response = await api.get('/networks');
			const data: Network[] = await response.data.networks;
			set({ networks: data });
		} catch (error) {
			console.error('Erro ao buscar as networks - store', error);
			set({ error: 'Erro ao carregar as networks - store' });
		} finally {
			set({ isLoading: false });
		}
	}
}));
