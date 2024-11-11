import { TECollapse } from 'tw-elements-react';
import classNames from 'classnames';
import s from './Accordion.module.css';
import { IoIosArrowDown } from 'react-icons/io';
interface AccordionItemProps {
  id: string;
  title: string;
  content: JSX.Element;
  isOpen: boolean;
  onToggle: () => void;
}

const Accordion: React.FC<AccordionItemProps> = ({
  id,
  title,
  content,
  isOpen,
  onToggle,
}) => (
  <li className={` ${isOpen ? 'rounded-t-lg' : 'rounded-b-lg'}`}>
    <h2 className={classNames(`mb-0`)} id={`heading-${id}`}>
      <button
        className={classNames(
          ` group relative flex w-full items-center rounded-t-[15px] border-0  px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`,
          s.navButton
        )}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`collapse-${id}`}
      >
        {title}
        <span
          className={classNames(
            `${
              isOpen
                ? 'rotate-[-180deg] -mr-1'
                : 'rotate-0 fill-[#212529] dark:fill-white'
            } ml-auto  shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`,
            s.menu_arrow_icon
          )}
        >
          <IoIosArrowDown size={20} />
        </span>
      </button>
    </h2>
    <TECollapse show={isOpen} className="!mt-0 !rounded-b-none !shadow-none">
      <ul className="py-4">{content}</ul>
    </TECollapse>
  </li>
);

export default Accordion;
