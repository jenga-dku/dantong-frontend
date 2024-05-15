import { LegacyRef, forwardRef } from 'react';

export const Input = forwardRef(
  (
    { value, onClick }: { value?: Date; onClick?: () => void },
    ref: LegacyRef<HTMLButtonElement> | undefined,
  ) => (
    <button
      className="rounded-md border-[1px] border-solid border-zinc-300 px-4 py-1 text-xs"
      onClick={onClick}
      ref={ref}
    >
      <>{value?.toString().replaceAll('/', '.')}</>
    </button>
  ),
);
