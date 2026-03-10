import React, { useState } from 'react';
import validateForm from '@/utility/formValidation';
import Field from '@/components/Field/Field';
import useSwipeDown from '@/hooks/useSwipeDown';
import { closeModal } from '@/features/authModalSlice/authModalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store';
import useEscape from '@/hooks/useEscape';

export type FormState = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type ErrorsState = Partial<Record<keyof FormState, string>>;

export default function ModalForm() {
  const [form, setForm] = useState<FormState>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<ErrorsState>({});

  const authModal = useSelector((state: RootState) => state.authModal.modal);
  const dispatch: AppDispatch = useDispatch();

  useEscape(() => dispatch(closeModal()), Boolean(authModal));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value,
    } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[name as keyof FormState];
      return newErrors;
    });
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(form, authModal);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      //console.log(form);
      setForm({
        email: '',
        password: '',
        confirmPassword: '',
      });
      dispatch(closeModal());
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="modal__handle" {...useSwipeDown(() => dispatch(closeModal()))} />
      <div className="modal__body">
        <h2 className="modal__title">
          {authModal === 'register' ? 'Регистрация' : 'Авторизация'}
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

          {authModal === 'register' && (
            <Field
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              labelText="Подтвердите пароль"
            />
          )}
          <button type="submit">
            {authModal === 'register' ? 'Зарегистрироваться' : 'Войти'}
          </button>
        </form>
      </div>
    </div>
  );
}
