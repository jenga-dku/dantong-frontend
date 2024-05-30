import './styles.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Toolbar } from './Toolbar';
import { events } from '../../data';

export const EventCalendar = () => {
  const localizer = momentLocalizer(moment);

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
      />
    </div>
  );
};
