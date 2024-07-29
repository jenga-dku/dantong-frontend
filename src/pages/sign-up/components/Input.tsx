import { ReactNode, useState } from 'react';

type InputProps = React.HTMLAttributes<HTMLInputElement> & {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  additionalElement?: ReactNode;
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
  additionalElement,
  className,
  label,
  maxLength,
  autoFocus,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(true);

  return (
    <div
      className={`flex flex-col justify-between border-b-2 border-solid pb-1 pl-2 pr-5 font-NanumSquareBold text-lg transition delay-150 ease-in-out ${value.length > 0 && isFocused ? 'border-primary' : 'border-[#CAD4E0]'}`}
    >
      <label className="mb-1 text-sm text-[#aaa]">
        {value.length > 0 && label}
      </label>
      <div className="flex justify-between">
        <input
          className={`w-[180px] ${className}`}
          type={type}
          placeholder={placeholder}
          value={value}
          autoFocus={autoFocus ?? true}
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
        {additionalElement}
      </div>
    </div>
  );
};
