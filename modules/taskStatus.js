const updateTaskStatus = (task) => {
  task.completed = !task.completed;
  return task;
};

export default updateTaskStatus;