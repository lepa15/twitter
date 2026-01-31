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
      <div className="footer-nav buttons-block">
        <button className="auth-button" onClick={onOpenRegister}>Зарегистрироваться</button>
        <button className="auth-button" onClick={onOpenLogin}>Войти</button>
      </div>
    </div>
  );
}

export default Footer;
