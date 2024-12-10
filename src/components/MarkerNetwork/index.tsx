import L from 'leaflet';
import { useState } from 'react';
import { Marker, Popup, Tooltip, useMap } from 'react-leaflet';
import GroupPin from '../../assets/pin-group.svg';
import StationPin from '../../assets/pin-station.svg';
import { useFirstNetworkCountry } from '../../hooks/use-first-network-country';
import { useNetworksIDStore } from '../../stores/use-network-id-store';
import { useNetworksStore } from '../../stores/use-networks-store';
import { Button } from '../button';

const PinGroupIcon = L.icon({
	iconUrl: GroupPin,
	iconSize: [24, 32]
});

const PinStationIcon = L.icon({
	iconUrl: StationPin,
	iconSize: [24, 32]
});

export const MarkerNetwork = () => {
	const map = useMap();
	const { networks } = useNetworksStore();
	const firstNetworks = useFirstNetworkCountry(networks);
	const {
		countStationsNetworkSelected,
		getNetworkById,
		stationsOfNetworkSelected
	} = useNetworksIDStore();
	const [networkClicked, setNetworkCliked] = useState<string | null>(null);

	const [groupShow, setGroupShow] = useState(true);
	const [networkShow, setNetworkShow] = useState(false);
	const [stationShow, setStationShow] = useState(false);

	const toggleGroupNetworks = (
		latitude: number,
		longitude: number,
		nameCountry: string
	) => {
		setGroupShow(!groupShow);
		setNetworkShow(!networkShow);
		map.setView([latitude, longitude], 5); // map.setZoom(5)
		setNetworkCliked(nameCountry);
	};

	const backToGroup = () => {
		setGroupShow(!groupShow);
		map.setView([20, 0], 3);
		setNetworkShow(!networkShow);
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
		setStationShow(!stationShow);
		map.closePopup();
		setNetworkShow(!networkShow);
	};

	return (
		<>
			{groupShow &&
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
							{network.nameCountry} - {network.countNetwork} Network(s)
							<p className='text-[10px] font-semibold'>Clique para ver mais</p>
						</Tooltip>
					</Marker>
				))}

			{networkShow &&
				networks
					.filter(item => item.location.country === networkClicked)
					.map(network => (
						<Marker
							key={network.id}
							position={[network.location.latitude, network.location.longitude]}
							eventHandlers={{
								click: () => {
									handleClickNetwork(network.id);
								}
							}}>
							<Popup>
								<p className='text-xs'>Newtork Name: {network.name}</p>

								<p className='text-xs'>
									{countStationsNetworkSelected} Stations
								</p>

								<div className='flex gap-2 items-center justify-center'>
									<Button
										onClick={() =>
											handleClickNetworkToStation(
												network.id,
												network.location.latitude,
												network.location.longitude
											)
										}>
										Stations
									</Button>

									<Button onClick={backToGroup}>Reset Map</Button>
								</div>
							</Popup>
						</Marker>
					))}

			{stationShow &&
				stationsOfNetworkSelected.map(item => (
					<Marker
						icon={PinStationIcon}
						key={item.id}
						position={[item.latitude, item.longitude]}>
						<Tooltip>Station Name: {item.name}</Tooltip>
					</Marker>
				))}
		</>
	);
};
