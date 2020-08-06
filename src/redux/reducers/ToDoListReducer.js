import { ToDoListDarkTheme } from "../../JSS_StyledComponent/Themes/ToDoListDarkTheme"

const initialState = {
    themeToDoList: ToDoListDarkTheme,
    taskList:[
        {id:'task-1',taskName:'task 1',done:true},
        {id:'task-2',taskName:'task 2',done:false},
        {id:'task-3',taskName:'task 3',done:true},
        {id:'task-4',taskName:'task 4',done:false},

    ]
}



export default (state = initialState, action) => {
    switch (action.type) {

   
    default:
        return {...state}
    }
}
