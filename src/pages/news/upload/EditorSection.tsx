import { Editor } from '@/components/Editor';
import { Box } from '@/components/ui/Box';
import { FormRegister } from '@/types/react-hook-form';

export const EditorSection = ({
  register,
}: {
  register: Required<FormRegister>;
}) => {
  return (
    <Box className="overflow-hidden p-0 [&>div]:w-full">
      <Editor {...register} />
    </Box>
  );
};
