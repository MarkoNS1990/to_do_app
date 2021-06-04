import Project from '../src/project'

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