import './todo-item.styles.css';
import { AiFillCloseCircle, AiFillCheckCircle, AiFillEdit } from 'react-icons/ai';
import { useState } from 'react';
const TodoItem = ({ todo, removeTodoItem, handleCompleteTodo }) => {
  return (
    <li className={!todo.isComplete ? 'todo-list-item' : 'todo-list-item complete'}>
      <div className="todo-text">{todo.textTodo}</div>
      <div className={!todo.isComplete ? 'todo-icon' : 'none'}>
        <AiFillCloseCircle
          className="trash"
          onClick={() => {
            removeTodoItem(todo.id);
          }}
        />
        <AiFillCheckCircle
          className="check"
          onClick={() => {
            handleCompleteTodo(todo.id);
          }}
        />
      </div>
    </li>
  );
};

export default TodoItem;
