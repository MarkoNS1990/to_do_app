import {addNewProject} from './project'

class Task{
    constructor(name,date,priority){
        this.name = name
        this.date = date
        this.priority = priority
    }
}

const addNewTask = (()=>{
    const addButton = document.querySelector('.addBtn')

   addButton ? addButton.addEventListener('click',()=>{
        const cardBody = document.querySelector('.card-body')
        const taskInput = document.createElement('input')
        taskInput.classList.add('form-control')

        cardBody.appendChild(taskInput)
        console.log('ffs');
    }):null
})()

export default {addNewTask}