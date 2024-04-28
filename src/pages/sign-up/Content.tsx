import { ReactNode } from 'react';

export const Content = ({
  message,
  content,
}: {
  message: string;
  content?: ReactNode;
}) => {
  return (
    <div className="w-full">
      <p className="font-SejongHospitalBold mb-6 text-xl leading-[1.2] text-primary">
        {message.split('\\n').map((line) => (
          <>
            {line} <br />
          </>
        ))}
      </p>
      {content}
    </div>
  );
};
