import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    todoItem: [],

}
const todoReducer = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action) =>{
            return {...state, todoItem: [...state.todoItem, action.payload]}
        },
        editItem: (state, action) =>{
            return {...state, todoItem:state.todoItem.map((item) => item.id ? action.payload : item)}
        },
        deleteItem: (state, action) =>{
            return {...state, todoItem:state.todoItem.filter((item) => item.id !== action.payload)}
        } 
    }
})
export default todoReducer.reducer

export const {add, add2, editItem, deleteItem} = todoReducer.actions;