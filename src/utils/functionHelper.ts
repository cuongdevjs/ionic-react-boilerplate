import format from "date-fns/format";

export const formatTime = (time: string) => {
  return format(new Date(time), "dd/MM/yyyy");
};

export const formatCurrency = (
  currency: number,
  style: string = "currency"
) => {
  const _formatter = new Intl.NumberFormat("vi-VI", {
    style,
    currency: "VND",
  });
  return currency ? _formatter.format(currency) : "0";
};
