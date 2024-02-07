// components/Calendar.tsx
import React from 'react';
import Event from './Event';




interface CalendarProps {
  events: Event[];
}

const Calendar: React.FC<CalendarProps> = ({ events }) => {
  return (
    <div>
      {/* Render Calendar Grid */}
      {events.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  );
};

export default Calendar;
