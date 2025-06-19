import React from "react";
import { CalendarEvent } from "../types/event";
import { EventCard } from "./EventCard";
import { getEventsForDate, checkEventConflicts } from "../utils/eventUtils";
import {
  formatDate,
  isDayInCurrentMonth,
  isDayToday,
} from "../utils/dateUtils";

interface CalendarDayProps {
  day: Date;
  currentDate: Date;
  events: CalendarEvent[];
}

export const CalendarDay: React.FC<CalendarDayProps> = ({
  day,
  currentDate,
  events,
}) => {
  const dayEvents = getEventsForDate(events, formatDate(day));
  const { events: sortedEvents, hasConflict } = checkEventConflicts(dayEvents);
  const isCurrentMonth = isDayInCurrentMonth(day, currentDate);
  const isToday = isDayToday(day);
  const dayNumber = day.getDate();

  const maxVisibleEvents = 3;
  const visibleEvents = sortedEvents.slice(0, maxVisibleEvents);
  const hiddenEventsCount = sortedEvents.length - maxVisibleEvents;

  return (
    <div
      className={`
        min-h-[7.5rem] p-2 border border-gray-200 relative group
        bg-white hover:bg-gray-50 transition-colors duration-200 overflow-hidden
        ${!isCurrentMonth ? "bg-gray-50 text-gray-400" : ""}
        ${isToday ? "ring-2 ring-blue-500 bg-blue-50" : ""}
      `}
    >
      <div className="flex justify-between items-start mb-1">
        <span
          className={`
            text-sm font-semibold
            ${
              isToday
                ? "bg-blue-500 text-white w-7 h-7 rounded-full flex items-center justify-center shadow-sm"
                : isCurrentMonth
                ? "text-gray-900"
                : "text-gray-400"
            }
          `}
        >
          {dayNumber}
        </span>
        {hasConflict && (
          <div
            className="w-2 h-2 bg-red-500 rounded-full mt-1"
            title="Time conflicts detected"
          />
        )}
      </div>

      <div className="space-y-1">
        {visibleEvents.map((event, index) => (
          <EventCard
            key={event.id}
            event={event}
            isConflicted={hasConflict}
            index={index}
          />
        ))}

        {hiddenEventsCount > 0 && (
          <div className="text-[11px] text-gray-500 font-medium mt-1">
            +{hiddenEventsCount} more
          </div>
        )}
      </div>
    </div>
  );
};