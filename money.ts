export function formatINRFromPaise(amountPaise: number): string {
  if (!Number.isSafeInteger(amountPaise)) {
    throw new TypeError("Money must be supplied as an integer number of paise.");
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2
  }).format(amountPaise / 100);
}
