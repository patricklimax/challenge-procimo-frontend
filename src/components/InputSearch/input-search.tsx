import { X } from '@phosphor-icons/react';
import { useState } from 'react';
import { useMap } from 'react-leaflet';
import { useMarkerGroupStore } from '../../stores/use-marker-group';
import { useMarkerNetworkStore } from '../../stores/use-marker-network';
import { useMarkerStationStore } from '../../stores/use-marker-station';
import { useNetworksIDStore } from '../../stores/use-network-id-store';
import { useNetworksStore } from '../../stores/use-networks-store';
import type { Network } from '../../types/network';

export const InputSearch = () => {
	const map = useMap();
	const [inputSearch, setInputSearch] = useState('');
	const { networks } = useNetworksStore();
	const { showMarkerStation, hideMarkerStation } = useMarkerStationStore();
	const { hideMarkerGroup, showMarkerGroup } = useMarkerGroupStore();
	const { hideMarkerNetwork } = useMarkerNetworkStore();
	const { getNetworkById } = useNetworksIDStore();

	const networkCityList =
		inputSearch.length > 0
			? networks.filter(
					item =>
						item.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
						item.location.city.toLowerCase().includes(inputSearch.toLowerCase())
				)
			: [];

	const clickListNetworkCity = (network: Network) => {
		map.setView([network.location.latitude, network.location.longitude], 12);
		showMarkerStation();
		hideMarkerGroup();
		getNetworkById(network.id);
		hideMarkerNetwork();
		setInputSearch(`${network.name} - ${network.location.city}`);
	};

	const resetMap = () => {
		hideMarkerStation();
		hideMarkerNetwork();
		showMarkerGroup();
		setInputSearch('');
		map.setView([20, 0], 3);
	};

	return (
		<div className='absolute left-16 top-3 z-[1000]'>
			<div className='relative w-72 md:w-full'>
				<input
					type='text'
					name='inputSearch'
					className='w-full rounded-md px-4 py-2 text-sm outline-none md:w-[28rem] md:text-xl'
					placeholder='Search for a city or network...'
					onChange={e => setInputSearch(e.target.value)}
					value={inputSearch}
				/>

				<button
					type='button'
					className='absolute right-2 top-1/2 z-[1500] -translate-y-1/2 cursor-pointer'
					onClick={resetMap}>
					<X
						size={16}
						strokeWidth={4}
					/>
				</button>
			</div>

			{inputSearch.length > 0 && networkCityList.length > 0 && (
				<div className='mt-2 w-80 rounded-md bg-white/75 md:w-[28rem]'>
					<ul className='h-auto max-h-44 overflow-y-auto px-3'>
						{networkCityList.map(item => (
							<li
								className='cursor-pointer px-3 py-2 text-sm transition-all duration-500 hover:font-bold md:text-xl'
								key={item.id}>
								<button
									type='button'
									onClick={() => clickListNetworkCity(item)}>
									{item.name} - {item.location.city}
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};
