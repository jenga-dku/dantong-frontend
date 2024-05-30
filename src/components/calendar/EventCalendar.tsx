import './styles.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Toolbar } from './Toolbar';

export const EventCalendar = () => {
  const localizer = momentLocalizer(moment);

  return (
    <div>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        style={{ height: 400 }}
        components={{ toolbar: Toolbar }}
        formats={{
          weekdayFormat: (date, culture, localizer) =>
            localizer!.format(date, 'ddd', culture).toUpperCase(),
        }}
      />
    </div>
  );
};
