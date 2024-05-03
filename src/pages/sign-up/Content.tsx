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
    content.split('\\n').map((line) => <p key={line}>{line}</p>);

  return (
    <div className="w-full">
      <div className="mb-6 leading-[1.2]">
        <div className="font-SejongHospitalBold text-xl text-primary">
          {parseNewLine(message)}
        </div>
        {subMessage && (
          <div className="font-NanumSquareBold text-sm">
            {parseNewLine(subMessage)}
          </div>
        )}
      </div>
      {content}
    </div>
  );
};
