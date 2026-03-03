import './Footer.css';
import { openLogin, openRegister } from '@/features/authModalSlice/authModalSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/store';

function Footer() {
  const dispatch: AppDispatch = useDispatch();
  return (
    <footer className="pb-8">
      <div className="container mx-auto px-4 sm:max-w-2xl">
        <h1 className="mt-8 font-extrabold text-[2rem] sm:text-[48px] text-center text-[#000]">
          Зарегистрируйтесь
          и узнайте обо всём первым
        </h1>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <button className="auth-button " onClick={() => dispatch(openRegister())}>Зарегистрироваться</button>
          <button className="auth-button" onClick={() => dispatch(openLogin())}>Войти</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
