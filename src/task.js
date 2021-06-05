import { v4 as uuidv4 } from 'uuid';

export default class Task {
  constructor(name, date, priority) {
    this.name = name;
    this.date = date;
    this.priority = priority;
    this.id = uuidv4();
  }
}

