import { Concepts } from './Concepts';
import { FeatureDetails } from './FeatureDetails';

export const UserManual = () => {
	return (
		<div
			id='userManual'
			className='mx-auto w-full border-b px-4 sm:max-w-5xl'>
			<h2 className='py-4 text-center text-3xl font-bold'>Dicas de Uso</h2>
			<div className='flex flex-col gap-2'>
				<p className='px-2 py-1 text-center font-semibold'>
					O projeto é uma aplicação web desenvolvida para visualizar dados
					geolocalizados de redes de bicicletas a partir da API CityBikes.
					Desenvolvido como solução do Desafio Front-end da Procimo.
				</p>
			</div>
			<FeatureDetails />

			<Concepts />

			<p className='my-16 text-center text-sm'>
				<span className='mr-1'>
					Para mais detalhes, ver o código fonte do projeto e contribuições,
					acesse:
				</span>
				<a
					href='https://github.com/patricklimax/challenge-procimo-frontend'
					target='_blank'
					rel='noopener noreferrer'
					className='transition-all duration-300
				hover:text-slate-400 font-semibold'>
					Repositório do Projeto
				</a>
			</p>
		</div>
	);
};
