import { HTMLAttributes, ReactNode } from 'react';

type Box = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

export const Box = ({ children, className, ...props }: Box) => {
  return (
    <div
      className={`flex w-full rounded-[10px] bg-white p-5 shadow-[1px_2px_10px_0px_rgba(0,0,0,0.1)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
