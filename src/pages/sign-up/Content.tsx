import { ReactNode } from 'react';

export const Content = ({
  message,
  content,
  subMessage,
}: {
  message: string;
  content?: ReactNode;
  subMessage?: string;
}) => {
  const parseNewLine = (content: string) =>
    content.split('\\n').map((line) => (
      <>
        {line} <br />
      </>
    ));

  return (
    <div className="w-full">
      <div className="mb-6 leading-[1.2]">
        <p className="font-SejongHospitalBold text-xl text-primary">
          {parseNewLine(message)}
        </p>
        {subMessage && (
          <p className="font-NanumSquareBold text-sm">
            {parseNewLine(subMessage)}
          </p>
        )}
      </div>
      {content}
    </div>
  );
};
