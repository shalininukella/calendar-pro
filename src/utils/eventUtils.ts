import { CalendarEvent, EventConflict } from '../types/event';

export const getEventsForDate = (events: CalendarEvent[], date: string): CalendarEvent[] => {
  return events.filter(event => event.date === date);
};

export const checkEventConflicts = (events: CalendarEvent[]): EventConflict => {
  if (events.length <= 1) {
    return { events, hasConflict: false };
  }

  const sortedEvents = [...events].sort((a, b) => {
    const timeA = parseInt(a.startTime.replace(':', ''));
    const timeB = parseInt(b.startTime.replace(':', ''));
    return timeA - timeB;
  });

  let hasConflict = false;
  for (let i = 0; i < sortedEvents.length - 1; i++) {
    const currentEnd = parseInt(sortedEvents[i].endTime.replace(':', ''));
    const nextStart = parseInt(sortedEvents[i + 1].startTime.replace(':', ''));
    
    if (currentEnd > nextStart) {
      hasConflict = true;
      break;
    }
  }

  return { events: sortedEvents, hasConflict };
};

export const getEventDuration = (startTime: string, endTime: string): string => {
  const start = parseInt(startTime.replace(':', ''));
  const end = parseInt(endTime.replace(':', ''));
  
  const startHour = Math.floor(start / 100);
  const startMin = start % 100;
  const endHour = Math.floor(end / 100);
  const endMin = end % 100;
  
  const totalMinutes = (endHour * 60 + endMin) - (startHour * 60 + startMin);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  
  if (hours === 0) {
    return `${minutes}m`;
  } else if (minutes === 0) {
    return `${hours}h`;
  } else {
    return `${hours}h ${minutes}m`;
  }
};