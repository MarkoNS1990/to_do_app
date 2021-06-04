import Project from '../src/project'
import Task from '../src/task'
import {storeProjectInLocalStorage} from '../src/addProject'

test('create project with valid inputs', () => {
  const project = new Project('test',);
  expect(project.name).toBe('test');
});

test('check if random id is created upon making a new project',()=>{
    const project = new Project('test',);
    expect(project.head_id).toBeDefined()
})

test('check if empty array of tasks is created upon making a new project',()=>{
    const project = new Project('test',);
    expect(project.tasks).toEqual([])
})

test('check if tasks are added to project successfully',()=>{
    const project = new Project('test')
    const task = new Task('test','05-05-2022','low')

    project.tasks.push(task)

    expect(project.tasks).toHaveLength(1)
})
