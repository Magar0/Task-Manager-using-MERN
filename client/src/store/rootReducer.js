import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import currentUserSlice from './slices/currentUserSlice'
import taskSlice from "./slices/taskSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    tasks: taskSlice,
    currentUser: currentUserSlice,
})

export default rootReducer;