import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import s from './Dropdown.module.css';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

interface DropDownProps {
  icon?: JSX.Element;
  items: { value: string; label: string | JSX.Element }[];
  onSelect?: (value: string) => void;
  size?: string;
  positionX?: string;
  handleToggleDropDownStyle?: (dropdownName: string, value: boolean) => void;
  dropdownName?: string;
  positionY?: string;
  onOpenChange?: (value: boolean) => void;
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
  onOpenChange,
}: DropDownProps) => {
  const widthSize = size ? size : '128px';
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleHtmlOverflow = () => {
      const html = document.documentElement;
      if (isOpen) {
        html.style.overflow = '';
      }
    };

    handleHtmlOverflow();
    return () => {
      if (!isOpen) {
        document.documentElement.style.overflow = '';
      }
    };
  }, [isOpen]);

  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const buttonElement = buttonRef.current;

    if (buttonElement) {
      const updateState = () => {
        const state = buttonElement.getAttribute('data-headlessui-state');
        const isOpen = state?.includes('open') ?? false;
        setIsOpen(isOpen);

        if (onOpenChange) {
          onOpenChange(isOpen);
        }
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
          `absolute  z-10 ${positionX ? positionX : 'left-1/2 transform -translate-x-1/2'} z-10 mt-2 mb-2 ${positionY === 'bottom' ? 'bottom-0 -translate-y-10' : 'top-full'}  rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none`,
          'data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'
        )}
      >
        <div>
          {items.map((item, index) => (
            <MenuItem key={index}>
              {onSelect ? (
                <a
                  // href="#"
                  onClick={() => onSelect(item.value)}
                  className={classNames(
                    s.dropdown_menu_item,
                    item.value === dropdownName && s.selected_menu_item
                  )}
                  aria-disabled={item.value === dropdownName}
                >
                  <div className={s.dropdown_menu_text}>{item.label}</div>
                </a>
              ) : (
                <Link to={item.value} className={s.dropdown_menu_item}>
                  <div className={s.dropdown_menu_text}>{item.label}</div>
                </Link>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};

export default DropDown;
