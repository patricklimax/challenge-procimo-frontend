type InfoProps = {
	keyInfo: string;
	bodyInfo: string | number | null;
};

export const Info = ({ keyInfo, bodyInfo }: InfoProps) => {
	return (
		<p className='text-sm'>
			<span className='font-semibold'>{keyInfo}: </span> {bodyInfo}
		</p>
	);
};
