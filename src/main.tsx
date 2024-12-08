import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BookBookmark, GithubLogo } from '@phosphor-icons/react';
import App from './App.tsx';

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<main className='flex flex-col gap-1 antialiased max-w-[84rem] mx-auto'>
			<header className='bg-slate-900 text-slate-300 flex items-center justify-between h-12 px-4 font-semibold'>
				<h2>Desafio Procimo Front-end</h2>
				<h3>Bem vindo!</h3>

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
								<span className='uppercase hidden sm:flex'>Projeto</span>
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
								<span className='uppercase hidden sm:flex'>Dicas de Uso</span>
							</a>
						</li>
					</ul>
				</nav>
			</header>

			<App />

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
		</main>
	</StrictMode>
);
