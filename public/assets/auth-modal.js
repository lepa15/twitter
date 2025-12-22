const modal = document.getElementById('modal');
const modalTitle = document.querySelector('.modal__title');
const modalForm = document.querySelector('.modal__form');
const submitButton = modal.querySelector('button[type="submit"]');
const modalHandle = modal.querySelector('.modal__handle');

const formState = {
  mode: 'login',
};

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
});

// Закрываем модалку по свайпу
document.addEventListener('swiped-down', (e) => {
  if (e.target === modalHandle) {
    modal.classList.remove('open');
  }
});

// Закрываем модалку по клику на подложку
document.addEventListener('click', (e) => {
  const overlay = e.target.closest('.overlay');
  if (!overlay) return;
  if (overlay) {
    modal.classList.remove('open');
  }
});

// Закрываем модалку по нажатию клавиши Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal.classList.remove('open');
  }
});
