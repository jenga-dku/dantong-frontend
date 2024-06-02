import { HTMLAttributes } from 'react';

type Button = HTMLAttributes<HTMLButtonElement> & {
  content: string;
  onClick?: () => void;
  size?: 'full' | 'fit';
  disabled?: boolean;
  className?: string;
};

const SIZE = {
  full: 'w-full text-xl',
  fit: 'w-fit',
};

export const Button = ({
  content,
  onClick,
  size,
  disabled,
  className,
  ...props
}: Button) => {
  return (
    <button
      className={`btn-primary btn border-none text-white ${SIZE[size ?? 'full']} ${className}`}
      disabled={disabled ?? false}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};
