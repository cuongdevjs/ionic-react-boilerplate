import format from "date-fns/format";

export const formatTime = (time: string) => {
  return format(new Date(time), "dd/MM/yyyy");
};
