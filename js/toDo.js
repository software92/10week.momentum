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
    isDone: false,
  };

  toDoArr.push(toDoObj);
  saveToDo();
  paintToDo(toDoObj);
};

const handleRemoveBtn = (e) => {
  const li = e.target.parentNode;
  const liId = parseInt(e.target.parentNode.id);
  li.remove();

  const newToDoArr = toDoArr.filter((toDo) => toDo.id !== liId);
  toDoArr = newToDoArr;

  saveToDo();
};

const handleUpdateBtn = () => {
  console.log('To be updated');
};
const handleDoneBtn = (e) => {
  const items = toDoList.querySelectorAll('li');
  const selectToDo = e.target.parentNode.firstChild.innerHTML;

  const check = e.target.parentNode.firstChild.className;
  const tempArr = toDoArr.filter((item) => item.content !== selectToDo);
  if (!check) {
    tempArr.unshift({
      id: Date.now(),
      content: selectToDo,
      isDone: true,
    });

    toDoArr = tempArr;

    items.forEach((item) => item.remove());
    saveToDo();
    toDoArr.forEach((toDoObj) => paintToDo(toDoObj));
  } else {
    tempArr.push({
      id: Date.now(),
      content: selectToDo,
      isDone: false,
    });

    toDoArr = tempArr;

    items.forEach((item) => item.remove());
    saveToDo();
    toDoArr.forEach((toDoObj) => paintToDo(toDoObj));
  }
};

const paintToDo = (toDoObj) => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const removeBtn = document.createElement('button');
  const updateBtn = document.createElement('button');
  const doneBtn = document.createElement('button');
  const toDoBtn = document.createElement('button');

  li.id = toDoObj.id;
  span.innerHTML = toDoObj.content;
  removeBtn.innerHTML = '❌';
  updateBtn.innerHTML = '🔨';
  doneBtn.innerHTML = '✅';
  toDoBtn.innerHTML = '🔴';

  removeBtn.addEventListener('click', handleRemoveBtn);
  updateBtn.addEventListener('click', handleUpdateBtn);
  doneBtn.addEventListener('click', handleDoneBtn);
  toDoBtn.addEventListener('click', handleDoneBtn);

  li.appendChild(span);
  li.appendChild(updateBtn);

  if (toDoObj.isDone) {
    span.classList.add('done');
    li.appendChild(toDoBtn);
  } else {
    span.classList.remove('done');
    li.appendChild(doneBtn);
  }
  li.appendChild(removeBtn);

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
