import './Footer.css';

type FooterProps = {
  onOpenLogin: () => void;
  onOpenRegister: () => void;
};

function Footer({
  onOpenLogin,
  onOpenRegister,
}: FooterProps) {
  return (
    <footer className="pb-8">
      <div className="container mx-auto px-4 sm:max-w-2xl">
        <h1 className="mt-8 font-extrabold text-[2rem] sm:text-[48px] text-center text-[#000]">
          Зарегистрируйтесь
          и узнайте обо всём первым
        </h1>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <button className="auth-button " onClick={onOpenRegister}>Зарегистрироваться</button>
          <button className="auth-button" onClick={onOpenLogin}>Войти</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
