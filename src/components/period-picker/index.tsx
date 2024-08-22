import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { renderCustomHeader } from '../calendar/Header';
import { Input } from './Input';
import './styles.css';
import moment from 'moment';
import { setMinutes } from 'date-fns';
import { Period } from '@src/types/period-picker/period';
import { UseFormSetValue } from 'react-hook-form';
import { useEffect } from 'react';
import { getFormattedDate } from '@/utils/getFormattedDate';

export const PeriodPicker = ({
  periodState: [period, setPeriod],
  setValue,
}: {
  periodState: [Period, React.Dispatch<React.SetStateAction<Period>>];
  setValue?: UseFormSetValue<any>;
}) => {
  const currentDate = new Date();

  useEffect(() => {
    setValue && setValue('startTime', getFormattedDate(period.start));
    setValue && setValue('endTime', getFormattedDate(period.end));
  }, [period]);

  return (
    <div className="flex items-center gap-3">
      <DatePicker
        selected={period.start}
        showPopperArrow={false}
        renderCustomHeader={renderCustomHeader}
        onChange={(date: Date) => {
          setPeriod((prev) => ({ ...prev, start: date }));
        }}
        customInput={<Input />}
        dateFormat="MM.dd a hh:mm"
        showTimeInput
        minDate={moment().toDate()}
        minTime={setMinutes(currentDate, 0)}
      />
      <p>~</p>
      <DatePicker
        selected={period.end}
        showPopperArrow={false}
        popperPlacement="bottom-end"
        renderCustomHeader={renderCustomHeader}
        onChange={(date: Date) => {
          setPeriod((prev) => ({ ...prev, end: date }));
        }}
        customInput={<Input />}
        dateFormat="MM.dd a hh:mm"
        showTimeInput
        minDate={moment().toDate()}
        minTime={setMinutes(currentDate, 0)}
      />
    </div>
  );
};
