import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go';
import { months } from '../../types/month';
export const renderCustomHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: ReactDatePickerCustomHeaderProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-evenly">
        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
          <GoTriangleLeft />
        </button>

        <div className="flex flex-col">
          <p className="text-xs ">{`${date.getFullYear()}`}</p>
          <p className="text-[1rem] font-bold">{`${months[date.getMonth()]}`}</p>
        </div>

        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
          <GoTriangleRight />
        </button>
      </div>
    </div>
  );
};
