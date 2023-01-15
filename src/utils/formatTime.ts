import { formatDistanceToNow } from 'date-fns';

export function fToNow(date: Date) {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : '';
}
