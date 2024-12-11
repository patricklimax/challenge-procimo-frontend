import { create } from 'zustand';

type SelectedNetworkStoreProps = {
	selectedNetwork: string | null;
	setSelectedNetwork: (name: string) => void;
	clearSelectedNetwork: () => void;
};

export const useSelectedNetworkStore = create<SelectedNetworkStoreProps>(
	set => ({
		selectedNetwork: null,
		setSelectedNetwork: name => set({ selectedNetwork: name }),
		clearSelectedNetwork: () => set({ selectedNetwork: null })
	})
);
