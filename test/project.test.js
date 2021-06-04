import Project from '../src/project'

test('create project with valid inputs', () => {
  const project = new Project('test',);
  expect(project.name).toBe('test');
});