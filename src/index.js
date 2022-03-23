import './style.css';
import tasks from '../modules/tasks.js';

const render = () => {
  const taskListContainer = document.querySelector('.todolist');
  tasks.map((task) => {
    taskListContainer.innerHTML += `<li>
          <input type="checkbox" id=${task.index}>
          <label for=${task.index}>${task.description}</label>
      </li>`;
    return task;
  });
  taskListContainer.innerHTML += `<li class="clear">
  <a>Clear all completed</a>
  </li>`;
};

render();