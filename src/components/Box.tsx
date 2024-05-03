import { ReactNode } from 'react';

export const Box = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`flex w-full rounded-[10px] bg-white p-5 shadow-[0_1px_2px_10px_rgba(0,0,0,0.01)] ${className}`}
    >
      {children}
    </div>
  );
};
