import { useState } from 'react';
import { CheckboxGroup } from '../../components/ProductsSection/Sidebar/CheckboxGroup';
import { getCheckboxOptions } from '../../components/ProductsSection/Sidebar/filterOptions/getCheckboxOptions';
import { accessoriesTypeStringsWithBoolean } from './filterOptions';

const AccessoriesFilters = () => {
  const accessoriesTypeOptions = getCheckboxOptions(
    ...useState(accessoriesTypeStringsWithBoolean),
  );

  return (
    <>
      <CheckboxGroup title="Type" options={accessoriesTypeOptions} />
    </>
  );
};
export default AccessoriesFilters;
