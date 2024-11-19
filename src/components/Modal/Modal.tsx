import React, { ReactNode, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { IoCloseOutline } from 'react-icons/io5';
import classNames from 'classnames';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal') as HTMLElement;

interface ModalProps {
  closeModal: () => void;
  children: ReactNode;
  icon?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const Modal: React.FC<ModalProps> = ({
  closeModal,
  children,
  icon = true,
  size = 'medium',
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal, handleKeyDown]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return ReactDOM.createPortal(
    <div onClick={handleBackdropClick} className={s.backdrop}>
      <div className={classNames(s.modal, s[`${size}`])}>
        {icon && (
          <button onClick={closeModal} className={s.btn_close}>
            <IoCloseOutline className={s.icon_close} />
          </button>
        )}
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
