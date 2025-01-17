import { useState } from 'react';
import Todo from './Todo'; 
import TodoForm from './TodoForm'; 
import Search from './Search';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar Funcionabilidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const [ search ,setSearch ] = useState("");

  const addTodo = (text, category,) => {
    const newTodos = [
      ...todos, 
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => 
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted : !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo 
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo}/> 
    </div>
  );
}

export default App;
