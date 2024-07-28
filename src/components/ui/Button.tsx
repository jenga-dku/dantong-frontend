import { HTMLAttributes, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  children?: ReactNode;
  content: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const ButtonVariants = cva(`btn-primary btn border-none text-white`, {
  variants: {
    size: {
      full: 'w-full',
      fit: 'w-fit',
    },
  },
  defaultVariants: {
    size: 'full',
  },
});

export const Button = ({
  content,
  onClick,
  size,
  disabled,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(ButtonVariants({ size }), className)}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};
