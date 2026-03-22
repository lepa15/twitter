import React, { useState } from 'react';
import validateForm from '@/utility/formValidation';
import Field from '@/components/Field/Field';
import useSwipeDown from '@/hooks/useSwipeDown';
import { closeModal } from '@/features/authModalSlice/authModalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store';
import useEscape from '@/hooks/useEscape';
import { useCreateUserMutation, useLoginUserMutation } from '@/features/usersApi/usersApi';

export type FormState = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type ErrorsState = Partial<Record<keyof FormState, string>>;

export default function ModalForm() {
  const [createUser] = useCreateUserMutation();
  const [loginUser] = useLoginUserMutation();

  const [form, setForm] = useState<FormState>({
    userName: '',
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

  const handleRegister = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(form, authModal);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await createUser({
          username: form.userName,
          email: form.email,
          password: form.password,
        }).unwrap();

        alert('Registration was successful');
        setForm({
          userName: '',
          email: '',
          password: '',
          confirmPassword: '',
        });

        dispatch(closeModal());
      } catch (err: any) {
        if (err.status === 409) {
          alert('User already exists');
        }
      }
    }
  };

  const handleLogin = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(form, authModal);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await loginUser({
          email: form.email,
          password: form.password,
        }).unwrap();

        alert('Login was successful');

        setForm({
          userName: '',
          email: '',
          password: '',
          confirmPassword: '',
        });

        dispatch(closeModal());
      } catch (err: any) {
        if (err.status === 401) {
          alert('Login failed with incorrect credentials');
        }
      }
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="modal__handle" {...useSwipeDown(() => dispatch(closeModal()))} />
      <div className="modal__body">
        <h2 className="modal__title">
          {authModal === 'register' ? 'Регистрация' : 'Авторизация'}
        </h2>
        <form className="modal__form form"
              onSubmit={authModal === 'register'
                ? handleRegister
                : handleLogin}
        >
          {authModal === 'register' && (
            <Field
              name="userName"
              id="userName"
              type="userName"
              value={form.userName}
              onChange={handleChange}
              error={errors.userName}
              labelText="Имя пользователя"
            />
          )}
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
