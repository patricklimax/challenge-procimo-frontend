import L from 'leaflet';
import { Marker, Popup, Tooltip, useMap } from 'react-leaflet';
import NetworkPin from '../../assets/pin-network.svg';
import { useMarkerGroupStore } from '../../stores/use-marker-group';
import { useMarkerNetworkStore } from '../../stores/use-marker-network';
import { useMarkerStationStore } from '../../stores/use-marker-station';
import { useNetworksIDStore } from '../../stores/use-network-id-store';
import { useNetworksStore } from '../../stores/use-networks-store';
import { useSelectedNetworkStore } from '../../stores/use-selected-network';
import { Button } from '../button';
import { ClickToMore } from '../click-to-more';
import { Info } from '../information';

const PinNetworkIcon = L.icon({
	iconUrl: NetworkPin,
	iconSize: [24, 32]
});

export const MarkerNetwork = () => {
	const map = useMap();
	const { networks } = useNetworksStore();
	const { countStationsNetworkSelected, getNetworkById } = useNetworksIDStore();

	const { selectedNetwork } = useSelectedNetworkStore();
	const { isMarkerNetwork, hideMarkerNetwork } = useMarkerNetworkStore();
	const { showMarkerGroup } = useMarkerGroupStore();
	const { showMarkerStation } = useMarkerStationStore();

	const backToGroup = () => {
		hideMarkerNetwork();
		showMarkerGroup();
		map.setView([20, 0], 3);
	};

	const handleClickNetwork = (id: string) => {
		getNetworkById(id);
	};

	const handleClickNetworkToStation = (
		id: string,
		latitude: number,
		longitude: number
	) => {
		getNetworkById(id);
		map.setView([latitude, longitude], 14);
		hideMarkerNetwork();
		showMarkerStation();
		map.closePopup();
	};

	return (
		<>
			{isMarkerNetwork &&
				networks
					.filter(item => item.location.country === selectedNetwork)
					.map(network => (
						<Marker
							key={network.id}
							icon={PinNetworkIcon}
							position={[network.location.latitude, network.location.longitude]}
							eventHandlers={{
								click: () => {
									handleClickNetwork(network.id);
								},
								mouseover: () => map.closePopup()
							}}>
							<Tooltip>
								<div className='p-2'>
									<p className='text-lg'>
										{network.name} - {network.location.city}
									</p>
									<ClickToMore />
								</div>
							</Tooltip>

							<Popup>
								<h2 className='font-bold text-center'>Network Information</h2>
								<Info
									keyInfo={'Name'}
									bodyInfo={network.name}
								/>
								<Info
									keyInfo={'Stations'}
									bodyInfo={countStationsNetworkSelected}
								/>

								<div className='flex gap-2 items-center justify-center'>
									<Button
										className='text-white'
										onClick={() =>
											handleClickNetworkToStation(
												network.id,
												network.location.latitude,
												network.location.longitude
											)
										}>
										See Stations
									</Button>

									<Button
										className='bg-transparent'
										onClick={backToGroup}>
										Back to Group
									</Button>
								</div>
							</Popup>
						</Marker>
					))}
		</>
	);
};
