import {
  accessoriesImg,
  customizeDroneImg,
  dronesImg,
} from '../../assets/catalog/index';

const categoryTabs = [
  {
    id: 1,
    title: 'Drones',
    href: 'drones',
    imagePath: dronesImg,
  },
  {
    id: 2,
    title: 'Accessories',
    href: 'accessories',
    imagePath: accessoriesImg,
  },
  {
    id: 3,
    title: 'Customize drone',
    href: 'customize_drone',
    imagePath: customizeDroneImg,
  },
] as const;

// Extract the type from the 'title' field
export type CategoryTabType = (typeof categoryTabs)[number]['title'] | 'All Products';

export default categoryTabs;
