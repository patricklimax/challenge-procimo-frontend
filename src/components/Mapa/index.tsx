import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import GroupPin from '../../assets/pin-group.svg';
import { useNetworksStore } from '../../stores/use-networks-store';

const tileLeyerAttribute =
	'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileLeyerUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const PinGroupIcon = L.icon({
	iconUrl: GroupPin,
	iconSize: [24, 32]
});

export const Mapa = () => {
	const { networks, getNetworks } = useNetworksStore();

	useEffect(() => {
		getNetworks();
	}, [getNetworks]);

	return (
		<MapContainer
			className='w-full relative h-[calc(100vh-3.2rem)] z-40'
			center={[20, 0]}
			zoom={3}
			scrollWheelZoom={false}>
			<TileLayer
				attribution={tileLeyerAttribute}
				url={tileLeyerUrl}
			/>

			{networks.map(network => (
				<Marker
					icon={PinGroupIcon}
					key={network.id}
					position={[network.location.latitude, network.location.longitude]}>
					<Popup>
						{network.name} <br /> Country: {network.location.country}
					</Popup>
				</Marker>
			))}
		</MapContainer>
	);
};
