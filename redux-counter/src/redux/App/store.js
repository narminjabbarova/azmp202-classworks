import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/counterSlice"
import todoReducer from "../features/todoSlice";
export const store = configureStore({
    reducer:{
        counter: counterReducer,
        todos: todoReducer,
    },
})