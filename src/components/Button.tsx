import { HTMLAttributes } from 'react';

type Button = HTMLAttributes<HTMLButtonElement> & {
  content: string;
  onClick: () => void;
  size: 'full' | 'fit';
  disabled?: boolean;
  className?: string;
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
      className={`btn-primary ${size && `btn-${size}`} ${className}`}
      disabled={disabled ?? false}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};
