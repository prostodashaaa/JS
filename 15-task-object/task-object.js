const ToDoList = {
  task: [
    { title: "Помыть посуду", id: 1, priority: 9 },
    { title: "Помыть пол", id: 2, priority: 2 },
  ],

  addTask: function (title, priority = 1) {
    if (title) {
      let lastTask = this.task.at(-1).id;
      this.task.push({
        title,
        id: lastTask + 1,
        priority,
      });
      return true;
    }
    console.log("Введите название задачи");
    return false;
  },

  deleteTask: function (id) {
    let newTask = this.task.filter((item) => item.id !== id);
    let taskLength = this.task.length;
    let newTaskLength = newTask.length;
    this.task = newTask;
    return taskLength !== newTaskLength;
  },

  changeById: function (id, title = null, priority = null) {
    let changeItem = this.task.find((item) => item.id == id);
    if (title !== null) {
      changeItem.title = title;
    }
    if (priority !== null) {
      changeItem.priority = priority;
    }
    return changeItem;
  },

  sortTask: function () {
    this.task.sort((a, b) => a.priority - b.priority);
  }
};

console.log(ToDoList.addTask("Что-то", 6));
console.log(ToDoList.task);

// console.log(ToDoList.changeById(3, "ybxtuj", 7));
// console.log(ToDoList.task);

console.log(ToDoList.sortTask());
console.log(ToDoList.task);
