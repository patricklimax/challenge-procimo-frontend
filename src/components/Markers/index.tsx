import L from 'leaflet';
import { useState } from 'react';
import { Marker, Popup, Tooltip, useMap } from 'react-leaflet';
import GroupPin from '../../assets/pin-group.svg';
import NetworkPin from '../../assets/pin-network.svg';
import StationPin from '../../assets/pin-station.svg';
import { useFirstNetworkCountry } from '../../hooks/use-first-network-country';
import { useNetworksIDStore } from '../../stores/use-network-id-store';
import { useNetworksStore } from '../../stores/use-networks-store';
import { Button } from '../button';
import { ClickToMore } from '../click-to-more';
import { Info } from '../information';

const PinGroupIcon = L.icon({
	iconUrl: GroupPin,
	iconSize: [24, 32]
});

const PinNetworkIcon = L.icon({
	iconUrl: NetworkPin,
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

	const resetMapToNetworks = () => {
		map.setZoom(5);
		setStationShow(!stationShow);
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
							<p className='text-lg'>
								{network.nameCountry} - {network.countNetwork} Network(s)
							</p>

							<ClickToMore />
						</Tooltip>
					</Marker>
				))}

			{networkShow &&
				networks
					.filter(item => item.location.country === networkClicked)
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

			{stationShow &&
				stationsOfNetworkSelected.map(item => (
					<Marker
						icon={PinStationIcon}
						key={item.id}
						position={[item.latitude, item.longitude]}
						eventHandlers={{
							click: () => {
								map.closeTooltip();
							},
							mouseover: () => map.closePopup()
						}}>
						<Tooltip>
							<h2 className='font-bold text-center'>Station Details</h2>

							<Info
								keyInfo={'Name'}
								bodyInfo={item.name}
							/>
							<Info
								keyInfo={'Empty Slots'}
								bodyInfo={item.empty_slots}
							/>
							<Info
								keyInfo={'Free Bikes'}
								bodyInfo={item.free_bikes}
							/>
							<Info
								keyInfo={'Timestamp'}
								bodyInfo={item.timestamp}
							/>
						</Tooltip>

						<Popup>
							<h2 className='font-bold text-center'>Station Details</h2>

							<Info
								keyInfo={'Name'}
								bodyInfo={item.name}
							/>
							<Info
								keyInfo={'Empty Slots'}
								bodyInfo={item.empty_slots}
							/>
							<Info
								keyInfo={'Free Bikes'}
								bodyInfo={item.free_bikes}
							/>
							<Info
								keyInfo={'Timestamp'}
								bodyInfo={item.timestamp}
							/>

							<div className='flex gap-2 items-center justify-center'>
								<Button onClick={resetMapToNetworks}>Back Networks</Button>
							</div>
						</Popup>
					</Marker>
				))}
		</>
	);
};
