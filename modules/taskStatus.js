import { initTasks } from './handleTask.js';

const updateTaskStatus = () => {
  const checkboxTaskTab = document.querySelectorAll('.checkboxTask');
  const inputTaskTab = document.querySelectorAll('.inputTask');
  if (checkboxTaskTab) {
    checkboxTaskTab.forEach((checkboxTask, index) => {
      const tasks = initTasks();
      checkboxTask.addEventListener('change', () => {
        tasks.taskList.map((task) => {
          if (task.index === index + 1) {
            task.completed = !task.completed;
            if (task.completed) {
              inputTaskTab[index].style.textDecoration = 'line-through';
            } else {
              inputTaskTab[index].style.textDecoration = 'none';
            }
            return task;
          }
          return task;
        });
      });
    });
  }
};

export default updateTaskStatus;