import { SpinnerGap, X } from '@phosphor-icons/react';
import { useMap } from 'react-leaflet';
import { useMarkerGroupStore } from '../../stores/use-marker-group';
import { useMarkerNetworkStore } from '../../stores/use-marker-network';
import { useMarkerStationStore } from '../../stores/use-marker-station';
import { useModalNetwork } from '../../stores/use-modal-network';
import { useNetworksIDStore } from '../../stores/use-network-id-store';
import { Button } from '../button';
import { Info } from '../information';

export const ModalNetwork = () => {
	const map = useMap();
	const { isModalOpenNetwork, closeModalNetwork } = useModalNetwork();
	const {
		countStationsNetworkSelected,
		selectedNetwork,
		getNetworkById,
		isLoading
	} = useNetworksIDStore();
	const { hideMarkerNetwork } = useMarkerNetworkStore();
	const { showMarkerGroup } = useMarkerGroupStore();
	const { showMarkerStation } = useMarkerStationStore();

	const handleClickSeeStationsOfNetwork = (
		id: string,
		latitude: number,
		longitude: number
	) => {
		getNetworkById(id);
		map.setView([latitude, longitude], 14);
		hideMarkerNetwork();
		showMarkerStation();
		map.closePopup();
		closeModalNetwork();
	};

	const closeModal = () => {
		closeModalNetwork();
		hideMarkerNetwork();
		showMarkerGroup();
		map.setView([20, 0], 3);
	};

	// const backToGroup = () => {
	// 	closeModalNetwork();
	// 	hideMarkerNetwork();
	// 	showMarkerGroup();
	// 	map.setView([20, 0], 3);
	// };
	return (
		<>
			{isModalOpenNetwork && (
				<div className='w-80 rounded-md border bg-white p-1 absolute left-2 bottom-10 z-[1004]'>
					<div className='flex w-full justify-end'>
						<h2 className='font-bold text-base my-2 text-center flex items-center justify-center gap-1 flex-1'>
							{isLoading && (
								<span>
									<SpinnerGap
										className='animate-spin'
										size={20}
										color='#2340b3'
										weight='duotone'
									/>
								</span>
							)}
							<span>Network Information</span>
						</h2>
						<button
							type='button'
							onClick={closeModal}>
							<X
								className='m-1 stroke-1'
								size={18}
							/>
						</button>
					</div>

					<div className='px-2 pb-2'>
						{isLoading ? (
							<div className='my-2'>
								<Info
									keyInfo={'Name'}
									bodyInfo={'Carregando...'}
								/>
								<Info
									keyInfo={'Stations'}
									bodyInfo={'Carregando...'}
								/>
							</div>
						) : (
							<div className='my-2'>
								<Info
									keyInfo={'Name'}
									bodyInfo={selectedNetwork ? selectedNetwork.name : null}
								/>
								<Info
									keyInfo={'Stations'}
									bodyInfo={countStationsNetworkSelected}
								/>
							</div>
						)}

						<div className='flex gap-2 items-center justify-center'>
							{selectedNetwork && (
								<Button
									className='text-white'
									onClick={() =>
										handleClickSeeStationsOfNetwork(
											selectedNetwork.id,
											selectedNetwork.location.latitude,
											selectedNetwork.location.longitude
										)
									}>
									See Stations
								</Button>
							)}

							{/* <Button
								className='bg-transparent'
								onClick={backToGroup}>
								Back to Group
							</Button> */}
						</div>
					</div>
				</div>
			)}
		</>
	);
};
