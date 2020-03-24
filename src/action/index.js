export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const INIT_TODO = "INIT_DOTO";
export const EDIT_TODO = "EDIT_TODO";


export function toggleTodo(todo){
    return {
        type:TOGGLE_TODO,
        todo:{
            ...todo
        }
    }
}

export function addTodo(task){
    return{
        type:ADD_TODO,
        todo:{
            task:task
        }
    }
}

export function deleteTodo(todo){
    return {
        type:REMOVE_TODO,
        todo:{
            ...todo
        }
    }
}

export function editTodo(todo){
    return {
        type: EDIT_TODO,
        todo:{
            ...todo
        }
    }
}