import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary'|'outline';
  size?: 'md'|'sm';
  className?: string;
};

// Linkやbuttonで使いやすい汎用ボタン
const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant = 'primary', size = 'md', className, ...props }, ref) => {
    const base = 'inline-flex items-center font-semibold transition rounded focus:outline-none focus:ring focus:ring-blue-300';
    const color = variant === 'primary'
      ? 'bg-blue-600 hover:bg-blue-700 text-white'
      : 'border border-blue-600 text-blue-600 hover:bg-blue-50';
    const px = size === 'sm' ? 'px-3 py-1.5 text-sm' : 'px-5 py-2 text-base';
    return (
      <button ref={ref} className={clsx(base, color, px, className)} {...props} />
    );
  }
);
Button.displayName = 'Button';
export default Button;

