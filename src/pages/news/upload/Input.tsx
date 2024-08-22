import { Box } from '@/components/ui/Box';
import { Input as DefaultInput, InputProps } from '@/components/ui/Input';

export const Input = (props: InputProps) => (
  <Box className="p-2">
    <DefaultInput {...props} />
  </Box>
);

Input.Title = (props: Omit<InputProps, 'name' | 'placeholder'>) => (
  <Input name="title" placeholder="제목을 입력해주세요" {...props} />
);

Input.Summary = (props: Omit<InputProps, 'name' | 'placeholder'>) => (
  <Input
    name="description"
    placeholder="간단한 설명을 입력해주세요"
    {...props}
  />
);
