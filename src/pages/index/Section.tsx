import { ReactNode } from 'react';

export const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-NanumSquareBold text-lg">{title}</h2>
      {children}
    </div>
  );
};
