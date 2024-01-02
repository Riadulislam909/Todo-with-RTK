import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

// at first we need to configureStore which take object as a parameter
export const store = configureStore({
    reducer: todoReducer
    //it is for single reducer
    //for multiple reducer there is another way.
})