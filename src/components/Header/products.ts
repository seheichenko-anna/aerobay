interface Accessory {
  id: string;
  link: string;
  imageClass: string;
  title: string;
}

export const accessories: Accessory[] = [
  { id: '1', link: '/', imageClass: 'photo_scaner', title: 'Scaner' },
  { id: '2', link: '/', imageClass: 'photo_camera', title: 'Camera' },
  { id: '3', link: '/', imageClass: 'photo_battery', title: 'Battery' },
  {
    id: '4',
    link: '/',
    imageClass: 'photo_control_panel',
    title: 'Control panel',
  },
  { id: '5', link: '/', imageClass: 'photo_antenna', title: 'Antenna' },
  { id: '6', link: '/', imageClass: 'photo_tank', title: 'Tank' },
  {
    id: '7',
    link: '/',
    imageClass: 'photo_base_station',
    title: 'Base station',
  },
];
