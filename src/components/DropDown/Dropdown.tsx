import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import s from './Dropdown.module.css';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

interface DropDownProps {
  icon?: JSX.Element;
  items: { value: string; label: string }[];
  onSelect?: (value: string) => void;
  size?: string;
  positionX?: string;
  handleToggleDropDownStyle?: (dropdownName: string, value: boolean) => void;
  dropdownName?: string;
  positionY?: string;
}

const DropDown = ({
  icon,
  items,
  onSelect,
  size,
  positionX,
  handleToggleDropDownStyle,
  dropdownName,
  positionY,
}: DropDownProps) => {
  const widthSize = size ? size : '128px';
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const buttonElement = buttonRef.current;

    if (buttonElement) {
      const updateState = () => {
        const state = buttonElement.getAttribute('data-headlessui-state');
        const isOpen = state?.includes('open') ?? false;
        setIsOpen(isOpen);
        if (handleToggleDropDownStyle) {
          handleToggleDropDownStyle(dropdownName || '', isOpen);
        }
      };

      updateState();

      const observer = new MutationObserver(updateState);
      observer.observe(buttonElement, {
        attributes: true,
        attributeFilter: ['data-headlessui-state'],
      });

      return () => observer.disconnect();
    }
  }, [handleToggleDropDownStyle]);

  return (
    <Menu as="div" className={`relative inline-block text-left `}>
      <MenuButton
        ref={buttonRef}
        className="inline-flex w-full justify-center"
        aria-label="dropdown"
      >
        {icon && <div>{icon}</div>}
      </MenuButton>

      <MenuItems
        style={{ width: widthSize }}
        className={classNames(
          `absolute ${positionX ? positionX : 'left-1/2 transform -translate-x-1/2'} z-10 mt-2 mb-2 ${positionY}-full  rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none`,
          'data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'
        )}
      >
        {items.map((item, index) => (
          <MenuItem key={index}>
            {onSelect ? (
              <a
                href="#"
                onClick={() => onSelect(item.value)}
                className={s.dropdown_menu_item}
              >
                <p className={s.dropdown_menu_text}>{item.label}</p>
              </a>
            ) : (
              <Link to={item.value} className={s.dropdown_menu_item}>
                <p className={s.dropdown_menu_text}>{item.label}</p>
              </Link>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default DropDown;
