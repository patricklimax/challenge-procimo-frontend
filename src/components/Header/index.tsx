import { BookBookmark, GithubLogo } from '@phosphor-icons/react';

export const Header = () => {
	return (
		<header className='bg-slate-900 text-slate-300 flex items-center justify-between h-12 px-4 font-semibold'>
			<h2>Procimo Front-end Challenge</h2>
			<h3>Welcome!</h3>

			<nav>
				<ul className='flex items-center justify-center gap-4'>
					<li>
						<a
							href='https://github.com/patricklimax/challenge-procimo-frontend'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center justify-center gap-1 text-sm transition-all duration-300 hover:text-slate-400'>
							<GithubLogo
								size={20}
								color='#cbd5e1'
								weight='duotone'
								alt='Ícone do Logo do Github'
							/>
							<span className='uppercase hidden sm:flex'>Project</span>
						</a>
					</li>
					<li>
						<a
							href='#userManual'
							rel='noopener noreferrer'
							className='flex items-center justify-center gap-1 text-sm transition-all duration-300 hover:text-slate-400'>
							<BookBookmark
								size={20}
								color='#cbe1cf'
								weight='duotone'
								alt='Ícone do Manual'
							/>
							<span className='uppercase hidden sm:flex'>Usage Tips</span>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};
