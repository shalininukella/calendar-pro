import React from 'react';
import { CalendarEvent } from '../types/event';
import { CalendarDay } from './CalendarDay';
import { getCalendarDays } from '../utils/dateUtils';

interface CalendarGridProps {
  currentDate: Date;
  events: CalendarEvent[];
}

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const CalendarGrid: React.FC<CalendarGridProps> = ({ 
  currentDate, 
  events 
}) => {
  const calendarDays = getCalendarDays(currentDate);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Weekday Headers */}
      <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
        {WEEKDAYS.map((weekday) => (
          <div 
            key={weekday} 
            className="py-3 px-4 text-sm font-semibold text-gray-700 text-center border-r border-gray-200 last:border-r-0"
          >
            {weekday}
          </div>
        ))}
      </div>
      
      {/* Calendar Days Grid */}
      <div className="grid grid-cols-7">
        {calendarDays.map((day, index) => (
          <CalendarDay
            key={day.toISOString()}
            day={day}
            currentDate={currentDate}
            events={events}
          />
        ))}
      </div>
    </div>
  );
};