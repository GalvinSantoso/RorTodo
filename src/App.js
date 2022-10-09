import { useEffect, useRef, useState } from 'react';
import './App.css';
import TodoHeader from './components/TodoHeader/todo-header.component';
import TodoInput from './components/TodoInput/todo-input.component';
import TodoList from './components/TodoList/todo-list.component';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputTodoText, setInputTodoText] = useState('');

  const handleInputTodo = (e) => {
    const stringInput = e.target.value;
    setInputTodoText(stringInput);
  };

  const addTodoItem = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.round(Math.random() * 10000),
      textTodo: inputTodoText,
      isComplete: false,
    };
    if (newTodo.textTodo === '') {
      return;
    }
    const todoArr = [...todos, newTodo];
    setTodos(todoArr);
    setInputTodoText('');
  };
  const removeTodoItem = (id) => {
    const newTodoArr = todos.filter((item) => item.id !== id);
    setTodos(newTodoArr);
  };

  const handleCompleteTodo = (id) => {
    const newTodoArr = todos.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    setTodos(newTodoArr);
  };

  return (
    <div className="todo-app">
      <TodoHeader />
      <TodoInput addTodoItem={addTodoItem} handleInputTodo={handleInputTodo} inputTodoText={inputTodoText} />
      <TodoList todos={todos} removeTodoItem={removeTodoItem} handleCompleteTodo={handleCompleteTodo} />
    </div>
  );
}

export default App;
