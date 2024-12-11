import { Concepts } from './Concepts';
import { FeatureDetails } from './FeatureDetails';

export const UserManual = () => {
	return (
		<div
			id='userManual'
			className='mx-auto w-full border-b px-4 sm:max-w-5xl'>
			<h2 className='py-4 text-center text-3xl font-bold'>Usage tips</h2>
			<div className='flex flex-col gap-2'>
				<p className='px-2 py-1 text-center font-semibold'>
					The project is a web application developed to visualize geolocated
					data of bicycle networks from the CityBikes API. Developed as a
					solution to Procimo's Front-end Challenge.
				</p>
			</div>
			<FeatureDetails />

			<Concepts />

			<p className='my-16 text-center text-sm'>
				<span className='mr-1'>
					For more details, to see the project source code and contributions,
					visit:
				</span>
				<a
					href='https://github.com/patricklimax/challenge-procimo-frontend'
					target='_blank'
					rel='noopener noreferrer'
					className='transition-all duration-300
				hover:text-slate-400 font-semibold'>
					Project Repository
				</a>
			</p>
		</div>
	);
};
