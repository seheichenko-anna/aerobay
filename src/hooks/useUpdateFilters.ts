import { useNavigate, useLocation } from "react-router-dom";
import { ProductFilter } from "../components/Products/Sidebar";

export const useUpdateFilters = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const updateFiltersInURI = (filters: ProductFilter[]) => {
    const searchParams = new URLSearchParams(location.search);

    // Clear existing filter-related params
    filters.forEach(filter => {
      searchParams.delete(filter.title);
    });

    // Add checked options to the query params
    filters.forEach(({ title, options }) => {
      const checkedOptions = options
        .filter(option => option.checked)
        .map(option => option.label);

      if (checkedOptions.length > 0) {
        searchParams.set(title, checkedOptions.join(','));
      }
    });

    // Update the URL
    navigate({ search: `?${searchParams.toString()}` }, { replace: true });
  };

  return updateFiltersInURI;
};

export const useClearFilters = () => {
  const navigate = useNavigate();

  const clearFiltersFromURI = () => {
    // Navigate to the same path without any query parameters
    navigate({ search: "" }, { replace: true });
  };

  return clearFiltersFromURI;
};
