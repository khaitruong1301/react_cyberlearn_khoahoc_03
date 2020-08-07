import { ToDoListDarkTheme } from "../../JSS_StyledComponent/Themes/ToDoListDarkTheme"
import { add_task, change_theme } from "../types/ToDoListTypes"
import {arrTheme} from '../../JSS_StyledComponent/Themes/ThemeManager'

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
        case add_task :{
            // console.log('todo',action.newTask)
            //Kiểm tra rổng
            if(action.newTask.taskName.trim() === ''){
                alert('Task name is required!');
                return {...state}
            }
            //Kiểm tra tồn tại
            let taskListUpdate = [...state.taskList];
            let index = taskListUpdate.findIndex(task => task.taskName === action.newTask.taskName);
            if(index!==-1){
                alert('task name already exists !');
                return {...state};
            }

            taskListUpdate.push(action.newTask);

            //Xử lý xong thì gán taskList mới vào taskList
            state.taskList = taskListUpdate;

            return {...state}
        }
        case change_theme: {
            //Tìm theme dựa vào action.themeId được chọn
            let theme = arrTheme.find(theme=>theme.id == action.themeId);
            if(theme){
                console.log(theme);
                //set Lại theme cho state.themeToDoList
                state.themeToDoList = {...theme.theme};
            }

            return {...state}; 
        }
   
    default:
        return {...state}
    }
}
