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
				Dentro do projeto, precisamos entender três conceitos:
			</SubtitleUserManual>
			<UlList>
				<LiList>
					<div className='flex w-24 flex-col items-center justify-start border-r-2 px-2'>
						<img
							src={IconGroup}
							alt=''
							className='h-6 w-6'
						/>
						<p className='font-bold uppercase'>Grupo</p>
					</div>
					<p className='flex-1'>
						Refere-se ao país que contém um número xis de redes espalhadas por
						seu território. Há países que não tem redes. Nos paises que possuem
						redes é renderizado um ícone, que ao clicar mostrará as redes
						disponíveis em seu território.
					</p>
				</LiList>
				<LiList>
					<div className='flex w-24 flex-col items-center justify-start border-r-2 px-2'>
						<img
							src={IconNetwork}
							alt=''
							className='h-6 w-6'
						/>
						<p className='font-bold uppercase'>Rede</p>
					</div>
					<p className='flex-1'>
						Refere-se ao conjunto de estações de bicicletas públicas disponíveis
						em uma cidade ou região. Uma rede pode incluir várias estações para
						facilitar o uso de bicicletas compartilhadas. Ao clicar numa rede
						você terá acesso às estações e outros detalhes.
					</p>
				</LiList>
				<LiList>
					<div className='flex w-24 flex-col items-center justify-start border-r-2 px-2'>
						<img
							src={IconStation}
							alt=''
							className='h-6 w-6'
						/>
						<p className='font-bold uppercase'>Estação</p>
					</div>
					<p className='flex-1'>
						É um ponto físico dentro de uma rede onde as bicicletas são
						disponibilizadas para os usuários. As estações são locais de
						retirada e devolução das bicicletas. Ao clicar em uma estação você
						terá acesso às informações dessa estação.
					</p>
				</LiList>
			</UlList>
		</BoxDiv>
	);
};
