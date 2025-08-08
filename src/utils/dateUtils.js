import { format } from 'date-fns';

export const formatTimestamp = (timestamp) => {
  return format(timestamp, 'p');
};
