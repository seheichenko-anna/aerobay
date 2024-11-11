import { FieldMapping } from './AdminPanelForm';

export const fieldMappings: Record<string, FieldMapping[]> = {
  drone: [
    { id: 'title', type: 'text', label: 'Title' },
    { id: 'description', type: 'text', label: 'Description' },
    { id: 'price', type: 'number', label: 'Price' },
    { id: 'discount', type: 'number', label: 'Discount' },
    { id: 'image_url', type: 'text', label: 'Image URL' },
    { id: 'amount', type: 'number', label: 'Amount' },
    { id: 'group_id', type: 'number', label: 'Group Id' },
    { id: 'manufacturer_id', type: 'number', label: 'Manufacturer Id' },
    { id: 'images', type: 'text', label: 'Images' },
    { id: 'subcategories', type: 'text', label: 'Subcategories' },
  ],
  accessory: [
    { id: 'title', type: 'text', label: 'Title' },
    { id: 'description', type: 'text', label: 'Description' },
    { id: 'price', type: 'number', label: 'Price' },
    { id: 'discount', type: 'number', label: 'Discount' },
    { id: 'image_url', type: 'text', label: 'Image URL' },
    { id: 'dimensions', type: 'text', label: 'Dimensions' },
    { id: 'weight', type: 'text', label: 'Weight' },
    { id: 'type', type: 'text', label: 'Type' },
    { id: 'amount', type: 'number', label: 'Amount' },
    { id: 'category_id', type: 'number', label: 'Category Id' },
    { id: 'manufacturer_id', type: 'number', label: 'Manufacturer Id' },
    { id: 'images', type: 'number', label: 'Images' },
    { id: 'subcategories', type: 'text', label: 'Subcategories' },
  ],
  category: [
    { id: 'name', type: 'text', label: 'Name' },
    { id: 'description', type: 'text', label: 'Description' },
  ],
  groupForDrones: [
    { id: 'name', type: 'text', label: 'Name' },
    { id: 'description', type: 'text', label: 'Description' },
  ],
  manufacturer: [{ id: 'name', type: 'text', label: 'Name' }],
  subcategory: [
    { id: 'name', type: 'text', label: 'Name' },
    { id: 'value', type: 'text', label: 'Value' },
    { id: 'category_id', type: 'number', label: 'Category Id' },
    { id: 'group_id', type: 'number', label: 'Group Id' },
  ],
  image: [
    { id: 'name', type: 'text', label: 'Name' },
    { id: 'url', type: 'text', label: 'Url' },
  ],
};
