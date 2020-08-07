import { add_task, change_theme, done_task, delete_task } from "../types/ToDoListTypes";


export const addTaskAction = (newTask) => {
    return {
        type: add_task,
        newTask
    }
}



export const changeThemeAction = (themeId) => {
    return {
        type: change_theme,
        themeId
    }
}


export const doneTaskAction = (taskId) =>( {
    type: done_task,
    taskId
})


export const deleteTaskAction = (taskId) => ({
    type: delete_task,
    taskId
}) 



//{ return {}} = ({});
