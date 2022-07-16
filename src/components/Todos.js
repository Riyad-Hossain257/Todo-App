
import Todo from "./Todo";
import Style from "./todos.module.css";
const Todos = (props) => {

return ( <section className={Style.todos}>
{
   props.todos.map((todo) => (<Todo todo={todo.todo} key={todo.id} id={todo.id}
   onRemoveTodo={props.onRemoveTodo}/>))
}
</section>
);
  
};

export default Todos;