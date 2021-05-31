import {addNewProject} from './project'



const addNewTask = (()=>{
    const addButton = document.querySelector('.addBtn')

   addButton ? addButton.addEventListener('click',()=>{
        const cardBody = document.querySelector('.card-body')
        const taskInput = document.createElement('input')
        taskInput.classList.add('form-control')

        cardBody.appendChild(taskInput)
        console.log('ffsf');
    }):null
})()

export default {addNewTask}