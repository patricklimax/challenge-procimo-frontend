import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const tileLeyerAttribute =
	'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileLeyerUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

export const Mapa = () => {
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
			<Marker position={[29.25, 0.25]}>
				<Popup>
					Centro do Mapa <br /> Timimoun - Argelia.
				</Popup>
			</Marker>
		</MapContainer>
	);
};
