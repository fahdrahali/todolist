import './style.css';
import { addTask, initTasks } from '../modules/handleTask.js';

const render = () => {
  const tasks = initTasks();
  const taskListContainer = document.querySelector('.todolist');
  tasks.taskList.map((task) => {
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
addTask();
