import React, {useState} from 'react'
import './stylesheet/Task.css'

function editTodo(todo, editTodo, id) {
    var oldTask = todo.innerHTML;
    var newTodoInput = document.createElement('input');
    newTodoInput.type = 'text';
    newTodoInput.value = oldTask;
    newTodoInput.onblur = function() {
        todo.innerHTML = this.value == oldTask ? oldTask : this.value;
        todo.setAttribute("ondblclick", "ShowElement(this);");
        editTodo({task:todo.innerHTML, id:id});
    }
    todo.innerHTML = '';
    todo.appendChild(newTodoInput);
    newTodoInput.setSelectionRange(0, oldTask.length);
    newTodoInput.focus();
    newTodoInput.parentNode.setAttribute("ondblclick", "");
}

function Task(props){
    let style = {
        textDecoration: (props.done)? 'line-through' : 'none'
    }
    return(
        <div className="todo"  onClick={()=>props.onClick()}>
            <span onDoubleClick={(e)=>editTodo(e.target, props.editTodo, props.id)} style={style}>{props.task}</span>
            <button className='deleteBtn' onClick={()=>{props.deleteTodo({task:props.task, id:props.id})}}><span>delete</span></button>
        </div>
    )
}

export default Task