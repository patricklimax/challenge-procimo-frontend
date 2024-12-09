import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { api } from '../../api/axios';
import GroupPin from '../../assets/pin-group.svg';
import type { Network } from '../../types/network';

const tileLeyerAttribute =
	'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileLeyerUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const PinGroupIcon = L.icon({
	iconUrl: GroupPin,
	iconSize: [24, 32]
});
export const Mapa = () => {
	const [networks, setNetworks] = useState<Network[] | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const getNetworks = async () => {
			try {
				setIsLoading(true);
				const response = await api.get('/networks');
				const data: Network[] = await response.data.networks;
				setNetworks(data);
				console.log('Networks List', data);
			} catch (error) {
				console.error('erro:', error);
				setError('Erro ao buscar redes');
			} finally {
				setIsLoading(false);
			}
		};
		getNetworks();
	}, []);

	if (isLoading) return <p>Carregando...</p>;
	if (error) return <p>Erro: {error}</p>;

	return (
		<MapContainer
			className='w-full relative h-[calc(100vh-3.2rem)] z-40'
			center={[29.25, 0.25]}
			zoom={3}
			scrollWheelZoom={false}>
			<TileLayer
				attribution={tileLeyerAttribute}
				url={tileLeyerUrl}
			/>

			{networks?.map(network => (
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
