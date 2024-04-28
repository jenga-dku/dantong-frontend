import { ReactNode, useRef } from 'react';

export const SignUpLayout = ({ children }: { children: ReactNode }) => {
  const layoutRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`grid h-full w-full grid-cols-1 items-end p-8`}
      ref={layoutRef}
    >
      {children}
    </div>
  );
};
