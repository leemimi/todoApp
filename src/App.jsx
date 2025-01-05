import { useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '할 일 1',
      checked: false,
    },
    {
      id: 2,
      text: '할 일 2',
      checked: true,
    },
    {
      id: 3,
      text: '할 일 3',
      checked: false,
    },
  ]);

  const onInsert = (text) => {
    const nextId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    setTodos(todos.concat({
        id: nextId,
        text,
        checked: false,
    }));
  };

  const onRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodos(
      todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
    );
  };

  return (
    <div>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </div>
  );
}

export default App;
