import {User} from './user.js';
import {Task} from './task.js';

const task = new Task('привет');
task.run();

const user = new User(task);
user.do();