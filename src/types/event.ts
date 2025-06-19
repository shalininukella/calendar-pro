export interface CalendarEvent {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  color: string;
  date: string; // YYYY-MM-DD format
}

export interface EventConflict {
  events: CalendarEvent[];
  hasConflict: boolean;
}