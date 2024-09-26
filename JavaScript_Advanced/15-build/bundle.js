'use strict';

class User {
  constructor(Task) {
    this.Task = Task;
  }

  do() {
    return this.Task.run();
  }
}

class Task {
  constructor(message) {
    this.message = message;
  }

  run() {
    console.log(this.message);
  }
}

const task = new Task('привет');
task.run();

const user = new User(task);
user.do();
