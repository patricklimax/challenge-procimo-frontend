import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import GroupPin from '../../assets/pin-group.svg';
import { useFirstNetworkCountry } from '../../hooks/use-first-network-country';
import { useNetworksStore } from '../../stores/use-networks-store';

const PinGroupIcon = L.icon({
	iconUrl: GroupPin,
	iconSize: [24, 32]
});

export const MarkerNetwork = () => {
	const { networks } = useNetworksStore();
	const firstNetworks = useFirstNetworkCountry(networks);

	return (
		<>
			{firstNetworks.map(network => (
				<Marker
					icon={PinGroupIcon}
					key={network.nameCountry}
					position={[network.latitude, network.longitude]}>
					<Popup>
						Coutry: {network.nameCountry} - {network.countNetwork} Network(s)
					</Popup>
				</Marker>
			))}
		</>
	);
};
