import { combineReducers } from 'redux';
import ToDoListReducer from './ToDoListReducer'
import FakeBookReducer from './FakeBookReducer'
import BaiTapGameBauCuaReducer from './BaiTapGameBauCuaReducer'
export const rootReducer = combineReducers({
    ToDoListReducer,
    FakeBookReducer,
    BaiTapGameBauCuaReducer
})