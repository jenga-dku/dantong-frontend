import { forwardRef, HTMLAttributes, LegacyRef, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { RegisterOptions } from 'react-hook-form';
import { FormRegister } from '@/types/react-hook-form';

export const LabelVariants = cva(`flex flex-col w-full rounded-lg p-3`, {
  variants: {
    shadow: {
      default: '',
      true: 'shadow-[1px_0.5px_1px_0.3px_rgba(0,0,0,0.2)]',
    },
    outline: {
      default: '',
      true: 'border-[1px] border-solid border-zinc-300',
    },
  },
  defaultVariants: {
    shadow: 'default',
    outline: 'default',
  },
});

export const InputVariants = cva(
  `bg-white px-1 text-black focus:outline-none`,
  {
    variants: {
      error: {
        default: '',
        true: 'placeholder:text-error text-error',
      },
    },
    defaultVariants: {
      error: 'default',
    },
  },
);

export const TextVariants = cva(
  `bg-white px-1 text-black absolute mt-[-1.2rem] text-xs text-[#999]`,
  {
    variants: {},
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface InputProps
  extends Omit<HTMLAttributes<HTMLLabelElement | HTMLInputElement>, 'style'>,
    VariantProps<typeof LabelVariants>,
    VariantProps<typeof InputVariants>,
    VariantProps<typeof TextVariants> {
  label?: string;
  maxLength?: number;
  type?: 'text' | 'password';
  style?: {
    textStyle?: string;
    labelStyle?: string;
    inputStyle?: string;
  };
  name: string;
  inputContent?: string | ReactNode;
  value?: string;
  placeholder?: string;
  outline?: boolean;
  shadow?: boolean;
  background?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.LegacyRef<HTMLInputElement>;
  register?: FormRegister;
  rules?: RegisterOptions;
  error?: boolean;
}

export const Input = forwardRef(
  (
    {
      label,
      className,
      type = 'text',
      onChange = () => {},
      style,
      inputContent,
      shadow,
      outline,
      background,
      register,
      rules,
      ...props
    }: InputProps,
    ref: LegacyRef<HTMLInputElement>,
  ) => {
    const { register: registerInput, formState } = register || {};
    const error = !!formState?.errors[props.name];
    return (
      <label
        className={cn(
          LabelVariants({ shadow, outline }),
          style?.labelStyle,
          background,
        )}
      >
        <span className={cn(TextVariants(), style?.textStyle)}>{label}</span>
        <input
          className={cn(
            InputVariants({ error }),
            style?.inputStyle,
            className,
            background,
          )}
          autoComplete="off"
          type={type}
          onChange={onChange}
          ref={ref}
          {...(registerInput && registerInput(props.name, rules))}
          {...props}
        />
        {inputContent}
      </label>
    );
  },
);
