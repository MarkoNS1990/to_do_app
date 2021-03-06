import Project from '../src/project';
import Task from '../src/task';

test('create project with valid inputs', () => {
  const project = new Project('test');
  expect(project.name).toBe('test');
});

test('create project with invalid inputs', () => {
  const project = new Project();
  expect(project.priority).toBeUndefined();
});

test('check if random id is created upon making a new project', () => {
  const project = new Project('test');
  expect(project.head_id).toBeDefined();
});

test('check if empty array of tasks is created upon making a new project', () => {
  const project = new Project('test');
  expect(project.tasks).toEqual([]);
});

test('check if tasks are added to project successfully', () => {
  const project = new Project('test');
  const task = new Task('test', '05-05-2022', 'low');

  project.tasks.push(task);

  expect(project.tasks).toHaveLength(1);
});

test('check for existence of example project', () => {
  const project = new Project('test');
  expect(project.allProjects[0].name).toEqual('Example project');
});