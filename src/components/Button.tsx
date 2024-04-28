import { HTMLAttributes } from 'react';

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  content: string;
  onClick: () => void;
  size: 'full' | 'fit';
  disabled?: boolean;
};

export const Button = ({
  content,
  onClick,
  size,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`btn-primary ${size && `btn-${size}`}`}
      disabled={disabled ?? false}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};
