const greetingForm = document.querySelector('.greeting-form');
const greetingInput = document.querySelector('.greeting-form input');
const greeting = document.querySelector('.greeting');

const handleSubmit = (e) => {
  e.preventDefault();

  const username = greetingInput.value;

  greeting.innerHTML = username;

  greetingForm.classList.add('hidden');
  greeting.classList.remove('hidden');
};

greetingForm.addEventListener('submit', handleSubmit);
