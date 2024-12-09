import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import { useNetworksStore } from '../../stores/use-networks-store';
import { ErrorNetwork } from '../Error';
import { Loading } from '../Loading';
import { MarkerNetwork } from '../MarkerNetwork';

const tileLeyerAttribute =
	'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileLeyerUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

export const Mapa = () => {
	const { getNetworks } = useNetworksStore();

	useEffect(() => {
		getNetworks();
	}, [getNetworks]);

	return (
		<>
			<Loading />

			<ErrorNetwork />

			<MapContainer
				className='w-full relative h-[calc(100vh-3.2rem)] z-40'
				center={[20, 0]}
				zoom={3}
				scrollWheelZoom={false}>
				<TileLayer
					attribution={tileLeyerAttribute}
					url={tileLeyerUrl}
				/>

				<MarkerNetwork />
			</MapContainer>
		</>
	);
};
