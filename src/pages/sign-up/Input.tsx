import { ReactNode } from 'react';

type InputProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  additionalElement?: ReactNode;
  className?: string;
  label?: string;
  ref?: React.MutableRefObject<null>;
};

export const Input = ({
  value,
  onChange,
  placeholder,
  additionalElement,
  className,
  label,
  ref,
  ...props
}: InputProps) => {
  return (
    <div
      className={`font-NanumSquareBold flex flex-col justify-between border-b-2 border-solid pb-1 pl-2 pr-5 text-lg transition delay-150 ease-in-out ${value.length > 0 ? 'border-primary' : 'border-[#CAD4E0]'}`}
    >
      <label className="mb-1 text-sm text-[#aaa]">{label}</label>
      <div className="flex justify-between">
        <input
          className={className}
          type="text"
          placeholder={placeholder}
          value={value}
          autoFocus={true}
          onChange={onChange}
          {...props}
        />
        {additionalElement}
      </div>
    </div>
  );
};
