import { HTMLAttributes } from 'react';

type Button = HTMLAttributes<HTMLInputElement> & {
  content: string;
  onClick?: () => void;
  size?: 'full' | 'fit';
  disabled?: boolean;
  className?: string;
};

export const SubmitButton = ({
  content,
  onClick,
  size,
  disabled,
  className,
  ...props
}: Button) => {
  return (
    <input
      className={`btn-primary btn border-none text-white ${size && `btn-${size ?? 'full'}`} ${className}`}
      disabled={disabled ?? false}
      onClick={onClick}
      type="submit"
      value={content}
      {...props}
    />
  );
};
