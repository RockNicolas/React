import { useState } from 'react';
import Todo from './Todo'; 
import TodoForm from './TodoForm'; 
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar Funcionabilidade X no sistema",
      category: "Trabalho",
      isComplete: false,
    },
    {
      id: 2,
      text: "Ir para academia",
      category: "Pessoal",
      isComplete: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isComplete: false,
    },
  ]);

  const addTodo = (text, category,) => {
    const newTodos = [
      ...todos, 
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isComplete: false,
      },
    ];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo}/> 
    </div>
  );
}

export default App;
