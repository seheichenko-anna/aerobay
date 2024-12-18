import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Outlet, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { fetchCategoriesThunk } from '../../redux/categories/categoriesOperations';
import { fetchGroupsForDronesThunk } from '../../redux/groupsForDrones/groupsForDronesOperations';
import { fetchManufacturersThunk } from '../../redux/manufacturers/manufacturersOperations';
import { fetchSubcategoriesThunk } from '../../redux/subcategories/subcategoriesOperations';
import { fetchImagesThunk } from '../../redux/images/imagesOperations';

const user = {
  name: 'Test',
  email: 'test@example.com',
  imageUrl:
    'https://plus.unsplash.com/premium_photo-1673967792498-b8db6df56fb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};
const navigation = [
  { name: 'Dashboard', href: '#/admin', current: false },
  { name: 'Accessory', href: '#/admin/accessory', current: false },
  { name: 'Category', href: '#/admin/category', current: false },
  { name: 'Drone', href: '#/admin/drone', current: false },
  {
    name: 'Manufacturer',
    href: '#/admin/manufacturer',
    current: false,
  },
  {
    name: 'Group for drones',
    href: '#/admin/group-for-drones',
    current: false,
  },
  {
    name: 'Filters',
    href: '#/admin/filters',
    current: false,
  },
  {
    name: 'Images',
    href: '#/admin/images',
    current: false,
  },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

const AdminPanel: React.FC = () => {
  const location = useLocation();
  const [currentNavigation, setCurrentNavigation] = useState(navigation);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
    dispatch(fetchGroupsForDronesThunk());
    dispatch(fetchManufacturersThunk());
    dispatch(fetchSubcategoriesThunk());
    dispatch(fetchImagesThunk());
  }, [dispatch]);

  useEffect(() => {
    updateCurrentNavigation();
  }, [location.pathname]);

  const updateCurrentNavigation = () => {
    const updatedNavigation = currentNavigation.map(item => ({
      ...item,
      current: `/aerobay${location.pathname}` === item.href,
    }));
    setCurrentNavigation(updatedNavigation);
  };

  return (
    <div className="flex h-full min-h-screen bg-gray-100">
      <Header
        user={user}
        navigation={currentNavigation}
        userNavigation={userNavigation}
      />
      <Outlet />
    </div>
  );
};

export default AdminPanel;
