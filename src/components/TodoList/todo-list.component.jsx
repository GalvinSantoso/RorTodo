import TodoItem from '../TodoItem/todo-item.component';
import './todo-list.styles.css';
const TodoList = ({ todos, removeTodoItem, handleCompleteTodo }) => {
  return (
    <div className="todo-list">
      <ul className="todo-list-container">
        {todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} removeTodoItem={removeTodoItem} handleCompleteTodo={handleCompleteTodo} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
