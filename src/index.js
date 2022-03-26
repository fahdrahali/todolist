import './style.css';
import {
  addTask, initTasks, editTask, removeTask, clearAllCompleted,
} from '../modules/handleTask.js';
import updateTaskStatus from '../modules/taskStatus.js';
import threeDotsIcon from '../assets/icons/tripledots.jpg';
import removeIcon from '../assets/icons/remove-icon.png';

const render = () => {
  const tasks = initTasks();
  const taskListContainer = document.querySelector('.todolist');
  tasks.taskList.forEach((task) => {
    taskListContainer.innerHTML += `<li class='itemTask'>
          <input type="checkbox" class="checkboxTask" id=${task.index}>
          <label for=${task.index}>
          <input class='inputTask' type='text' name='task' id='task' 
          value='${task.description}'>
          </label>
          <img class='dotsIcon' src=${threeDotsIcon}/>
          <img class='removeIcon' src=${removeIcon}/>
      </li>`;
  });
  taskListContainer.innerHTML += `<li class="clear">
  <a class='clearBtn'>Clear all completed</a>
  </li>`;
};

render();
addTask();
editTask();
removeTask();
updateTaskStatus();
clearAllCompleted();