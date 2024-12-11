import { create } from 'zustand';

type MarkerGroupState = {
	isMarkerGroup: boolean;
	showMarkerGroup: () => void;
	hideMarkerGroup: () => void;
};

export const useMarkerGroupStore = create<MarkerGroupState>(set => ({
	isMarkerGroup: true,
	showMarkerGroup: () => set({ isMarkerGroup: true }),
	hideMarkerGroup: () => set({ isMarkerGroup: false })
}));
