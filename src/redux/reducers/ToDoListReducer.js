import { ToDoListDarkTheme } from "../../JSS_StyledComponent/Themes/ToDoListDarkTheme"
import { add_task, change_theme, delete_task, done_task, edit_task,update_task } from "../types/ToDoListTypes"
import { arrTheme } from '../../JSS_StyledComponent/Themes/ThemeManager'

const initialState = {
    themeToDoList: ToDoListDarkTheme,
    taskList: [
        { id: 'task-1', taskName: 'task 1', done: true },
        { id: 'task-2', taskName: 'task 2', done: false },
        { id: 'task-3', taskName: 'task 3', done: true },
        { id: 'task-4', taskName: 'task 4', done: false },

    ],
    taskEdit: { id: 'task-1', taskName: 'task 1', done: false },
    
}



export default (state = initialState, action) => {
    switch (action.type) {
        case add_task: {
            // console.log('todo',action.newTask)
            //Kiểm tra rổng
            if (action.newTask.taskName.trim() === '') {
                alert('Task name is required!');
                return { ...state }
            }
            //Kiểm tra tồn tại
            let taskListUpdate = [...state.taskList];
            let index = taskListUpdate.findIndex(task => task.taskName === action.newTask.taskName);
            if (index !== -1) {
                alert('task name already exists !');
                return { ...state };
            }

            taskListUpdate.push(action.newTask);

            //Xử lý xong thì gán taskList mới vào taskList
            state.taskList = taskListUpdate;

            return { ...state }
        }
        case change_theme: {
            //Tìm theme dựa vào action.themeId được chọn
            let theme = arrTheme.find(theme => theme.id == action.themeId);
            if (theme) {
                console.log(theme);
                //set Lại theme cho state.themeToDoList
                state.themeToDoList = { ...theme.theme };
            }

            return { ...state };
        }
        case done_task: {
            //Click vào button check => dispatch lên action có taskID
            let taskListUpdate = [...state.taskList];
            //Từ task id tìm ra task đó ở vị trí nào trong mảng tiến hành cập nhật lại thuộc tính done = true. Và cập nhật lại state của redux
            let index = taskListUpdate.findIndex(task => task.id === action.taskId);
            if (index !== -1) {
                taskListUpdate[index].done = true;
            }

            // state.taskList = taskListUpdate;
            return { ...state, taskList: taskListUpdate }
        }

        case delete_task: {
            // let taskListUpdate = [...state.taskList];
            // //Gán lại giá trị cho mang taskListUpdate = chính nó nhưng filter không có taskId đó
            // taskListUpdate = taskListUpdate.filter(task => task.id !== action.taskId);

            // return {...state,taskList:taskListUpdate}

            return { ...state, taskList: state.taskList.filter(task => task.id !== action.taskId) }
        }

        case edit_task: {
            return { ...state, taskEdit: action.task }
        }

        case update_task: {
            // console.log(action.taskName)
            //Chỉnh sửa lại taskName của taskEdit
            state.taskEdit = { ...state.taskEdit, taskName: action.taskName };

            //Tìm trong taskList cập nhật lại taskEdit người dùng update
            let taskListUpdate = [...state.taskList];

            let index = taskListUpdate.findIndex(task => task.id === state.taskEdit.id);

            console.log(index);

            if (index !== -1) {
                taskListUpdate[index] = state.taskEdit;
            }

            state.taskList = taskListUpdate;

            return { ...state }




        }

        default:
            return { ...state }
    }
}
