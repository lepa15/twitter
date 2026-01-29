import checkValidEmail from '@/check_valid_email';

export default function validateForm(data, authType) {
  const errors = {};
  if (!data.email) {
    errors.email = 'Заполните поле';
  }
  if (!data.password) {
    errors.password = 'Заполните поле';
  }
  if (!data.confirmPassword) {
    errors.confirmPassword = 'Заполните поле';
  }
  if (data.password && data.password.length < 6) {
    errors.password = 'Пароль должен содержать больше 6 символов';
  }
  if (!checkValidEmail(data.email)) {
    errors.email = 'Адрес не валиден';
  }
  if (authType === 'registerModal') {
    if (data.password !== data.confirmPassword) {
      errors.password = 'Пароли не совпадают';
      errors.confirmPassword = 'Пароли не совпадают';
    }
  }

  return errors;
}
