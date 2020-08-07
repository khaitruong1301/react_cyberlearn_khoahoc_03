import { add_task } from "../types/ToDoListTypes";


export const addTaskAction = (newTask) => {
    return {
        type: add_task,
        newTask
    }
}
