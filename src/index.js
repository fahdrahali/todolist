import './style.css';

const tasks = [
  {
    index: 1,
    description: 'complete part1 todo list project',
    completed: false,
  },
  {
    index: 2,
    description: 'complete part2 todo list project',
    completed: false,
  },
  {
    index: 3,
    description: 'share my project ToDolist on twitter',
    completed: true,
  },
  {
    index: 4,
    description: 'add two function add and remove',
    completed: false,
  },
];

const render = () => {
  const taskListContainer = document.createElement('ul');
  taskListContainer.className = 'todolist';
  document.body.appendChild(taskListContainer);

  taskListContainer.innerHTML = `<li>Today's To Do</li>
  <li>
  <input type='text' name='task' id='task' placeholder='Add to your list...'>
  </li>
  `;

  let taskListItem = '';
  tasks.map((task) => {
    taskListItem += `<li>
          <input type="checkbox" id=${task.index}>
          <label for=${task.index}>${task.description}</label>
      </li>`;
    return task;
  });
  taskListContainer.innerHTML += taskListItem;
  taskListContainer.innerHTML += `<li class="clear">
  <a>Clear all completed</a>
  </li>`;
};

render();