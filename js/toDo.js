const toDoForm = document.querySelector('.toDo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.toDo-list');

const TODOS_KEY = 'toDos';
let toDoArr = [];

const handleToDoSubmit = (e) => {
  e.preventDefault();

  const toDo = toDoInput.value;
  toDoInput.value = '';

  const toDoObj = {
    id: Date.now(),
    content: toDo,
  };

  toDoArr.push(toDoObj);
  saveToDo();
  paintToDo(toDoObj);
};

const paintToDo = (toDoObj) => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const btn = document.createElement('button');

  li.id = toDoObj.id;
  span.innerHTML = toDoObj.content;
  btn.innerHTML = '❌';

  const handleRemoveBtn = (e) => {
    const li = e.target.parentNode;
    const liId = parseInt(e.target.parentNode.id);
    li.remove();

    const newToDoArr = toDoArr.filter((toDo) => toDo.id !== liId);
    toDoArr = newToDoArr;

    saveToDo();
  };

  btn.addEventListener('click', handleRemoveBtn);
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
};

const saveToDo = () => {
  const toStringToDos = JSON.stringify(toDoArr);
  localStorage.setItem(TODOS_KEY, toStringToDos);
};

const loadToDos = () => {
  const toDos = localStorage.getItem(TODOS_KEY);
  const parsedToDos = JSON.parse(toDos);

  if (parsedToDos) {
    toDoArr = parsedToDos;
    toDoArr.forEach(paintToDo);
  }
};

toDoForm.addEventListener('submit', handleToDoSubmit);

loadToDos();
