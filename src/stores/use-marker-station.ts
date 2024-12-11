import { create } from 'zustand';

type MarkerStationState = {
	isMarkerStation: boolean;
	showMarkerStation: () => void;
	hideMarkerStation: () => void;
};

export const useMarkerStationStore = create<MarkerStationState>(set => ({
	isMarkerStation: false,
	showMarkerStation: () => set({ isMarkerStation: true }),
	hideMarkerStation: () => set({ isMarkerStation: false })
}));
