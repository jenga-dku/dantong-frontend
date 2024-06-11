import { ReactNode } from 'react';
import { Box } from '../../../components/Box';

export const QuestionBox = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) => (
  <Box className="flex-col gap-3">
    <div>
      <p className="mb-2">{title}</p>
      <p className="text-[0.8rem] text-zinc-500">{description}</p>
    </div>
    {children}
  </Box>
);
