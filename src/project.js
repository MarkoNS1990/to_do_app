import { v4 as uuidv4 } from 'uuid';
import Task from './task';

class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.head_id = uuidv4();
    this.body_id = uuidv4();
  }
}

const setDisplayNone = (name, date, priority, button) => {
  name.style.display = 'none';
  date.style.display = 'none';
  priority.style.display = 'none';
  button.style.display = 'none';
};

const storeProjectInLocalStorage = (project) => {
  let projects;
  if (localStorage.getItem('projects') === null) {
    projects = [];
  } else {
    projects = JSON.parse(localStorage.getItem('projects'));
  }
  projects.push(project);
  localStorage.setItem('projects', JSON.stringify(projects));
};

const storeTaskInLocalStorage = (task, project) => {
  const projects = JSON.parse(localStorage.getItem('projects'));

  projects.forEach((proj) => {
    if (project.head_id === proj.head_id) {
      proj.tasks.push(task);

      localStorage.removeItem('projects');
      localStorage.setItem('projects', JSON.stringify(projects));
    }
  });
};

const removeProjectFromLocalStorage = (project) => {
  const projects = JSON.parse(localStorage.getItem('projects'));

  projects.forEach((proj) => {
    if (project.head_id === proj.head_id) {
      const index = projects.indexOf(proj);
      projects.splice(index, 1);
      localStorage.removeItem('projects');
      localStorage.setItem('projects', JSON.stringify(projects));
    }
  });
};

const addNewProject = (() => {
  const content = document.querySelector('#content');
  const nameInput = document.createElement('input');
  const addButton = document.createElement('button');
  const div = document.createElement('div');
  div.classList.add('d-flex');
  div.appendChild(addButton);
  div.appendChild(nameInput);

  nameInput.classList.add('form-control');
  nameInput.placeholder = 'Enter project name';
  addButton.classList.add('btn', 'btn-primary', 'my-button');
  addButton.innerText = '+';
  content.appendChild(div);

  // listener for loading projects on start
  window.onload = (()=>{
    const projects = JSON.parse(localStorage.getItem('projects'));
    const div = document.createElement('div')
    div.innerHTML = `
      In total there are ${projects.length} projects in the LocalStorage.
    `
    content.appendChild(div)
  })

  // event listener for add project Button
  addButton.addEventListener('click', () => {
    if (nameInput.value === '') {
      alert('Put the project name please');
    } else {
      const myProject = new Project(nameInput.value);

      storeProjectInLocalStorage(myProject);
      const myProjects = JSON.parse(localStorage.getItem('projects'));

      const card = document.createElement('div');
      card.classList.add('card');

      const cardBodyId = uuidv4();

      myProjects.forEach((project) => {
        card.innerHTML = `
            <div class='card-title'>
               <p class='heading'>Project name: ${project.name}</p> 
                <button class='btn btn-success addBtn' data=${myProject.head_id}>Add task</button>
                <button class='btn btn-danger deleteProjectBtn' data=${myProject.body_id}>Delete project</button>
            </div>
            <div class='card-body' data=${cardBodyId}>
                
            </div>
            
        `;
      });

      content.appendChild(card);
      const deleteBtn = document.querySelector(`[data='${myProject.body_id}']`);

      nameInput.value = '';
      // Event for deleting project
      deleteBtn.addEventListener('click', (e) => {
        removeProjectFromLocalStorage(myProject);
        e.target.parentElement.parentElement.remove();
      });
      const addBtn = document.querySelector(`[data='${myProject.head_id}']`);

      addBtn.addEventListener('click', () => {
        const submitId = uuidv4();
        const inputId = uuidv4();
        const priorityId = uuidv4();
        const dateId = uuidv4();
        const cardBody = document.querySelector(`[data='${cardBodyId}']`);

        cardBody.innerHTML = `
            <form type='submit'>
                  
                <input type='text' placeholder='enter a task' class='form-control taskInput' data=${inputId}>
                <input type='date' class='dateInput' data=${dateId}> 
                <select name='priority' class='priority' data=${priorityId}>
                    <option value='low'>Low</option>
                    <option value='high'>High</option>
                </select> 
            <button type ='submit' class='btn btn-secondary submitForm' data=${submitId}>Submit</button>
            </form> 
            `;
        const submitForm = document.querySelector(`[data='${submitId}']`);
        const taskInput = document.querySelector(`[data='${inputId}']`);
        const priority = document.querySelector(`[data='${priorityId}']`);
        const dateInput = document.querySelector(`[data='${dateId}']`);

        submitForm.addEventListener('click', (e) => {
          e.preventDefault();
          if (taskInput.value === '' || dateInput.value === '') {
            alert('Please fill in all fields');
          } else {
            const myTask = new Task(taskInput.value, dateInput.value, priority.value);

            myProjects.forEach((proj) => {
              if (proj.head_id === myProject.head_id) {
                storeTaskInLocalStorage(myTask, myProject);
                setDisplayNone(taskInput, dateInput, priority, submitForm);
                const myProjectWithTasks = JSON.parse(localStorage.getItem('projects'));
                const itemId = uuidv4();

                myProjectWithTasks.forEach((myProj) => {
                  if (myProj.head_id === myProject.head_id) {
                    myProj.tasks.forEach((task) => {
                      cardBody.innerHTML += `
                                    <div class='card-item' data=${itemId}>${task.name} | Due date: ${task.date} | priority: ${task.priority}<button class='btn btn-danger deleteBtn' data=${task.id}>Delete</button></div>
                                `;
                    });

                    document.querySelectorAll('.deleteBtn').forEach((button) => {
                      button.addEventListener('click', (e) => {
                        const index = myProject.tasks.indexOf(myTask);

                        myProject.tasks.splice(index, 1);
                        e.target.parentElement.remove();
                      });
                    });
                  }
                });
              }
            });
          }
        });
      });
    }
  });
})();

export default { addNewProject };