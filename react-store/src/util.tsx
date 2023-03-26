export function formatMoney(num: number) {
  return Number(num.toFixed(2)).toLocaleString() + "$ ";
}