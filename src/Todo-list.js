
import React from 'react';
import Todoitem from './Todo-item';
import PropTypes from 'prop-types';





let Todolist = (props) =>{
    return(
        <div className="wrapper__list__item">
            {props.todos.map((todo,index) => {
                return <Todoitem key = {todo.id} index = {index} todo = {todo} onChange = {props.onTogle} />
            })}
        
        </div>
    )

    
}



export default Todolist;