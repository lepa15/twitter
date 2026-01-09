const modal = document.getElementById('modal');
const modalTitle = document.querySelector('.modal__title');
const modalForm = document.querySelector('.modal__form');
const submitButton = modal.querySelector('button[type="submit"]');
const modalHandle = modal.querySelectorAll('.modal__handle');

const formState = {
  mode: 'login',
};

function getFormState() {
  return formState;
}

// Добавляем подтверждение пароля для регистрации
function createConfirmPasswordField() {
  const field = document.createElement('div');
  field.className = 'form__field';
  const contain = document.createElement('div');
  contain.className = 'form__contain';
  const input = document.createElement('input');
  input.type = 'password';
  input.name = 'confirm-password';
  input.id = 'confirm-password';
  input.placeholder = ' ';
  const label = document.createElement('label');
  label.htmlFor = 'confirm-password';
  label.innerHTML = 'Подтвердите пароль';
  contain.append(input, label);
  field.append(contain);
  const span = document.createElement('span');
  span.className = 'form__field_error';
  field.append(span);
  return field;
}

const confirmPasswordField = createConfirmPasswordField();

function renderForm() {
  if (formState.mode === 'register') {
    modalTitle.innerHTML = 'Регистрация';
    submitButton.innerHTML = 'Зарегистрироваться';
    if (!modalForm.contains(confirmPasswordField)) {
      modalForm.insertBefore(confirmPasswordField, submitButton);
    }
  }
  if (formState.mode === 'login') {
    modalTitle.innerHTML = 'Авторизация';
    submitButton.innerHTML = 'Войти';
    if (modalForm.contains(confirmPasswordField)) {
      confirmPasswordField.remove();
    }
  }
}

// Функция для отключения/включения скролла для body при открытой/закрытой модалке
function toggleScroll() {
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

  if (modal.classList.contains('open')) {
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    document.body.style.overflow = 'hidden';
  } else if (!modal.classList.contains('open')) {
    document.body.style.paddingRight = '0px';
    document.body.style.overflow = 'auto';
  }
}

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.register-btn, .login-btn');
  if (!btn) return;
  if (btn.classList.contains('register-btn')) {
    formState.mode = 'register';
  }

  if (btn.classList.contains('login-btn')) {
    formState.mode = 'login';
  }
  renderForm();
  modal.classList.add('open');
  toggleScroll();
});

// Закрытие модалки
function closeModal() {
  const formField = modal.querySelectorAll('.form__field');
  const errorSpan = modal.querySelectorAll('.form__field_error');
  modal.classList.remove('open');
  toggleScroll();
  modalForm.reset();
  formField.forEach((field) => field.classList.remove('error'));
  errorSpan.forEach((span) => span.classList.remove('show'));
}

// Закрываем модалку по свайпу
modalHandle.forEach((handle) => {
  document.addEventListener('swiped-down', (e) => {
    if (e.target === handle) {
      closeModal();
    }
  });
});

// Закрываем модалку по клику на подложку
document.addEventListener('click', (e) => {
  const overlay = e.target.closest('.overlay');
  if (!overlay) return;
  if (overlay) {
    closeModal();
  }
});

// Закрываем модалку по нажатию клавиши Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

export default getFormState;
