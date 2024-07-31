import { configureStore } from "@reduxjs/toolkit";
import todoList from "./todo-list";

export const store = configureStore({
    reducer:{
        todoList,
    },
})