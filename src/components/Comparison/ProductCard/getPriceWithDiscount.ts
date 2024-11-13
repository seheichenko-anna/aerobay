export const getPriceWithDiscount = (
  price: number,
  discount: number
): number => {
  return price * ((100 - discount) / 100);
};
