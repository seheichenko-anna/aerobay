import {
  accessoriesImg,
  accessoriesSmallImg,
  customizeDroneImg,
  customizeDroneSmallImg,
  dronesImg,
  dronesSmallImg,
} from '../../assets/catalog/index';

const categoryTabs = [
  {
    id: 1,
    title: 'Drones',
    href: 'drones',
    imagePath: dronesImg,
    smallImagePath: dronesSmallImg,
  },
  {
    id: 2,
    title: 'Accessories',
    href: 'accessories',
    imagePath: accessoriesImg,
    smallImagePath: accessoriesSmallImg,
  },
  {
    id: 3,
    title: 'Customize drone',
    href: 'customize_drone',
    imagePath: customizeDroneImg,
    smallImagePath: customizeDroneSmallImg,
  },
] as const;

// Extract the type from the 'title' field
export type CategoryTabType = (typeof categoryTabs)[number]['title'] | 'All Products';

export default categoryTabs;
