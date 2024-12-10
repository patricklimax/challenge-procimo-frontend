export const Footer = () => {
	return (
		<footer className='p-4'>
			<p className='flex items-center justify-center gap-1 font-semibold text-slate-500 text-sm'>
				Desenvolvido por{' '}
				<a
					href='https://patricklimax.vercel.app/'
					target='_blank'
					rel='noopener noreferrer'
					className='flex text-slate-700 transition-all duration-300 hover:text-slate-900'>
					Patrick Lima
				</a>
			</p>
		</footer>
	);
};
