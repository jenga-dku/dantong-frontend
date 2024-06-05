import { LegacyRef, forwardRef } from 'react';
import { IoCalendarClearOutline } from 'react-icons/io5';

export const Input = forwardRef(
  (
    { value, onClick }: { value?: Date; onClick?: () => void },
    ref: LegacyRef<HTMLButtonElement> | undefined,
  ) => (
    <button
      className="flex items-center gap-1 rounded-md border-[1px] border-solid border-zinc-300 px-3 py-2 text-xs leading-none text-zinc-600"
      onClick={onClick}
      ref={ref}
    >
      <>
        <IoCalendarClearOutline />
        {value?.toString()}
      </>
    </button>
  ),
);
