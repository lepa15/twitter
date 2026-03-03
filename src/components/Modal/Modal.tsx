import './Modal.css';
import ModalForm from '@/components/ModalForm/ModalForm';
import { useEffect, useState } from 'react';
import useLockBodyScroll from '@/hooks/useLockBodyScroll';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store';
import { closeModal } from '@/features/authModalSlice/authModalSlice';


function Modal() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const authModal = useSelector((state: RootState) => state.authModal.modal);
  const dispatch: AppDispatch = useDispatch();

  useLockBodyScroll(authModal);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (authModal) {
      setIsVisible(true);
      timer = setTimeout(() => {
        setIsAnimated(true);
      }, 100);
    } else if (!authModal) {
      setIsAnimated(false);
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 100);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [authModal]);

  return (
    (isVisible)
      ? (
        <div id="modal" className={`modal ${isAnimated ? 'open' : ''}`}>
          <button
            className="overlay"
            onClick={() => dispatch(closeModal())}
            aria-label="Закрыть модалку"
            type="button"
          />
          <div className="modal__content">
            <ModalForm/>
          </div>
        </div>
      )
      : null
  );
}

export default Modal;
