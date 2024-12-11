import { MarkerGroup } from './marker-group';
import { MarkerNetwork } from './marker-network';
import { MarkerStation } from './marker-station';

export const Markers = () => {
	return (
		<>
			<MarkerGroup />

			<MarkerNetwork />

			<MarkerStation />
		</>
	);
};
