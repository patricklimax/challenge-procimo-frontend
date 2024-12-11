import { SealCheck } from '@phosphor-icons/react';
import { BoxDiv } from '../components/box-div';
import { LiList } from '../components/li-list';
import { SubtitleUserManual } from '../components/title-section';
import { UlList } from '../components/ul-list';

export const FeatureDetails = () => {
	return (
		<BoxDiv>
			<SubtitleUserManual>
				As principais funcionalidades incluem:
			</SubtitleUserManual>
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
						Exibição de dados em um mapa interativo com camadas detalhadas
						(país, redes, estações e detalhes das estações).
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
						Sistema de busca para redes e estações, atráves da cidade ou do nome
						da rede.
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
						Modais e tooltips que exibem informações detalhadas sobre as redes e
						estações.
					</p>
				</LiList>
			</UlList>
		</BoxDiv>
	);
};
