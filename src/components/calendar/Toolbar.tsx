import { NavigateAction, ToolbarProps } from 'react-big-calendar';
import { CalendarEvent, CalendarResource } from './types';
import { getMonthInKorean } from '@utils/getMonthInKorean';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

export const Toolbar = (
  props: ToolbarProps<CalendarEvent, CalendarResource>,
) => {
  const { label, onNavigate } = props;
  const month = label.split(' ')[0];
  const navigate = (action: NavigateAction) => {
    onNavigate(action);
  };

  return (
    <div className="mb-3 flex w-full justify-evenly">
      <button type="button" onClick={navigate.bind(null, 'PREV')}>
        <FaChevronLeft />
      </button>
      <strong className="text-xl">{getMonthInKorean(month)}</strong>
      <button type="button" onClick={navigate.bind(null, 'NEXT')}>
        <FaChevronRight />
      </button>
    </div>
  );
};
