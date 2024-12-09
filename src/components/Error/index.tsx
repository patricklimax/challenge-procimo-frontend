import { useNetworksStore } from '../../stores/use-networks-store';

export const ErrorNetwork = () => {
	const { error } = useNetworksStore();
	return (
		<>
			{error && (
				<p className='absolute left-2 bottom-6 z-50 text-xs sm:text-sm text-red-600'>
					{error}
				</p>
			)}
		</>
	);
};
