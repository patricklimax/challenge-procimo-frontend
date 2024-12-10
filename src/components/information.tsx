type InfoProps = {
	keyInfo: string;
	bodyInfo: string | number;
};

export const Info = ({ keyInfo, bodyInfo }: InfoProps) => {
	return (
		<p className='text-xs'>
			<span className='font-semibold'>{keyInfo}: </span> {bodyInfo}
		</p>
	);
};
