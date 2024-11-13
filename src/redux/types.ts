import { Subcategory } from './subcategories/subcategoriesOperations';

export interface BaseProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discount: number;
  image_url: string;
  amount: number;
  manufacturer_id: number;
  subcategories: Subcategory[];
  images: string[];
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  filter_values: [];
}
