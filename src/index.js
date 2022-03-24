import './style.css';
import { addTask, initTasks, editTask } from '../modules/handleTask.js';
import threeDotsIcon from '../assets/icons/tripledots.jpg';

const render = () => {
  const tasks = initTasks();
  const taskListContainer = document.querySelector('.todolist');
  tasks.taskList.forEach((task) => {
    taskListContainer.innerHTML += `<li class='itemTask'>
          <input type="checkbox" id=${task.index}>
          <label for=${task.index}>
          <input class='inputTask' type='text' name='task' id='task' 
          value='${task.description}'>
          </label>
          <img class='dotsIcon' src=${threeDotsIcon}/>
      </li>`;
  });
  taskListContainer.innerHTML += `<li class="clear">
  <a>Clear all completed</a>
  </li>`;
};

render();
addTask();
editTask();