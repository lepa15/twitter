import checkValidEmail from './check_valid_email.js';
import getFormState from './auth-modal.js';

const modeFormState = getFormState();
const form = document.querySelector('.modal__form');

function validateRegisterForm(data, mode) {
  const errors = {};

  if (!data.email) {
    errors.email = 'Заполните имейл';
  }
  if (!data.password) {
    errors.password = 'Заполните пароль';
  }
  if (mode === 'register' && !data['confirm-password']) {
    errors['confirm-password'] = 'Заполните поле';
  }
  if (data.email && !checkValidEmail(data.email)) {
    errors.email = 'Адрес не валиден';
  }
  if (
    mode === 'register'
    && data.password
    && data['confirm-password']
    && data.password !== data['confirm-password']
  ) {
    errors.password = 'Пароли не совпадают';
    errors['confirm-password'] = 'Пароли не совпадают';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

function renderErrors(errors) {
  Object.entries(errors)
    .forEach(([inputName, message]) => {
      const input = form.querySelector(`input[name="${inputName}"]`);
      const formField = input.closest('.form__field');
      const errorSpan = formField.querySelector('.form__field_error');
      formField.classList.add('error');
      errorSpan.innerHTML = `${message}`;
      errorSpan.classList.add('show');
    });
}

function clearErrors() {
  const errorFields = form.querySelectorAll('.form__field.error');
  errorFields.forEach((field) => {
    field.classList.remove('error');
    const errorSpan = field.querySelector('.form__field_error');
    if (errorSpan) {
      errorSpan.classList.remove('show');
    }
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const result = validateRegisterForm(data, modeFormState.mode);
  clearErrors();
  if (!result.isValid) {
    renderErrors(result.errors);
    return;
  }

  // eslint-disable-next-line no-console
  console.log('form data:', data);
});

form.addEventListener('focusin', (e) => {
  const input = e.target;
  if (!input.matches('input')) return;

  const formField = input.closest('.form__field');
  if (!formField?.classList.contains('error')) return;

  const errorSpan = formField.querySelector('.form__field_error');
  formField.classList.remove('error');
  errorSpan.classList.remove('show');
});
