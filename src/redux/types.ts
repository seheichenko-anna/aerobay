export interface BaseProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discount: number;
  image_url: string;
  amount: number;
  manufacturer_id: number;
  subcategories: SubCategory[];
  created_at: string;
}

export type SubCategory = {
  id: number;
  name: string;
  value: string;
  category_id: number | null;
  group_id: number | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};
