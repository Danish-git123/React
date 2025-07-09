import React, { createContext } from "react";
import { useContext } from "react";

// Context Creation
export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"Todo Message",
            completed:false,

        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})


// Context Provider
export const TodoProvider=TodoContext.Provider

// Use Context now
export const useTodo=()=>{
    return useContext(TodoContext)
}

