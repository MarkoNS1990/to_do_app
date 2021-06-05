import { v4 as uuidv4 } from 'uuid';

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.head_id = uuidv4();
    this.body_id = uuidv4();
  }

  allProjects = [{ name: 'Example project', tasks: [{ name: 'example task' }] }];
}
