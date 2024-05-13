import { HTMLAttributes } from 'react';

type Button = HTMLAttributes<HTMLInputElement> & {
  content: string;
  onClick?: () => void;
  size: 'full' | 'fit';
  disabled?: boolean;
  className?: string;
  type: string;
};

export const SubmitButton = ({
  content,
  onClick,
  size,
  disabled,
  className,
  type,
  ...props
}: Button) => {
  return (
    <input
      className={`btn-primary btn border-none text-white ${size && `btn-${size}`} ${className}`}
      disabled={disabled ?? false}
      onClick={onClick}
      type={type}
      value={content}
      {...props}
    />
  );
};
