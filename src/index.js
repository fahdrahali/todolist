import './style.css';
import tasks from '../modules/tasks.js';

const getTaskItemList = () => {
  let taskItemList = '';
  tasks.map((task) => {
    taskItemList += `<li>
          <input type="checkbox" id=${task.index}>
          <label for=${task.index}>${task.description}</label>
      </li>`;
    return task;
  });
  return taskItemList;
};

const render = () => {
  const taskListContainer = document.createElement('ul');
  taskListContainer.className = 'todolist';
  document.body.appendChild(taskListContainer);

  taskListContainer.innerHTML = `<li>Today's To Do</li>
  <li>
  <input type='text' name='task' id='task' placeholder='Add to your list...'>
  </li>
  `;

  taskListContainer.innerHTML += getTaskItemList();

  taskListContainer.innerHTML += `<li class="clear">
  <a>Clear all completed</a>
  </li>`;
};

render();