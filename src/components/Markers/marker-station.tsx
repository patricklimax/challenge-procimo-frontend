import L from 'leaflet';
import { Marker, Popup, Tooltip, useMap } from 'react-leaflet';
import StationPin from '../../assets/pin-station.svg';
import { useMarkerNetworkStore } from '../../stores/use-marker-network';
import { useMarkerStationStore } from '../../stores/use-marker-station';
import { useNetworksIDStore } from '../../stores/use-network-id-store';
import { Button } from '../button';
import { Info } from '../information';

const PinStationIcon = L.icon({
	iconUrl: StationPin,
	iconSize: [24, 32]
});

export const MarkerStation = () => {
	const map = useMap();
	const { stationsOfNetworkSelected } = useNetworksIDStore();
	const { isMarkerStation, hideMarkerStation } = useMarkerStationStore();
	const { showMarkerNetwork } = useMarkerNetworkStore();

	const resetMapToNetworks = () => {
		hideMarkerStation();
		map.setZoom(5);
		showMarkerNetwork();
	};

	return (
		<>
			{isMarkerStation &&
				stationsOfNetworkSelected.map(item => (
					<Marker
						icon={PinStationIcon}
						key={item.id}
						position={[item.latitude, item.longitude]}>
						<Tooltip>
							<Info
								keyInfo={'Starion_Name'}
								bodyInfo={item.name}
							/>
						</Tooltip>

						<Popup>
							<h2 className='font-bold text-center'>Station Details</h2>

							<Info
								keyInfo={'Name'}
								bodyInfo={item.name}
							/>
							<Info
								keyInfo={'Empty Slots'}
								bodyInfo={item.empty_slots}
							/>
							<Info
								keyInfo={'Free Bikes'}
								bodyInfo={item.free_bikes}
							/>
							<Info
								keyInfo={'Timestamp'}
								bodyInfo={item.timestamp}
							/>

							<div className='flex gap-2 items-center justify-center'>
								<Button onClick={resetMapToNetworks}>Back Networks</Button>
							</div>
						</Popup>
					</Marker>
				))}
		</>
	);
};
