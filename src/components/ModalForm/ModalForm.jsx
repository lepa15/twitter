import { useState } from 'react';

export default function ModalForm({ authType }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleCloseRegisterModal = () => {
    console.log(form);
    setForm({
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <>
      <div className="container">
        <div className="modal__handle"></div>
        <div className="modal__body">
          <h2 className="modal__title">Авторизация</h2>
          <form className="modal__form form">
            <div className="form__field">
              <div className="form__contain">
                <input name="email"
                       id="email"
                       type="email"
                       placeholder=" "
                />
                <label htmlFor="email">Электронная почта</label>
              </div>
              <span className="form__field_error"></span>
            </div>
            <div className="form__field">
              <div className="form__contain">
                <input name="password"
                       id="password"
                       type="password"
                       placeholder=" "
                />
                <label htmlFor="password">Пароль</label>
              </div>
              <span className="form__field_error">Ошибка</span>
            </div>
            <button type="submit">Войти</button>
          </form>
        </div>
      </div>
    </>
  );
}
