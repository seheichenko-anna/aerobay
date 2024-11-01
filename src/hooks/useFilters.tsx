import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function useFilters() {
  const filters = useSelector((state: RootState) => state.filters);

  return filters;
}
