import { combineReducers } from 'redux';
import ToDoListReducer from './ToDoListReducer'
import FakeBookReducer from './FakeBookReducer'
export const rootReducer = combineReducers({
    ToDoListReducer,
    FakeBookReducer
})