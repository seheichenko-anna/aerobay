import { useState } from 'react';
import { CheckboxGroup } from '../../components/Products/Sidebar/CheckboxGroup';
import { getCheckboxOptions } from '../../components/Products/Sidebar/filterOptions/getCheckboxOptions';
import {
  batteryLifeStringsWithBoolean,
  batteryStringsWithBoolean,
  engineTypeStringsWithBoolean,
  flightDistanceStringsWithBoolean,
} from './filterOptions';

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

  return (
    <>
      <CheckboxGroup title="Engine type" options={engineTypeOptions} />
      <CheckboxGroup title="Battery life" options={batteryLifeOptions} />
      <CheckboxGroup title="Battery" options={batteryOptions} />
      <CheckboxGroup title="Flight distance" options={flightDistanceOptions} />
    </>
  );
};

export default DronesFilters;
