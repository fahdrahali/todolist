import { initTasks } from './handleTask.js';

const updateTaskStatus = () => {
  const checkboxTaskTab = document.querySelectorAll('.checkboxTask');
  const inputTaskTab = document.querySelectorAll('.inputTask');
  if (checkboxTaskTab) {
    checkboxTaskTab.forEach((checkboxTask, index) => {
      checkboxTask.addEventListener('change', () => {
        const tasks = initTasks();
        tasks.taskList.map((task) => {
          if (task.index === index + 1) {
            task.completed = !task.completed;
            if (task.completed) {
              inputTaskTab[index].style.textDecoration = 'line-through';
              inputTaskTab[index].style.color = '#918e8e';
              inputTaskTab[index].style.checked = 'true';
            } else {
              inputTaskTab[index].style.textDecoration = 'none';
              inputTaskTab[index].style.color = ' #1f1e1e';
            }
            return task;
          }
          return task;
        });
        localStorage.setItem('tasksData', JSON.stringify(tasks));
      });
    });
  }
};

export default updateTaskStatus;