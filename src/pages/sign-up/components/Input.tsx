import { ReactNode, useState } from 'react';
import { clsx } from 'clsx';
type InputProps = React.HTMLAttributes<HTMLInputElement> & {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  inputContent?: ReactNode;
  className?: string;
  label?: string;
  autoFocus?: boolean;
  maxLength?: number;
  type?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const Input = ({
  value,
  type,
  onChange,
  onKeyDown,
  placeholder,
  inputContent,
  className,
  label,
  maxLength,
  autoFocus,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(true);

  return (
    <div
      className={clsx([
        value.length > 0 && isFocused ? 'border-primary' : ' border-[#CAD4E0]',
        'flex flex-col justify-between border-b-2 border-solid pb-1 pl-2 pr-5 font-NanumSquareBold text-lg transition delay-150 ease-in-out',
      ])}
    >
      <label className="mb-1 text-sm text-[#aaa]">
        {value.length > 0 && label}
      </label>
      <div className="flex justify-between">
        <input
          className="w-[180px] text-2xl"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          onKeyDown={onKeyDown}
          {...props}
        />
        {inputContent}
      </div>
    </div>
  );
};
