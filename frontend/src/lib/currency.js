const USD_TO_INR_RATE = 83;

export const toINR = (amount) => Math.round(amount * USD_TO_INR_RATE);

export const formatINR = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(toINR(amount));
};
