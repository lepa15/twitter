import './Modal.css';
import ModalForm from '@/components/ModalForm/ModalForm';
import { useEffect, useState } from 'react';
import useLockBodyScroll from '@/hooks/useLockBodyScroll';

export type ModalProps = {
  authModal: 'registerModal' | 'loginModal' | null;
  isOpen: boolean;
  onClose: () => void;
};

function Modal({ authModal, onClose, isOpen }: ModalProps) {
  useLockBodyScroll(isOpen);

  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isOpen) {
      setIsVisible(true);
      timer = setTimeout(() => {
        setIsAnimated(true);
      }, 100);
    } else if (!isOpen) {
      setIsAnimated(false);
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 100);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isOpen]);

  return (
    (isVisible)
      ? (
        <div id="modal" className={`modal ${isAnimated ? 'open' : ''}`}>
          <button
            className="overlay"
            onClick={onClose}
            aria-label="Закрыть модалку"
            type="button"
          />
          <div className="modal__content">
            <ModalForm isOpen={isOpen} onClose={onClose} authModal={authModal}/>
          </div>
        </div>
      )
      : null
  );
}

export default Modal;
