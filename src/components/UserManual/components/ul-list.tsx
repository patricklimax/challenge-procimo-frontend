type UlListProps = {
	children: React.ReactNode;
};
export const UlList = ({ children }: UlListProps) => {
	return <ul className='mt-4 flex flex-col gap-4 px-4 text-sm'>{children}</ul>;
};
