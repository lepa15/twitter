import './Footer.css';

function Footer({
  onOpenLogin,
  onOpenRegister,
}) {
  return (
    <div className="container">
      <h1 className="footer-title">
        Зарегистрируйтесь
        и узнайте обо всём первым
      </h1>
      <div className="footer-nav nav-block">
        <button className="nav-block_button register-btn" onClick={onOpenRegister}>Зарегистрироваться</button>
        <button className="nav-block_button login-btn" onClick={onOpenLogin}>Войти</button>
      </div>
    </div>
  );
}

export default Footer;
