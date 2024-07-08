const ToDoList = {
  task: [
    { id: 1, title: "Помыть посуду", priority: 9 },
    { id: 2, title: "Помыть пол", priority: 2 },
  ],

  addTask: function (obj) {
    let title = obj?.title;
    let priority = obj?.priority;
    if (title && priority) {
      let lastTask = this.task.at(-1).id;
      this.task.push({
        id: lastTask + 1,
        ...obj,
      });
      return obj;
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

  changeById: function (obj) {
    let id = obj?.id;
    let title = obj?.title;
    let priority = obj?.priority;
    if (id) {
      let changeItem = this.task.find((item) => item.id == id);
      if (changeItem) {
        if (title) {
          changeItem.title = title;
        }
        if (priority !== undefined) {
          changeItem.priority = priority;
        }
        return changeItem;
      }
    }
    return "Введен некорректный id!";
  },

  sortTask: function () {
    this.task.sort((a, b) => a.priority - b.priority);
  },
};

console.log(
  ToDoList.addTask({ title: "Что-то", priority: 6, ggg: 7, gggg: 8 })
);
console.log(...ToDoList.task);

console.log(ToDoList.changeById({ id: 5, title: "ybxtuj", priority: 7 }));
console.log(ToDoList.task);

// console.log(ToDoList.sortTask());
// console.log(...ToDoList.task);
