import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Footer } from './components/Footer/index.tsx';
import { Header } from './components/Header/index.tsx';

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<main className='flex flex-col gap-1 antialiased max-w-[84rem] mx-auto'>
			<Header />
			<App />
			<Footer />
		</main>
	</StrictMode>
);
