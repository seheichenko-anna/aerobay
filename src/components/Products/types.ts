import { BaseProduct } from "../../redux/types";

export interface IProduct extends BaseProduct {
  category?: string;
  newPrice?: number;
  oldPrice?: number;
  isNew?: boolean;
  isInStock?: boolean;
  href?: string;
  imagePath?: string;
  hasColorGroups?: boolean;
}
