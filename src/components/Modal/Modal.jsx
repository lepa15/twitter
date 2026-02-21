import './Modal.css';
import ModalForm from '@/components/ModalForm/ModalForm';
import { useEffect, useState } from 'react';
import useLockBodyScroll from '@/hooks/useLockBodyScroll';

function Modal({
  authModal,
  onClose,
  isOpen,
}) {
  useLockBodyScroll(isOpen);

  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    let timer;
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
          <div className="overlay" onClick={onClose} />
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <ModalForm onClose={onClose} authModal={authModal} />
          </div>
        </div>
      )
      : null
  );
}

export default Modal;
