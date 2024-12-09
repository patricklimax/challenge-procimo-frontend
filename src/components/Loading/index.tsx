import { useNetworksStore } from '../../stores/use-networks-store';

export const Loading = () => {
	const { networks, isLoading } = useNetworksStore();
	return (
		<>
			{isLoading ? (
				<p className='absolute left-2 bottom-2 z-50 text-xs sm:text-sm'>
					Networks loading...
				</p>
			) : (
				<p className='absolute left-2 bottom-2 z-50 text-xs sm:text-sm'>
					Networks in the world: {networks.length}
				</p>
			)}
		</>
	);
};
