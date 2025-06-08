const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const priceConverter = (price) => {
  return intl.format(price);
};

export default function useCurrency(price) {
  return priceConverter(price);
}
