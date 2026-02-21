import { useEffect, useRef, useState } from 'react';
import validateForm from '@/formValidation';
import Field from '@/components/Field/Field';
import useSwipeDown from '@/hooks/useSwipeDown';

export default function ModalForm({
  authModal,
  onClose,
}) {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleChange = (e) => {
    const {
      name,
      value,
    } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(form, authModal);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log(form);
      setForm({
        email: '',
        password: '',
        confirmPassword: '',
      });
      onClose();
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="modal__handle" {...useSwipeDown(onClose)} />
      <div className="modal__body">
        <h2 className="modal__title">
          {authModal === 'registerModal' ? 'Регистрация' : 'Авторизация'}
        </h2>
        <form className="modal__form form" onSubmit={handleSubmit}>
          <Field
            name="email"
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            labelText="Электронная почта"
          />
          <Field
            name="password"
            id="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
            labelText="Пароль"
          />

          {authModal === 'registerModal' && (
            <Field
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              labelText="Повторите пароль"
            />
          )}
          <button type="submit">
            {authModal === 'registerModal' ? 'Зарегистрироваться' : 'Войти'}
          </button>
        </form>
      </div>
    </div>
  );
}
