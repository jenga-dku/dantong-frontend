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
      <h2 className="font-NanumSquareBold text-lg">게시글 둘러보기</h2>
      {children}
    </div>
  );
};
