import dayjs from "dayjs";

export const formatDateDefault = (date: string) => {
  const dateTime = dayjs(date);
  return dateTime.format("YYYY-MM-DD HH:mm:ss");
};
