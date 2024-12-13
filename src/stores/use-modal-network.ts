import { create } from 'zustand';

type ModalNetworkState = {
	isModalOpenNetwork: boolean;
	openModalNetwork: () => void;
	closeModalNetwork: () => void;
};

export const useModalNetwork = create<ModalNetworkState>(set => ({
	isModalOpenNetwork: false,
	openModalNetwork: () => set({ isModalOpenNetwork: true }),
	closeModalNetwork: () => set({ isModalOpenNetwork: false })
}));
