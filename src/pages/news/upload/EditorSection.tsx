import { Editor } from '@/components/Editor';
import { Box } from '@/components/ui/Box';
import { useState } from 'react';

export const EditorSection = () => {
  const [desc, setDesc] = useState('');

  return (
    <Box className="overflow-hidden p-0 [&>div]:w-full">
      <Editor setDesc={setDesc} />
    </Box>
  );
};
