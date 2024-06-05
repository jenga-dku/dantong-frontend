import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { renderCustomHeader } from '../calendar/Header';
import { Input } from './Input';
import './styles.css';

export type Period = {
  start: Date;
  end: Date;
};
export const PeriodPicker = ({
  periodState: [period, setPeriod],
}: {
  periodState: [Period, React.Dispatch<React.SetStateAction<Period>>];
}) => {
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
        dateFormat="yy/MM/dd"
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
        dateFormat="yy/MM/dd"
      />
    </div>
  );
};
