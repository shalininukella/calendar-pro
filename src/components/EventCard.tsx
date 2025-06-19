import React from "react";
import { CalendarEvent } from "../types/event";
import { formatTime } from "../utils/dateUtils";
import { getEventDuration } from "../utils/eventUtils";

interface EventCardProps {
  event: CalendarEvent;
  isConflicted?: boolean;
  index?: number;
}

export const EventCard: React.FC<EventCardProps> = ({
  event,
  isConflicted = false,
  index = 0,
}) => {
  const duration = getEventDuration(event.startTime, event.endTime);

  return (
    <div
      className={`
        relative p-2 rounded-md text-white text-xs mb-1 cursor-pointer
        shadow-md transition-all duration-200 hover:shadow-lg hover:scale-[1.02]
        border border-transparent
        ${isConflicted ? "opacity-90 border-white ring-2 ring-red-500" : ""}
      `}
      style={{
        backgroundColor: event.color,
        marginLeft: isConflicted ? `${index * 6}px` : "0px",
      }}
      title={`${event.title} (${formatTime(event.startTime)} - ${formatTime(
        event.endTime
      )}, ${duration})`}
    >
      <div className="font-semibold leading-tight truncate">{event.title}</div>
      <div className="text-white/90 text-[11px] mt-0.5">
        {formatTime(event.startTime)} – {formatTime(event.endTime)} ({duration})
      </div>
    </div>
  );
};