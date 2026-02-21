import './App.css';
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main';
import Footer from '@/components/Footer/Footer';
import { useState } from 'react';
import useModal from '@/hooks/useModal';
import Modal from '@/components/Modal/Modal';

function App() {
  const [authModal, setAuthModal] = useState(null);
  const modal = useModal();

  const handleOpenRegisterModal = () => {
    setAuthModal('registerModal');
    modal.open();
  };
  const handleOpenLoginModal = () => {
    setAuthModal('loginModal');
    modal.open();
  };

  const handleCloseModal = () => {
    setAuthModal(null);
    modal.close();
  };

  return (
    <div className="w-full max-w-md sm:max-w-7xl mx-auto min-h-screen overflow-hidden">
      <Header onOpenRegister={handleOpenRegisterModal} onOpenLogin={handleOpenLoginModal} />
      <Main />
      <Footer onOpenRegister={handleOpenRegisterModal} onOpenLogin={handleOpenLoginModal} />
      <Modal authModal={authModal} onClose={handleCloseModal} isOpen={modal.isOpen} />
    </div>
  );
}

export default App;
