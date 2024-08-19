import { Box } from '@/components/ui/Box';
import { Input as DefaultInput, InputProps } from '@/components/ui/Input';

export const Input = (props: InputProps) => (
  <Box>
    <DefaultInput className="text-md w-full" {...props} />
  </Box>
);

Input.Title = (props: Pick<InputProps, 'onChange' | 'value'>) => (
  <Input name="title" placeholder="제목을 입력해주세요" {...props} />
);

Input.Summary = (props: Pick<InputProps, 'onChange' | 'value'>) => (
  <Input
    name="description"
    placeholder="간단한 설명을 입력해주세요"
    {...props}
  />
);
