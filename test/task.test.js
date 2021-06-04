import Task from '../src/task'

test('create task with valid inputs', () => {
  const task = new Task('test', '05-05-2020', 'low');
  expect(task.name).toBe('test');
  expect(task.date).toBe('05-05-2020');
  expect(task.priority).toBe('low');
});

test('check if random id is created upon making a new task',()=>{
  const task = new Task('test','05-05-2020','low');
  expect(task.id).toBeDefined()
})



