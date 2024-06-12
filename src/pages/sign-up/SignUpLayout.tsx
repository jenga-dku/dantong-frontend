import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

export const SignUpLayout = ({
  children,
  step,
}: {
  children: ReactNode[];
  step: number;
}) => {
  const { pathname } = useLocation();
  const isInSuccessPage = pathname === '/sign-up/success';

  return (
    <div
      className={`pwa-layout grid h-full w-full gap-8 p-8 ${isInSuccessPage && 'gradientBackground'}`}
    >
      {children[step]}
    </div>
  );
};
