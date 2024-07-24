import './styles.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Toolbar } from './Toolbar';
import { events } from './data';
import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import { SelectedDay } from '@src/types/calendar';

export const EventCalendar = () => {
  const localizer = momentLocalizer(moment);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<SelectedDay>();

  const handleSelect = ({ start, end }: { start: Date; end: Date }) => {
    const selectedDateEvents = events.filter((event) =>
      moment(start).isBetween(event.start, event.endDate, null, '[]'),
    );
    setIsBottomSheetOpen(true);
    setSelectedDay({
      current: start,
      events: selectedDateEvents,
    });
  };

  const formatDate = (date: Date | undefined, type?: string) => {
    const [year, month, day] =
      (date && date.toLocaleDateString().split('.')) ?? [];
    if (type === 'localeString') {
      return `${month}.${day}`;
    }
    return `${month}월 ${day}일`;
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="endDate"
        events={events}
        style={{ height: 400 }}
        showAllEvents={true}
        components={{ toolbar: Toolbar }}
        formats={{
          weekdayFormat: (date, culture, localizer) =>
            localizer!.format(date, 'ddd', culture).toUpperCase(),
        }}
        views={['month']}
        selectable={true}
        onSelectSlot={handleSelect}
      />
      <BottomSheet
        open={isBottomSheetOpen}
        snapPoints={({ minHeight, maxHeight }) => [
          maxHeight * 0.4,
          maxHeight * 0.4,
        ]}
        onDismiss={() => {
          setIsBottomSheetOpen(false);
        }}
      >
        <div className="flex flex-col gap-7 px-7 py-5">
          <p className="flex justify-center ">
            {formatDate(selectedDay?.current)}
          </p>
          <ul className="flex flex-col gap-4">
            {selectedDay?.events?.map((item) => (
              <li className="flex flex-col gap-2">
                <p className="w-fit rounded-sm bg-[#e0eeff] px-2 text-xs">
                  {formatDate(item.start, 'localeString')} ~
                  {formatDate(item.endDate, 'localeString')}
                </p>
                <p className="text-sm">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </BottomSheet>
    </div>
  );
};
