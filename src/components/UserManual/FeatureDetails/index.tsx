import { SealCheck } from '@phosphor-icons/react';
import { BoxDiv } from '../components/box-div';
import { LiList } from '../components/li-list';
import { SubtitleUserManual } from '../components/title-section';
import { UlList } from '../components/ul-list';

export const FeatureDetails = () => {
	return (
		<BoxDiv>
			<SubtitleUserManual>Main features:</SubtitleUserManual>
			<UlList>
				<LiList>
					<div className='flex p-1 items-center justify-center'>
						<SealCheck
							size={24}
							color='#2340b3'
							weight='duotone'
						/>
					</div>
					<p>
						Display data on an interactive map with detailed layers (country,
						networks, stations and station details).
					</p>
				</LiList>
				<LiList>
					<div className='flex p-1 items-center justify-center'>
						<SealCheck
							size={24}
							color='#2340b3'
							weight='duotone'
						/>
					</div>
					<p>
						Search system for networks and stations, using the city or network
						name. You can go back to the previous layer by clicking on the X
						inserted in the input.
					</p>
				</LiList>
				<LiList>
					<div className='flex p-1 items-center justify-center'>
						<SealCheck
							size={24}
							color='#2340b3'
							weight='duotone'
						/>
					</div>
					<p>
						Popups and Tooltips that display detailed information about networks
						and stations.
					</p>
				</LiList>
			</UlList>
		</BoxDiv>
	);
};
