import { ReactNode, useState } from 'react';

type InputProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  additionalElement?: ReactNode;
  className?: string;
  label?: string;
  autoFocus?: boolean;
  ref?: React.RefObject<HTMLInputElement>;
  type?: string;
};

export const Input = ({
  value,
  type,
  onChange,
  placeholder,
  additionalElement,
  className,
  label,
  autoFocus,
  ref,
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
          className={className}
          type={type}
          placeholder={placeholder}
          value={value}
          autoFocus={autoFocus ?? true}
          onChange={onChange}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          {...props}
        />
        {additionalElement}
      </div>
    </div>
  );
};
