import { HTMLAttributes, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

export const BoxVariants = cva(
  `flex h-fit w-full rounded-[10px] bg-white p-5 shadow-[1px_2px_10px_0px_rgba(0,0,0,0.1)] overflow-hidden`,
  {
    variants: {},
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface BoxProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof BoxVariants> {
  children?: ReactNode;
}

export const Box = ({ children, className, ...props }: BoxProps) => {
  return (
    <div className={cn(BoxVariants(), className)} {...props}>
      {children}
    </div>
  );
};
