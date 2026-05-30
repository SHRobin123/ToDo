import { useState, useEffect, useMemo } from "react";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import FilterButtons from "./components/FilterButtons";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("react-todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("react-todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setInputValue("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "active":
        return todos.filter((t) => !t.completed);

      case "completed":
        return todos.filter((t) => t.completed);

      default:
        return todos;
    }
  }, [todos, filter]);

  const stats = {
    total: todos.length,
    active: todos.filter((t) => !t.completed).length,
    completed: todos.filter((t) => t.completed).length,
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white rounded-xl shadow-lg overflow-hidden">

      <Header stats={stats} />

      <TodoForm
        addTodo={addTodo}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      <FilterButtons
        filter={filter}
        setFilter={setFilter}
      />

      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />

      <Footer
        stats={stats}
        clearCompleted={clearCompleted}
      />

    </div>
  );
}

export default App;

// echo "# ToDo" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/SHRobin123/ToDo.git
// git push -u origin main