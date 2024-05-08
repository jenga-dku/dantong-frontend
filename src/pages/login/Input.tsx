import { ReactNode } from 'react';

export const Input = ({
  label,
  children,
  maxLength,
  type,
  onChange,
}: {
  label: string;
  children?: ReactNode;
  maxLength?: number;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <label className="flex h-[3.2rem] w-full items-center justify-between rounded-lg p-3 shadow-[1px_0.5px_1px_0.3px_rgba(0,0,0,0.2)]">
      <p className="absolute ml-2 mt-[-3rem] text-sm">{label}</p>
      <input
        type={type ?? 'text'}
        onChange={(e) => {
          onChange(e);
        }}
        className="bg-white px-1 text-black"
        maxLength={maxLength}
      />
      {children}
    </label>
  );
};
