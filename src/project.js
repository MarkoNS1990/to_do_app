import {addNewTask} from './task'
let myProjects = []
class Project{
    constructor(name){
        this.name = name
        
    }

}

let myTasks = []
class Task{
    constructor(name,date,priority){
        this.name = name
        this.date = date
        this.priority = priority
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
        console.log( myProject.__proto__.constructor.name);
        const card = document.createElement('div')
        card.classList.add('card')

        myProjects.forEach((project)=>{
            card.innerHTML = `
            <div class='card-title'>
                ${project.name}
                <button class='btn btn-success addBtn'>Add</button>
            </div>
            <div class='card-body'>
                
            </div>
            
        `
        })

        
        
        content.appendChild(card)
        nameInput.value=''
        
        const addBtn = document.querySelector('.addBtn')
        addBtn.addEventListener('click',()=>{
            const cardBody = document.querySelector('.card-body')
            cardBody.innerHTML = `
            <form type='submit'>   
            <input type='text' placeholder='enter a task' class='form-control taskInput'>
                <input type='date' class='dateInput'> 
                <select name='priority' class='priority'>
                    <option value='low'>Low</option>
                    <option value='high'>High</option>
                </select> 
            <button type ='submit' class='btn btn-secondary submitForm'>Submit</button>
            </form> 
            `
            const submitForm = document.querySelector('.submitForm')
            const taskInput = document.querySelector('.taskInput')
            const priority = document.querySelector('.priority')
            const dateInput = document.querySelector('.dateInput')
            submitForm.addEventListener('click',(e)=>{
                e.preventDefault()
                const myTask = new Task(taskInput.value,dateInput.value,priority.value)
                myTasks.push(myTask)
                setDisplayNone(taskInput,dateInput,priority,submitForm)
                console.log(myTasks);
                myTasks.forEach((task)=>{
                    cardBody.innerHTML +=`
                    <p class='card-item'>${task.name} ${task.date} ${task.priority}</p>
                `
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


 



export default {addNewProject}