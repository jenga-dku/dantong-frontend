import { HTMLAttributes, ReactNode } from 'react';

type Box = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

export const Box = ({ children, className, ...props }: Box) => {
  return (
    <div
      className={`flex w-full rounded-[10px] bg-white p-5 shadow-[0_1px_2px_10px_rgba(0,0,0,0.01)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
