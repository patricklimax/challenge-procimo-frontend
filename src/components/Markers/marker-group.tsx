import L from 'leaflet';
import { Marker, Tooltip, useMap } from 'react-leaflet';
import GroupPin from '../../assets/pin-group.svg';
import { useFirstNetworkCountry } from '../../hooks/use-first-network-country';
import { useMarkerGroupStore } from '../../stores/use-marker-group';
import { useMarkerNetworkStore } from '../../stores/use-marker-network';
import { useNetworksStore } from '../../stores/use-networks-store';
import { useSelectedNetworkStore } from '../../stores/use-selected-network';
import { ClickToMore } from '../click-to-more';

const PinGroupIcon = L.icon({
	iconUrl: GroupPin,
	iconSize: [24, 32]
});

export const MarkerGroup = () => {
	const map = useMap();
	const { networks } = useNetworksStore();
	const firstNetworks = useFirstNetworkCountry(networks);
	const { isMarkerGroup, hideMarkerGroup } = useMarkerGroupStore();
	const { setSelectedNetwork } = useSelectedNetworkStore();
	const { showMarkerNetwork } = useMarkerNetworkStore();

	const toggleGroupNetworks = (
		latitude: number,
		longitude: number,
		nameCountry: string
	) => {
		hideMarkerGroup();
		showMarkerNetwork();
		map.setView([latitude, longitude], 5); // map.setZoom(5)
		setSelectedNetwork(nameCountry);
	};

	return (
		<>
			{isMarkerGroup &&
				firstNetworks.map(network => (
					<Marker
						icon={PinGroupIcon}
						key={network.nameCountry}
						position={[network.latitude, network.longitude]}
						eventHandlers={{
							click: () => {
								toggleGroupNetworks(
									network.latitude,
									network.longitude,
									network.nameCountry
								);
							}
						}}>
						<Tooltip>
							<p className='text-lg'>
								{network.nameCountry} - {network.countNetwork} Network(s)
							</p>

							<ClickToMore />
						</Tooltip>
					</Marker>
				))}
		</>
	);
};
