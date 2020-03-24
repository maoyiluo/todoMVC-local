import React, {useEffect} from 'react'
import {INIT_TODO} from '../action'
import {connect} from 'react-redux'
import NewTask from '../component/NewTask'
import TaskList from '../component/TaskList'

function Panel(props){
    useEffect(()=>{
        props.initTodo();
    })
    return(
        <div>
            <NewTask />
            <TaskList />
        </div>
    )
}

const mapDispatchToProps=dispatch => {
    return{
        initTodo: ()=>{
            dispatch({type: INIT_TODO});
        }
    }
}

export default connect(null, mapDispatchToProps)(Panel)