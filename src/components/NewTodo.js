
import React, {useState} from 'react';
import Style from "./newtodo.module.css";
const NewTodo = (props) => {
  const[todo, setTodo] = useState({title : " ", desc: " "});
 const { title,desc } = todo;
  const handleChange = (event) =>{
    const name = event.target.name;
    setTodo((oldTodo) => {
      return {...oldTodo, [name]: event.target.value}
    })
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo({title:"",desc:""});
  };

  return (
   <form className={Style.form} onSubmit={handleSubmit}>
    <div className={Style["form-field"]}>
      <label htmlFor='title'>Title:</label>
      <input type="text" id="title" name="title" 
      value={title} onChange={handleChange}/>
    </div>
    <div className={Style["form-field"]}>
      <label id='desc'>Description:</label>
      <input type="text" id="desc" name="desc" 
      value={desc} onChange={handleChange}/>
    </div>
    <button type='submit'>Add Todo</button>
   </form>
  );
};

export default NewTodo;