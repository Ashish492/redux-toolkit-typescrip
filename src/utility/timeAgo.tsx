import { parseISO } from "date-fns";
import { formatDistanceToNow } from "date-fns/esm";

export const timeAgo = (timeStamp: string) =>
  formatDistanceToNow(parseISO(timeStamp));
