type LiListProps = {
	children: React.ReactNode;
};
export const LiList = ({ children }: LiListProps) => {
	return <li className='flex items-center gap-2'>{children}</li>;
};
