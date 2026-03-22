import checkValidEmail from '@/utility/check_valid_email';
import { ErrorsState, FormState } from '@/components/ModalForm/ModalForm';


export default function validateForm(data: FormState, authModal: 'login' | 'register' | null) {
  const errors = {} as ErrorsState;
  if (!data.userName && authModal === 'register') {
    errors.userName = 'Заполните поле';
  }
  if (!data.email) {
    errors.email = 'Заполните поле';
  }
  if (!data.password) {
    errors.password = 'Заполните поле';
  }
  if (!data.confirmPassword && authModal === 'register') {
    errors.confirmPassword = 'Заполните поле';
  }
  if (authModal === 'register' && data.password && data.password.length < 6) {
    errors.password = 'Пароль должен содержать больше 6 символов';
  }
  if (!checkValidEmail(data.email)) {
    errors.email = 'Адрес не валиден';
  }
  if (authModal === 'register' && data.password !== data.confirmPassword) {
    errors.password = 'Пароли не совпадают';
    errors.confirmPassword = 'Пароли не совпадают';
  }

  return errors;
}
