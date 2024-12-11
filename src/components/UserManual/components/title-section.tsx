type SubtitleUserManualProps = {
	children: React.ReactNode;
};

export const SubtitleUserManual = ({ children }: SubtitleUserManualProps) => {
	return (
		<h3 className='mt-4 border-l-2 border-emerald-600 px-2 py-1 font-semibold'>
			{children}
		</h3>
	);
};
