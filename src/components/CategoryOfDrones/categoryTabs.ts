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
    href: '/',
    imagePath: dronesImg,
    smallImagePath: dronesSmallImg,
  },
  {
    id: 2,
    title: 'Accessories',
    href: '/',
    imagePath: accessoriesImg,
    smallImagePath: accessoriesSmallImg,
  },
  {
    id: 3,
    title: 'Customize drone',
    href: '/',
    imagePath: customizeDroneImg,
    smallImagePath: customizeDroneSmallImg,
  },
] as const;

// Extract the type from the 'title' field
export type CategoryTab = (typeof categoryTabs)[number]['title'];

export default categoryTabs;
