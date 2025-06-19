import React, { useState } from 'react';
import { CalendarEvent } from '../types/event';
import { CalendarHeader } from './CalendarHeader';
import { CalendarGrid } from './CalendarGrid';
import { getNextMonth, getPreviousMonth } from '../utils/dateUtils';

interface CalendarProps {
  events: CalendarEvent[];
}

export const Calendar: React.FC<CalendarProps> = ({ events }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePreviousMonth = () => {
    setCurrentDate(getPreviousMonth(currentDate));
  };

  const handleNextMonth = () => {
    setCurrentDate(getNextMonth(currentDate));
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <CalendarHeader
        currentDate={currentDate}
        onPreviousMonth={handlePreviousMonth}
        onNextMonth={handleNextMonth}
      />
      
      <CalendarGrid
        currentDate={currentDate}
        events={events}
      />
    </div>
  );
};