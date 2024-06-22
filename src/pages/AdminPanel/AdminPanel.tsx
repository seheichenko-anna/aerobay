import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const user = {
  name: 'Test',
  email: 'test@example.com',
  imageUrl:
    'https://plus.unsplash.com/premium_photo-1673967792498-b8db6df56fb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};
const navigation = [
  { name: 'Dashboard', href: '/aerobay/admin', current: true },
  { name: 'Accessory', href: '/aerobay/admin/accessory', current: false },
  // Додайте інші пункти навігації за потреби
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

const AdminPanel: React.FC = () => {
  return (
    <div className="flex h-full min-h-screen bg-gray-100">
      <Header
        user={user}
        navigation={navigation}
        userNavigation={userNavigation}
      />
      <Outlet />
    </div>
  );
};

export default AdminPanel;
