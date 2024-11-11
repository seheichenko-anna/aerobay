import { ProductFilter } from "../components/Products/Sidebar";
import { BaseProduct } from "../redux/types";

export const getFilteredProducts = (
  products: BaseProduct[],
  filters: ProductFilter[],
) => {
  const currentCheckedFilterOptions = filters
    .map(filter => filter.options.filter(option => option.checked))
    .flat();

  if (currentCheckedFilterOptions.length === 0) {
    return products;
  }

  const filteredProducts = products.reduce<BaseProduct[]>((acc, product) => {
    const allMatch = currentCheckedFilterOptions.some(option =>
      product.subcategories.some(sub => sub.value === option.label),
    );

    if (allMatch) {
      acc.push(product);
    }

    return acc;
  }, []);

  return filteredProducts;
};
