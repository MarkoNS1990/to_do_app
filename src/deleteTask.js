export default function deleteTask (project,task){
    const index = project.tasks.indexOf(task);
    project.tasks.splice(index, 1);
}