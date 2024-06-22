import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';

interface HeaderProps {
  user: { name: string; email: string; imageUrl: string };
  navigation: { name: string; href: string; current: boolean }[];
  userNavigation: { name: string; href: string }[];
}

const Header = ({ user, navigation, userNavigation }: HeaderProps) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <nav className="bg-gray-800 w-64 flex-shrink-0 flex flex-col">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex-shrink-0">
          <img
            className="h-8 w-8"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </div>
        <Menu as="div" className="relative">
          <div>
            <MenuButton className="flex items-center text-sm rounded-full bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 w-10 h-10 rounded-full overflow-hidden">
              <span className="sr-only">Open user menu</span>
              <img
                className="w-full h-full object-cover"
                src={user.imageUrl}
                alt=""
              />
            </MenuButton>
          </div>
          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {userNavigation.map(item => (
                <MenuItem key={item.name}>
                  {({ active }) => (
                    <a
                      href={item.href}
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}
                    >
                      {item.name}
                    </a>
                  )}
                </MenuItem>
              ))}
            </MenuItems>
          </Transition>
        </Menu>
      </div>
      <div className="flex-1 flex flex-col overflow-y-auto">
        <div className="px-2 py-3 space-y-1">
          {navigation.map(item => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-sm font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
