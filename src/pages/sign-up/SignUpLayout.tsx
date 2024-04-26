import { ReactNode } from 'react';

export const SignUpLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid h-full w-full grid-cols-1 items-end p-8">
      {children}
    </div>
  );
};
