import { Input as DefaultInput, InputProps } from '@/components/ui/Input';

export const Input: React.FC<InputProps> = ({ ...props }) => {
  return <DefaultInput {...props} shadow="shadow" style={INPUT_STYLE} />;
};

const INPUT_STYLE = {
  labelStyle: 'flex-row items-center p-3',
  textStyle: 'absolute mt-[-2.5rem] text-xs text-[#999]',
  inputStyle: 'bg-white px-1 text-black',
};
