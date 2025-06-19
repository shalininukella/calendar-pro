import { 
  format, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval,
  isSameMonth,
  isToday,
  isSameDay,
  addMonths,
  subMonths,
  parseISO
} from 'date-fns';

export const getCalendarDays = (date: Date) => {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });

  return eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd
  });
};

export const formatMonthYear = (date: Date) => {
  return format(date, 'MMMM yyyy');
};

export const formatDate = (date: Date) => {
  return format(date, 'yyyy-MM-dd');
};

export const isDayInCurrentMonth = (day: Date, currentDate: Date) => {
  return isSameMonth(day, currentDate);
};

export const isDayToday = (day: Date) => {
  return isToday(day);
};

export const isDaySame = (day1: Date, day2: Date) => {
  return isSameDay(day1, day2);
};

export const getNextMonth = (date: Date) => {
  return addMonths(date, 1);
};

export const getPreviousMonth = (date: Date) => {
  return subMonths(date, 1);
};

export const parseDate = (dateString: string) => {
  return parseISO(dateString);
};

export const formatTime = (time: string) => {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  return `${displayHour}:${minutes} ${ampm}`;
};