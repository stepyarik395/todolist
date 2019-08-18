import React from 'react';
import propTypes from 'prop-types';







let Todoitem = ({todo,index, onChange}) =>{
    console.log('todo' , todo);
    return(
        <div>
           <div className = "wrapper__item">
               <input type ="checkbox"
               onChange = {()=>{onChange(todo.id)} }
              
               ></input>
               <span className = "inex__count">
                   {index +1}
                 &nbsp;
               </span>
               <h5>
               {todo.title}
               </h5>
               <button>edit</button>


           </div>

        </div>

    )
}



export default Todoitem;