import { create } from 'zustand';
import { api } from '../api/axios';
import type { Network } from '../types/network';

type NetworkStoreProps = {
	networks: Network[];
	getNetworks: () => Promise<void>;
};

export const useNetworksStore = create<NetworkStoreProps>(set => ({
	networks: [],

	getNetworks: async () => {
		try {
			const response = await api.get('/networks');
			const data: Network[] = await response.data.networks;
			set({ networks: data });
		} catch (error) {
			console.error('Erro ao buscar as networks - store', error);
		}
	}
}));
