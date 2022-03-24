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

export { addTask, initTasks };