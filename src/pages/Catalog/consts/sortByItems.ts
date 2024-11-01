export const sortByItems = [
  { id: 1, title: 'Low To High' },
  { id: 2, title: 'High To Low' },
  { id: 3, title: 'New' },
  { id: 4, title: 'Sale' },
] as const;

export type SortByItems = (typeof sortByItems)[number]['title'];
