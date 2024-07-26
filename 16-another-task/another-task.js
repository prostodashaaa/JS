const ToDoList = {
  tasks: [],

  lastId: 0,

  isValidData(data) {
    if (!data) {
      console.log("Данные не переданы");
      return false;
    }
    if (typeof data !== "object") {
      console.log("Переданные данные не являются объектом");
      return false;
    }
    return true;
  },

  getTaskById(taskId) {
    const task = this.tasks.find(({ id }) => id === taskId);
    if (!task) {
      console.log(`Задача с id ${taskId} еще не добавлена в ваш список дел.`);
    }
    return task;
  },

  addTask(data) {
    const isValid = this.isValidData(data);
    if (!isValid) {
      return this;
    }

    this.tasks.push({
      ...data,
      id: ++this.lastId,
    });
    return this;
  },

  removeTask: function (id) {
    const task = this.getTaskById(id);
    if (task) {
      this.tasks = this.tasks.filter((el) => el.id !== id);
    }
    return this;
  },

  updateTask(id, newData) {
    const isValid = this.isValidData(newData);
    if (!isValid) {
      return this;
    }
    const task = this.getTaskById(id);

    if (task) {
      Object.assign(task, { ...newData });
    }
    return this;
  },

  sortTask: function () {
    this.task.sort((a, b) => a.priority - b.priority);
  },
};

console.log(
  ToDoList.addTask({ title: "Что-то", priority: 6, ggg: 7, gggg: 8 })
);
//console.log(...ToDoList.tasks);

//console.log(ToDoList.updateTask(3, { title: "ybxtuj", priority: 7 }));
//console.log(...ToDoList.tasks);

/* --- Новый объект --- */

const newToDoList = {
  t: [{ id: 1, name: "ляляля", priority: 9, description: "", order: 0 }],
};

function getMethod(data) {
  if (data?.["tasks"]) {
    const obj = { ...ToDoList, ...data };
    return function () {
      return obj;
    };
  }
  data.tasks = [];
  const obj = { ...ToDoList, ...data };
  return function () {
    return obj;
  };
}

const newList = getMethod(newToDoList);
newList().addTask({
  id: -1,
  name: "олололо",
  priority: 9,
  description: "",
  order: 0,
});
console.log(...ToDoList.tasks);
console.log(...newToDoList.tasks);
