import { ProductFilter } from "../components/Products/Sidebar";
import { BaseProduct } from "../redux/types";

export const getFilteredProducts = (
  products: BaseProduct[],
  filters: ProductFilter[],
) => {
  // Get an array of filter options where at least one option in the group is checked
  const activeFilterGroups = filters
    .map(filter => filter.options.filter(option => option.checked))
    .filter(group => group.length > 0); // Keep only groups with checked options

  if (activeFilterGroups.length === 0) {
    return products; // If no filters are applied, return all products
  }

  const filteredProducts = products.filter(product => {
    // Ensure the product satisfies at least one option from each filter group
    return activeFilterGroups.every(group =>
      group.some(option =>
        product.subcategories.some(sub => sub.value === option.label),
      )
    );
  });

  return filteredProducts;
};
