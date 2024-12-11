type BoxDivProps = {
	children: React.ReactNode;
};

export const BoxDiv = ({ children }: BoxDivProps) => {
	return <div className='mt-6 flex flex-col gap-2'>{children}</div>;
};
