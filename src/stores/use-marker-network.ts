import { create } from 'zustand';

type MarkerNetworkState = {
	isMarkerNetwork: boolean;
	showMarkerNetwork: () => void;
	hideMarkerNetwork: () => void;
};

export const useMarkerNetworkStore = create<MarkerNetworkState>(set => ({
	isMarkerNetwork: false,
	showMarkerNetwork: () => set({ isMarkerNetwork: true }),
	hideMarkerNetwork: () => set({ isMarkerNetwork: false })
}));
