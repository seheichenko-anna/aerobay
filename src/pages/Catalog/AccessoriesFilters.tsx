import { useState } from 'react';
import { CheckboxGroup } from '../../components/Products/Sidebar/CheckboxGroup';
import { getCheckboxOptions } from '../../components/Products/Sidebar/filterOptions/getCheckboxOptions';
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
