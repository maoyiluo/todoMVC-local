import React, {useState} from 'react';
import {connect} from 'react-redux'
import {addTodo} from '../action'

function NewTask(props){
    let clickAddTodo = ()=>{
        if(input.length > 0)
            props.addTodo(input);
        setInput("");
    }

    const [input, setInput] = useState("");
    return (
        <div className='newTask'>
            <input className='newTaskInput' type = 'text' value={input} onChange ={(e)=>{setInput(e.target.value)}}></input>
            <button className="addBtn" onClick={clickAddTodo}>New Task</button>
        </div>
    )
}

const mapDispatchToState = dispatch=>{
    return {
        addTodo: (task)=>{
            dispatch(addTodo(task))
        }
    }
}

export default connect(null,mapDispatchToState)(NewTask);