import defaultTask from '../defaultTask'
import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO, EDIT_TODO,INIT_TODO} from '../action/'

function todos(state={todos:defaultTask}, action){
    let nextID = window.localStorage.getItem("nextID");
    let todoID = window.localStorage.getItem("todoID");
    let todos = (state.todos)?state.todos.slice(0):[];
    if(!todoID) todoID = [];
    else if(todoID.length === 1) todoID = [todoID];
    else todoID = todoID.split(',');
    if(!nextID) nextID = 0;
    else nextID = Number.parseInt(nextID);
    if(nextID > 0) todos = [];
    switch (action.type){
        case ADD_TODO: 
        //if this case, task won't have an id
            nextID = nextID + 1;
            action.todo.id = nextID;
            action.todo.done = false;
            todoID.push(nextID);
            todos.push({task:action.todo.task, id:nextID, done:false});
            window.localStorage.setItem(nextID, [action.todo.task, action.todo.done])
            break;
        case REMOVE_TODO:
        //in this case, task has an id
            todoID = todoID.filter(id=>id != action.todo.id);
            todos = todos.filter(todo=>todo.id != action.todo.id);
            window.localStorage.removeItem(action.todo.id)
            break;
        case TOGGLE_TODO:
        //in this case, task has an id
            let todo = window.localStorage.getItem(action.todo.id);
            window.localStorage.setItem(action.todo.id, [action.todo.task, !action.todo.done]);
            for(todo of todos){
                if(todo.id === action.todo.id)
                    todo.done = !todo.done;
            }
            break;
        case EDIT_TODO:
            window.localStorage.setItem(action.todo.id, [action.todo.task, action.todo.done]);
            for(let todo of todos){
                if(todo.id === action.todo.id)
                    todo.task = action.todo.task;
            }
            break;
        case INIT_TODO:
        // initialize the state from localstorage
            for(let index of todoID){
                let newTodoArr = window.localStorage.getItem(index).split(",");
                let newTodo = {task: newTodoArr[0], id:Number.parseInt(index), done: newTodoArr[1]=='true'};
                todos.push(newTodo);
            }
            break;
        default:
            return state;
    }
    window.localStorage.setItem("nextID", nextID);
    window.localStorage.setItem("todoID", todoID);
    return {todos: todos};
}

export default todos