import checkValidEmail from '@/check_valid_email';
import { ErrorsState, FormState } from '@/components/ModalForm/ModalForm';
import { ModalProps } from '@/components/Modal/Modal';


export default function validateForm(data: FormState, authModal: ModalProps['authModal']) {
  const errors = {} as ErrorsState;
  if (!data.email) {
    errors.email = 'Заполните поле';
  }
  if (!data.password) {
    errors.password = 'Заполните поле';
  }
  if (!data.confirmPassword) {
    errors.confirmPassword = 'Заполните поле';
  }
  if (authModal === 'registerModal' && data.password && data.password.length < 6) {
    errors.password = 'Пароль должен содержать больше 6 символов';
  }
  if (!checkValidEmail(data.email)) {
    errors.email = 'Адрес не валиден';
  }
  if (authModal === 'registerModal' && data.password !== data.confirmPassword) {
    errors.password = 'Пароли не совпадают';
    errors.confirmPassword = 'Пароли не совпадают';
  }

  return errors;
}
