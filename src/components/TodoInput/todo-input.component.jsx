import './todo-input.styles.css';

const TodoInput = ({ addTodoItem, handleInputTodo, inputTodoText }) => {
  return (
    <div className="todo-input">
      <form onSubmit={addTodoItem}>
        <input type="text" onChange={handleInputTodo} value={inputTodoText} />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};

export default TodoInput;
