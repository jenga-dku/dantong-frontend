import { HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLInputElement>,
    VariantProps<typeof ButtonVariants> {
  content: string;
  onClick?: () => void;
  disabled?: boolean;
  size?: 'full' | 'fit';
  color?: ButtonColors;
}

export type ButtonColors = 'dark-blue';

export const ButtonVariants = cva(`btn-primary btn border-none text-white`, {
  variants: {
    size: {
      full: 'w-full',
      fit: 'w-fit',
    },
    color: {
      default: 'bg-primary',
      'dark-blue': 'bg-slate-500 hover:bg-slate-600',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'full',
  },
});

export const Button = ({
  content,
  onClick,
  size,
  disabled,
  color,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(ButtonVariants({ size, color }), className)}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};

export const SubmitButton = ({
  content,
  onClick,
  size,
  disabled,
  className,
  ...props
}: ButtonProps) => {
  return (
    <input
      className={cn(ButtonVariants({ size }), className)}
      disabled={disabled}
      onClick={onClick}
      type="submit"
      value={content}
      {...props}
    />
  );
};
