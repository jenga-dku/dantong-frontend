import { HTMLAttributes, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

export const LabelVariants = cva(`flex flex-col w-full rounded-lg p-3`, {
  variants: {
    shadow: {
      default: '',
      shadow: 'shadow-[1px_0.5px_1px_0.3px_rgba(0,0,0,0.2)]',
    },
    outline: {
      default: '',
      outline: 'border-[1px] border-solid border-zinc-300',
    },
  },
  defaultVariants: {
    shadow: 'default',
    outline: 'default',
  },
});

export const InputVariants = cva(`bg-white px-1 text-black`, {
  variants: {},
  defaultVariants: {
    variant: 'default',
  },
});

export const TextVariants = cva(`bg-white px-1 text-black`, {
  variants: {},
  defaultVariants: {
    variant: 'default',
  },
});

export interface InputProps
  extends Omit<HTMLAttributes<HTMLLabelElement | HTMLInputElement>, 'style'>,
    VariantProps<typeof LabelVariants>,
    VariantProps<typeof InputVariants>,
    VariantProps<typeof TextVariants> {
  label?: string;
  children?: ReactNode;
  maxLength?: number;
  type?: string;
  style?: {
    textStyle?: string;
    labelStyle?: string;
    inputStyle?: string;
  };
  name: string;
  inputContent?: string | ReactNode;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  label,
  children,
  maxLength,
  type = 'text',
  onChange,
  style,
  name,
  inputContent,
  shadow,
  outline,
  placeholder,
  ...props
}: InputProps) => {
  return (
    <label
      className={cn(LabelVariants({ shadow, outline }), style?.labelStyle)}
    >
      <span className={cn(TextVariants(), style?.textStyle)}>{label}</span>
      <input
        type={type}
        onChange={onChange}
        className={cn(InputVariants(), style?.inputStyle)}
        maxLength={maxLength}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        {...props}
      />
      {children}
      {inputContent}
    </label>
  );
};
