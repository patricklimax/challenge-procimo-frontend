import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	className?: string;
};

export const Button = ({ className, children, ...props }: ButtonProps) => {
	const Classes = clsx(
		'px-2 py-1 border text-center text-blue-950 rounded-md text-[10px] font-semibold bg-blue-400 transition-all duration-300 hover:bg-blue-300',
		className
	);

	return (
		<button
			type='button'
			className={Classes}
			{...props}>
			{children}
		</button>
	);
};
