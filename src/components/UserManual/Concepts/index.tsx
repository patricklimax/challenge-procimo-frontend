import { BoxDiv } from '../components/box-div';
import { LiList } from '../components/li-list';
import { SubtitleUserManual } from '../components/title-section';
import { UlList } from '../components/ul-list';

import IconGroup from '../../../assets/pin-group.svg';
import IconNetwork from '../../../assets/pin-network.svg';
import IconStation from '../../../assets/pin-station.svg';

export const Concepts = () => {
	return (
		<BoxDiv>
			<SubtitleUserManual>
				Within the project, we need to understand three concepts:
			</SubtitleUserManual>
			<UlList>
				<LiList>
					<div className='flex w-24 flex-col items-center justify-start border-r-2 px-2'>
						<img
							src={IconGroup}
							alt=''
							className='h-6 w-6'
						/>
						<p className='font-bold uppercase'>Group</p>
					</div>
					<p className='flex-1'>
						Refers to a country that has a certain number of networks spread
						across its territory. There are countries that do not have networks.
						In countries that have networks, an icon is displayed, which when
						clicked will show the networks available in its territory.
					</p>
				</LiList>
				<LiList>
					<div className='flex w-24 flex-col items-center justify-start border-r-2 px-2'>
						<img
							src={IconNetwork}
							alt=''
							className='h-6 w-6'
						/>
						<p className='font-bold uppercase'>Network</p>
					</div>
					<p className='flex-1'>
						Refers to the set of public bike stations available in a city or
						region. A network can include several stations to facilitate the use
						of shared bikes. Clicking on a network will give you access to the
						stations and other details. You can go back to the previous layer by
						clicking on the Network Popup "Back To Group" button.
					</p>
				</LiList>
				<LiList>
					<div className='flex w-24 flex-col items-center justify-start border-r-2 px-2'>
						<img
							src={IconStation}
							alt=''
							className='h-6 w-6'
						/>
						<p className='font-bold uppercase'>Station</p>
					</div>
					<p className='flex-1'>
						It is a physical point within a network where bicycles are made
						available to users. Stations are places where bicycles can be picked
						up and returned. By clicking on a station, you will have access to
						information about that station. You can go back to the previous
						layer by clicking on the Network Popup "Back Networks" button.
					</p>
				</LiList>
			</UlList>
		</BoxDiv>
	);
};
