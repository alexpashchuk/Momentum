import { TODO } from '../constants/const';
import { lang } from './switchLang';

const todoBtn = document.querySelector('.todo-btn');
const todoPopup = document.querySelector('.todo-popup');
const todoInfo = document.querySelector('.todo-info');
const todoHeader = document.querySelector('.todo-header');
const todoPlanned = document.querySelector('.todo-planned');
const todoDone = document.querySelector('.todo-done');
const todoInput = document.querySelector('.todo-input');
const todoCount = document.querySelector('.todo-planned-count');
const todoCountDone = document.querySelector('.todo-done-count');

const todoList = () => {
    let todoTask = todoInput.value;
    let li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `<input class="todo-item-checkbox" type="checkbox">
  <span class="todo-item-title">${todoTask}</span>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="trash">
  <path class="trash" fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
</svg>`;
    todoInput.before(li);
    todoInput.value = null;
    setTodoTask();
};

const setTodoTask = () => {
    const todoList = document.querySelectorAll('.todo-item');
    todoList.forEach((todo) => {
        todo.addEventListener('click', (event) => {
            if (event.target.classList.contains('trash')) {
                event.currentTarget.remove();
            }
        });
    });
};

const setTodoInfo = () => {
    const count = document.querySelectorAll('.todo-item').length;
    const todoDone = document.querySelectorAll('.todo-item-checkbox:checked').length;

    todoCount.textContent = `   ${count}`;
    todoCountDone.textContent = `   ${todoDone}`;
};
const showTodoPopup = () => {
    todoBtn.classList.toggle('todo-btn-active');
    todoPopup.classList.toggle('todo-popup-active');
    todoHeader.addEventListener('click', showTodoInfo);
    document.addEventListener('click', (event) => {
        if (!event.composedPath().includes(todoBtn) && !event.composedPath().includes(todoPopup)) {
            todoBtn.classList.remove('todo-btn-active');
            todoPopup.classList.remove('todo-popup-active');
        }
    });
    setTodoList();
};

const showTodoInfo = () => {
    todoInfo.classList.toggle('todo-info-active');
    setTodoInfo();
};

const setTodoList = () => {
    todoHeader.textContent = TODO[lang].header;
    todoPlanned.textContent = TODO[lang].plan;
    todoDone.textContent = TODO[lang].done;
    todoInput.placeholder = TODO[lang].placeholder;
};

export { todoList, showTodoPopup, showTodoInfo, setTodoList, todoBtn, todoInfo, todoInput };
