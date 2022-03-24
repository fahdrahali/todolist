import Task from './task.js';
import Tasks from './tasks.js';

const initTasks = () => {
  let tasks = new Tasks();
  if (JSON.parse(localStorage.getItem('tasksData'))) {
    tasks = JSON.parse(localStorage.getItem('tasksData'));
    return tasks;
  }
  tasks.taskList = [];
  return tasks;
};

const addTask = () => {
  const inputTask = document.getElementById('task');
  inputTask.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const tasks = initTasks();
      const task = new Task(tasks.taskList.length + 1, inputTask.value, false);
      tasks.taskList.push(task);
      localStorage.setItem('tasksData', JSON.stringify(tasks));
      inputTask.value = '';
      window.location.reload();
    }
  });
};

const editTask = () => {
  const dotsIconTab = document.querySelectorAll('.dotsIcon');
  const inputTaskTab = document.querySelectorAll('.inputTask');
  const item = document.querySelectorAll('.itemTask');
  const removeIconTab = document.querySelectorAll('.removeIcon');
  dotsIconTab.forEach((dotsIcon, index) => {
    dotsIcon.addEventListener('click', () => {
      dotsIcon.style.display = 'none';
      removeIconTab[index].style.display = 'block';
      inputTaskTab[index].style.backgroundColor = '#fcf6aa';
      item[index].style.backgroundColor = '#fcf6aa';
      inputTaskTab[index].style.pointerEvents = 'auto';
      inputTaskTab[index].focus();
      inputTaskTab[index].addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          const tasks = initTasks();
          tasks.taskList.map((task) => {
            if ((task.index - 1) === index) {
              task.description = inputTaskTab[index].value;
              return task;
            }
            return task;
          });
          localStorage.setItem('tasksData', JSON.stringify(tasks));
          window.location.reload();
        }
      });
    });
    dotsIcon.style.display = 'block';
    removeIconTab[index].style.display = 'none';
    inputTaskTab[index].style.backgroundColor = 'white';
    item[index].style.backgroundColor = 'white';
  });
};

const removeTask = () => {
  const removeIconTab = document.querySelectorAll('.removeIcon');
  removeIconTab.forEach((removeIcon, index) => {
    removeIcon.addEventListener('click', () => {
      const tasks = initTasks();
      const newTasks = new Tasks([]);
      newTasks.taskList = tasks.taskList.filter((task) => (task.index - 1) !== index);
      let newIndex = 1;
      newTasks.taskList.map((task) => {
        task.index = newIndex;
        newIndex += 1;
        return task;
      });
      localStorage.setItem('tasksData', JSON.stringify(newTasks));
      window.location.reload();
    });
  });
};
export {
  addTask, initTasks, editTask, removeTask,
};