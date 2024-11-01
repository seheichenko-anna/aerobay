import { Subcategory } from "./subcategories/subcategoriesOperations";

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
  created_at: string;
}
