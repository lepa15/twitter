import './Header.css';

function Header({
  onOpenLogin,
  onOpenRegister,
}) {
  return (
    <>
      <div className="container">
        <div className="header-logo">
          <img src="@/../public/delfin.svg" alt="Twitter logo"/>
        </div>
        <h1 className="header-title">
          Оставайся на связи
          с друзьями, даже когда их нет рядом
        </h1>
        <div className="header-nav nav-block">
          <button className="nav-block_button register-btn" onClick={onOpenRegister}>Зарегистрироваться</button>
          <button className="nav-block_button login-btn" onClick={onOpenLogin}>Войти</button>
        </div>
      </div>
      <div className="header-photo">
        <img src="../../../public/title-photo.png" alt="Friends photo"/>
      </div>
    </>
  );
}

export default Header;
