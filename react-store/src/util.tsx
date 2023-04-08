export function formatMoney(num: number | string) {
  if (typeof num === "number") return num.toFixed(2).toLocaleString() + "$";
  return parseFloat(num).toFixed(2).toLocaleString() + "$";
}
