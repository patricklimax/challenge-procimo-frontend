import { create } from 'zustand';
import { api } from '../api/axios';
import type { Network } from '../types/network';
import type { Station } from '../types/station';

type NetworkIDStoreProps = {
	error: string | null;
	selectedNetwork: Network | null;
	stationsOfNetworkSelected: Station[];
	countStationsNetworkSelected: number;

	getNetworkById: (id: string) => Promise<void>; // Buscar network pelo ID
};

export const useNetworksIDStore = create<NetworkIDStoreProps>(set => ({
	error: null,

	selectedNetwork: null,
	stationsOfNetworkSelected: [],
	countStationsNetworkSelected: 0,

	getNetworkById: async (id: string) => {
		set({ error: null });

		try {
			const response = await api.get(`/networks/${id}`);
			const network: Network = response.data.network;
			set({
				selectedNetwork: network,
				stationsOfNetworkSelected: network.stations,
				countStationsNetworkSelected: network.stations.length
			});
		} catch (error) {
			set({ error: 'Erro ao carregar a network - store' });
			console.error(`Erro ao buscar a network com ID ${id} - store`, error);
		}
	}
}));
