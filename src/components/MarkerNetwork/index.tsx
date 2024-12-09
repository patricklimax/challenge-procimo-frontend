import L from 'leaflet';
import { useState } from 'react';
import { Marker, Popup, Tooltip, useMap } from 'react-leaflet';
import GroupPin from '../../assets/pin-group.svg';
import { useFirstNetworkCountry } from '../../hooks/use-first-network-country';
import { useNetworksStore } from '../../stores/use-networks-store';

const PinGroupIcon = L.icon({
	iconUrl: GroupPin,
	iconSize: [24, 32]
});

export const MarkerNetwork = () => {
	const map = useMap();
	const { networks } = useNetworksStore();
	const firstNetworks = useFirstNetworkCountry(networks);

	const [showAllNetworksCountry, setShowAllNetworksCountry] =
		useState<boolean>(false);

	const [networkClicked, setNetworkCliked] = useState<string | null>(null);

	const toggleNetworks = (
		latitude: number,
		longitude: number,
		nameCountry: string
	) => {
		setShowAllNetworksCountry(prev => !prev);
		// map.setZoom(5)
		map.setView([latitude, longitude], 5);
		setNetworkCliked(nameCountry);
	};

	const resetMap = () => {
		setShowAllNetworksCountry(prev => !prev);
		map.setView([20, 0], 3);
	};

	return (
		<>
			{!showAllNetworksCountry
				? firstNetworks.map(network => (
						<Marker
							icon={PinGroupIcon}
							key={network.nameCountry}
							position={[network.latitude, network.longitude]}
							eventHandlers={{
								click: () => {
									toggleNetworks(
										network.latitude,
										network.longitude,
										network.nameCountry
									);
								}
							}}>
							<Tooltip>
								Coutry: {network.nameCountry} - {network.countNetwork}{' '}
								Network(s)
							</Tooltip>
						</Marker>
					))
				: networks
						.filter(item => item.location.country === networkClicked)
						.map(network => (
							<Marker
								key={network.id}
								position={[
									network.location.latitude,
									network.location.longitude
								]}>
								<Popup>
									<p className='text-xs'>
										Newtork Name: {network.name} - 20 Stations(s)
										{/* // TODO: todo: pegar qde de stations da network */}
									</p>

									<div className='flex gap-2 items-center justify-center'>
										<button
											// TODO: todo: chamar função para ir para stations
											className='px-2 py-1 border text-center text-blue-950 rounded-md text-[10px] font-semibold bg-blue-400 transition-all duration-300 hover:bg-blue-300'
											type='button'>
											Stations
										</button>

										<button
											onClick={resetMap}
											className='px-2 py-1 border text-center text-blue-950 rounded-md text-[10px] font-semibold bg-blue-400 transition-all duration-300 hover:bg-blue-300'
											type='button'>
											Reset Map
										</button>
									</div>
								</Popup>
							</Marker>
						))}
		</>
	);
};
