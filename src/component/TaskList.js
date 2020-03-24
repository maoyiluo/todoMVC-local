import React from 'react';
import {connect} from 'react-redux'
import Task from './Task'
import {toggleTodo, deleteTodo, editTodo} from '../action'

function TaskList(props){
    const taskListDom = props.todos.map((todo)=>(<Task key={todo.id} editTodo={props.editTodo} deleteTodo={props.deleteTodo} onClick={(e)=>{console.log(e);props.toggleTodo(todo)}} {...todo} />));
    return(
        <div className='tasklist'>
            {taskListDom}
        </div>
    )
}

function mapStateToProps(state){
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch){
    return {
        toggleTodo: todo=>dispatch(toggleTodo(todo)),
        deleteTodo: todo=>dispatch(deleteTodo(todo)),
        editTodo: todo=>dispatch(editTodo(todo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)