//we need to create Slice and we take nanoid to make id

import { createSlice, nanoid } from "@reduxjs/toolkit";

//make a initialState

const initialState ={
    todos:[{id:1, text: "Hello World"}]
}

//then we need to make Slice(like reducer, reducer is a just a function). In context api we define our function in app.js but in rtk we define function in here.
//In Slice there also has obj
export const todoSlice = createSlice({
    name: "todo", //in redux toolkit chrome extention this name will show
    
    initialState,//initialize it
    //then come reducers
    reducers: {
        //property : function
        //this function has 2 peremeter state and action. From state we can take enter intial state. And from action we can take value like id, text

        addTodo : (state, action)=>{
            //make a todo obj. because in todos array we give it obj
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            //now we need to give it in our state
            state.todos.push(todo)
        },
        removeTodo : (state, action) => {
            state.todos =state.todos.filter((value)=> value.id !== action.payload)
        },
    }
})

//reducer need to export in two step, here is step:2
//it also need in individual export for function

export const {addTodo, removeTodo} =todoSlice.actions

//then we need to aware our store about reducers

export default todoSlice.reducer