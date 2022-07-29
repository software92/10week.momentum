const greetingForm = document.querySelector('.greeting-form');
const greetingInput = document.querySelector('.greeting-form input');
const greeting = document.querySelector('.greeting');

const USER_KEY = 'user';
const HIDDEN_CLASS = 'hidden';

const handleSubmit = (e) => {
  e.preventDefault();

  const username = greetingInput.value;

  localStorage.setItem(USER_KEY, username);
  greetingForm.classList.add(HIDDEN_CLASS);

  paintUser(username);
};

const init = () => {
  const localUser = localStorage.getItem(USER_KEY);

  if (localUser) {
    paintUser(localUser);
  } else {
    greetingForm.classList.remove(HIDDEN_CLASS);
    greetingForm.addEventListener('submit', handleSubmit);
  }
};

const paintUser = (username) => {
  greeting.innerHTML = username;
  greeting.classList.remove(HIDDEN_CLASS);
};

init();
