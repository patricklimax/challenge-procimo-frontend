import L from 'leaflet';
import { Marker, Tooltip } from 'react-leaflet';
import NetworkPin from '../../assets/pin-network.svg';
import { useMarkerNetworkStore } from '../../stores/use-marker-network';
import { useModalNetwork } from '../../stores/use-modal-network';
import { useNetworksIDStore } from '../../stores/use-network-id-store';
import { useNetworksStore } from '../../stores/use-networks-store';
import { useSelectedNetworkStore } from '../../stores/use-selected-network';
import { ClickToMore } from '../click-to-more';

const PinNetworkIcon = L.icon({
	iconUrl: NetworkPin,
	iconSize: [24, 32]
});

export const MarkerNetwork = () => {
	const { networks } = useNetworksStore();
	const { getNetworkById } = useNetworksIDStore();
	const { selectedNetwork } = useSelectedNetworkStore();
	const { isMarkerNetwork } = useMarkerNetworkStore();
	const { openModalNetwork } = useModalNetwork();

	const handleClickNetwork = (id: string) => {
		getNetworkById(id);
		openModalNetwork();
	};

	return (
		<>
			{isMarkerNetwork &&
				networks
					.filter(item => item.location.country === selectedNetwork)
					.map(network => (
						<Marker
							key={network.id}
							icon={PinNetworkIcon}
							position={[network.location.latitude, network.location.longitude]}
							eventHandlers={{
								click: () => {
									handleClickNetwork(network.id);
								}
							}}>
							<Tooltip>
								<div className='p-2'>
									<p className='text-lg'>
										{network.name} - {network.location.city}
									</p>
									<ClickToMore />
								</div>
							</Tooltip>
						</Marker>
					))}
		</>
	);
};
