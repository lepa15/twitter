import './Header.css';

function Header({
  onOpenLogin,
  onOpenRegister,
}) {
  return (
    <div className="sm:flex sm:gap-9 bg-white shadow-[0_12px_24px_-12px_rgba(0,0,0,0.25)]">
      <div className="container mx-auto px-4 sm:w-1/2 sm:pl-16">
        <div className="mt-6 sm:mt-11 flex justify-center sm:justify-start items-center">
          <img
            className="w-9 sm:w-11 h-full"
            src="/delfin.svg"
            alt="Twitter logo"
          />
        </div>
        <h1
          className="mt-[1.375rem] sm:mt-8 sm:max-w-md font-extrabold text-[2rem] sm:text-5xl text-center sm:text-left"
        >
          Оставайся на связи
          с друзьями, даже когда их нет рядом
        </h1>
        <div className="mt-6 flex flex-col gap-4 sm:mt-10 sm:max-w-72 sm:pb-36">
          <button
            className="auth-button"
            onClick={onOpenRegister}
          >
            Зарегистрироваться
          </button>
          <button className="auth-button" onClick={onOpenLogin}>Войти</button>
        </div>
      </div>
      <div className="mt-6 sm:mt-0 sm:w-1/2 sm:aspect-square overflow-hidden">
        <picture>
          <source
            srcSet="/title-photo-desktop.png"
            media="(min-width: 640px)"
          />
          <img
            src="/title-photo-mobile.png"
            alt="Friends photo"
            className="w-full h-auto sm:h-full object-contain sm:object-cover"
          />
        </picture>
      </div>
    </div>
  );
}

export default Header;
