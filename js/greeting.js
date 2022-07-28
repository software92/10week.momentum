const greetingForm = document.querySelector('.greeting-form');
const greetingInput = document.querySelector('.greeting-form input');
const greeting = document.querySelector('.greeting');

const handleSubmit = (e) => {
  e.preventDefault();

  const username = greetingInput.value;

  localStorage.setItem('user', username);
  greetingForm.classList.add('hidden');

  paintUser(username);
};

const init = () => {
  const localUser = localStorage.getItem('user');

  if (localUser) {
    paintUser(localUser);
  } else {
    greetingForm.classList.remove('hidden');
    greetingForm.addEventListener('submit', handleSubmit);
  }
};

const paintUser = (username) => {
  greeting.innerHTML = username;
  greeting.classList.remove('hidden');
};

init();
