import React from 'react';
import Style from './todo.module.css';
const Todo = (props) => {
  const {title,desc} = props.todo;
  const {id} = props;
  const handleClick = (id) =>{
    props.onRemoveTodo(id);
  };
  return ( 
  <articel className={Style.todo}>
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
      </div>
      <div>
        <button className={Style.btn} onClick={()=>{handleClick(id)}}>
          <i className="fa fa-trash fa-2x"></i>

        </button>
      </div>

    
  </articel>
  );
};

export default Todo;