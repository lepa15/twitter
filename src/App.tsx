import './App.css';
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main';
import Footer from '@/components/Footer/Footer';
import Modal from '@/components/Modal/Modal';

function App() {
  return (
    <div className="w-full max-w-md sm:max-w-7xl mx-auto min-h-screen overflow-hidden">
      <Header/>
      <Main/>
      <Footer/>
      <Modal/>
    </div>
  );
}

export default App;
