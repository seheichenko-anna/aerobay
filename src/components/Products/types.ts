export interface IProduct {
  id: number;
  title: string;
  category: string;
  newPrice: number;
  oldPrice: number;
  isNew: boolean;
  isInStock: boolean;
  href: string;
  imagePath: string;
  hasColorGroups: boolean;
}
