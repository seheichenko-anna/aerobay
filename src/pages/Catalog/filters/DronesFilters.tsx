import { useEffect, useState } from 'react';
import { CheckboxGroup } from '../../../components/Products/Sidebar/CheckboxGroup';
import { getCheckboxOptions } from '../../../components/Products/Sidebar/filterOptions/getCheckboxOptions';
import {
  batteryLifeStringsWithBoolean,
  batteryStringsWithBoolean,
  engineTypeStringsWithBoolean,
  flightDistanceStringsWithBoolean,
} from '../filterOptions';
import { fetchSubcategoriesThunk } from '../../../redux/subcategories/subcategoriesOperations';
import { selectSubcategories } from '../../../redux/subcategories/subcategoriesSlice';
import { useAppDispatch } from '../../../redux/hooks/useAppDispatch';
import { useAppSelector } from '../../../redux/hooks/useAppSelector';

function useSubcategories() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSubcategoriesThunk());
  }, [dispatch]);

  const subcategories = useAppSelector(selectSubcategories);

  return subcategories;
}

const DronesFilters = () => {
  const engineTypeOptions = getCheckboxOptions(
    ...useState(engineTypeStringsWithBoolean),
  );

  const batteryLifeOptions = getCheckboxOptions(
    ...useState(batteryLifeStringsWithBoolean),
  );

  const batteryOptions = getCheckboxOptions(
    ...useState(batteryStringsWithBoolean),
  );

  const flightDistanceOptions = getCheckboxOptions(
    ...useState(flightDistanceStringsWithBoolean),
  );

  // TODO: load engine type options
  // from subcategories, load filters where we don't have category or if have drones category
  const subcategories = useSubcategories();
  console.log(
    subcategories.filter(
      sub => sub.category === null || sub.category.name === 'Drones',
    ),
  );

  return (
    <>
      <CheckboxGroup title='Engine type' options={engineTypeOptions} />
      <CheckboxGroup title='Battery life' options={batteryLifeOptions} />
      <CheckboxGroup title='Battery' options={batteryOptions} />
      <CheckboxGroup title='Flight distance' options={flightDistanceOptions} />
    </>
  );
};

export default DronesFilters;
