import {addNewTask} from './task'
import { v4 as uuidv4 } from 'uuid';
let myProjects = []
class Project{
    constructor(name){
        this.name = name
        this.tasks = []
        this.id = uuidv4()
    }
    

}


class Task{
    constructor(name,date,priority){
        this.name = name
        this.date = date
        this.priority = priority
        this.id=uuidv4()
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
    
    // event listener for add project Button
    addButton.addEventListener('click',()=>{
        const myProject = new Project(nameInput.value)
        myProjects.push(myProject)
        
        const card = document.createElement('div')
        card.classList.add('card')
        
        const cardBodyId = uuidv4()

        myProjects.forEach((project)=>{
            card.innerHTML = `
            <div class='card-title'>
                ${project.name}
                <button class='btn btn-success addBtn' data=${myProject.id}>Add</button>
            </div>
            <div class='card-body' data=${cardBodyId}>
                
            </div>
            
        `
        })

        content.appendChild(card)
        nameInput.value=''
        
        const addBtn = document.querySelector(`[data='${myProject.id}']`)
        
        addBtn.addEventListener('click',()=>{
            console.log(addBtn);
            console.log(myProject);
            const submitId = uuidv4()
            const inputId = uuidv4()
            const priorityId = uuidv4()
            const dateId = uuidv4()
            const cardBody = document.querySelector(`[data='${cardBodyId}']`)

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
            `
            const submitForm = document.querySelector(`[data='${submitId}']`)
            const taskInput = document.querySelector(`[data='${inputId}']`)
            const priority = document.querySelector(`[data='${priorityId}']`)
            const dateInput = document.querySelector(`[data='${dateId}']`)
            
            submitForm.addEventListener('click',(e)=>{
                e.preventDefault()
                
                const myTask = new Task(taskInput.value,dateInput.value,priority.value)
                
                myProject.tasks.push(myTask)
                setDisplayNone(taskInput,dateInput,priority,submitForm)
                
                myProject.tasks.forEach((task)=>{
                    cardBody.innerHTML +=`
                    <p class='card-item'><input type='checkbox' class='checked'> ${task.name} ${task.date} ${task.priority}</p>
                `
                })
                const checked =document.querySelector('.checked')
                const cardItem = document.querySelector('.card-item')
                
                checked.addEventListener('change',()=>{
                    
                    checked.checked===true? cardItem.style.textDecoration='line-through':cardItem.style.textDecoration='none'
                })
                
                

            })

            
        })
    })
})()

const setDisplayNone = (name,date,priority,button)=>{
    name.style.display ='none'
    date.style.display ='none'
    priority.style.display ='none'
    button.style.display = 'none'
}

const setDisplayBlock = (name,date,priority,button)=>{
    name.style.display ='block'
    date.style.display ='block'
    priority.style.display ='block'
    button.style.display = 'block'
}


 



export default {addNewProject}