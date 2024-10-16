export type TAvailabilityChecked = {
  'In Stock': boolean;
  'Not Available': boolean;
};

export type TDroneTypeChecked = {
  'Model Drone': boolean;
  'Ready-Solution Drone': boolean;
};

const addStringsWithBoolean = (filterStrings: readonly string[]) =>
  filterStrings.reduce(
    (acc, str) => {
      acc[str] = false;
      return acc;
    },
    {} as Record<(typeof filterStrings)[number], boolean>,
  );

// engine type ====================================================
const engineTypeStrings = ['Electric', 'Hybrid'] as const;

export const engineTypeStringsWithBoolean =
  addStringsWithBoolean(engineTypeStrings);

export type TEngineTypeChecked = typeof engineTypeStringsWithBoolean;

// battery life ====================================================
const batteryLifeStrings = [
  '5 hours',
  '5-7 hours',
  '7-13 hours',
  'more 13 hours',
] as const;

export const batteryLifeStringsWithBoolean =
  addStringsWithBoolean(batteryLifeStrings);

export type TBatteryLifeChecked = typeof batteryLifeStringsWithBoolean;

// battery
const batteryStrings = [
  '4000 mah',
  '5000 mah',
  '10000 mah',
  '20000 mah',
  'more than 20000 mah',
] as const;

export const batteryStringsWithBoolean = addStringsWithBoolean(batteryStrings);

export type TBatteryChecked = typeof batteryLifeStringsWithBoolean;

// flight distance
const flightDistanceStrings = [
  'up to 100 meters',
  'up to 500 meters',
  'up to 1000 meters',
  'up to 5000 meters',
  'up to 10 000 meters'
] as const;

export const flightDistanceStringsWithBoolean = addStringsWithBoolean(flightDistanceStrings);

export type TFlightDistanceChecked = typeof flightDistanceStringsWithBoolean;

// accessories type
const accessoriesTypeStrings = [
  'Scanner',
  'Camera',
  'Antenna',
  'Tank',
  'Remote controller',
  '3D Glasses',
  'Battery',
  'Base Station'
] as const;

export const accessoriesTypeStringsWithBoolean = addStringsWithBoolean(accessoriesTypeStrings);

export type TAccessoriesTypeChecked = typeof accessoriesTypeStringsWithBoolean;
