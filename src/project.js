import {addNewTask} from './task'

class Project{
    constructor(name){
        this.name = name
    }
}

const addNewProject = (()=>{
    
    const content = document.querySelector('#content')
    const nameInput = document.createElement('input')
    const addButton = document.createElement('button')

    nameInput.classList.add('form-control')
    addButton.classList.add('btn', 'btn-primary')
    addButton.innerText='Add Project'
    content.appendChild(nameInput)
    content.appendChild(addButton)
    
    // event listener for addButton
    addButton.addEventListener('click',()=>{
        const myProject = new Project(nameInput.value)

        const card = document.createElement('div')
        card.classList.add('card')

        card.innerHTML = `
            
            <div class='card-title'>
                ${myProject.name}
                <button class='btn btn-success addBtn'>Add</button>
                <button class='btn btn-danger'>Delete</button>
            </div>
            <div class='card-body'>

            </div>
        `
        content.appendChild(card)
        nameInput.value=''
        console.log(myProject);
    })
})()

export default {addNewProject}