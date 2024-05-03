import { HTMLAttributes, ReactNode } from 'react';
import { handleCustomCSS } from '../utils/handleCustomCSS';

type Box = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

export const boxStyle =
  'flex w-full rounded-[10px] bg-white p-5 shadow-[1px_2px_10px_0px_rgba(0,0,0,0.1)]';

export const Box = ({ children, className, ...props }: Box) => {
  return (
    <div
      className={className ? handleCustomCSS(boxStyle, className) : boxStyle}
      {...props}
    >
      {children}
    </div>
  );
};
