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
	const { networks, getNetworks, isLoading, error } = useNetworksStore();

	useEffect(() => {
		getNetworks();
	}, [getNetworks]);

	return (
		<div>
			{isLoading ? (
				<p className='absolute left-2 bottom-2 z-50 text-xs sm:text-sm'>
					Networks loading...
				</p>
			) : (
				<p className='absolute left-2 bottom-2 z-50 text-xs sm:text-sm'>
					Networks in the world: {networks.length}
				</p>
			)}

			{error && (
				<p className='absolute left-2 bottom-6 z-50 text-xs sm:text-sm text-red-600'>
					{error}
				</p>
			)}

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
		</div>
	);
};
