import Task from '../src/task';
import Project from '../src/project';

test('create task with valid inputs', () => {
  const task = new Task('test', '05-05-2020', 'low');
  expect(task.name).toBe('test');
  expect(task.date).toBe('05-05-2020');
  expect(task.priority).toBe('low');
});

test('create task with invalid inputs', () => {
  const task = new Task('test');
  expect(task.priority).toBeUndefined()
});

test('check if random id is created upon making a new task', () => {
  const task = new Task('test', '05-05-2020', 'low');
  expect(task.id).toBeDefined();
});

test('check for existence of example task in Example project', () => {
  const project = new Project('test');
  expect(project.allProjects[0].tasks).toHaveLength(1);
});