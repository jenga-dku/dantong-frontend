import { ReactNode, useRef } from 'react';

export const SignUpLayout = ({ children }: { children: ReactNode }) => {
  const layoutRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`grid h-full w-full grid-cols-1 grid-rows-[1fr_3fr] gap-8 p-8`}
      ref={layoutRef}
    >
      {children}
    </div>
  );
};
