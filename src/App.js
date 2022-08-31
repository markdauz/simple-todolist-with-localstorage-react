import { useState, useEffect } from "react";
import { TodoList } from "./TodoList";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("storedTodos")) || []
  );
  const [task, setTask] = useState("");

  useEffect(() => {
    localStorage.setItem("storedTodos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const todoItem = { id: Math.random(), task: task };
    setTodos((prevTodos) => {
      return [...prevTodos, todoItem];
    });
    setTask("");
  };

  return (
    <div className="App">
      <h1>Simple Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          style={{ margin: 2 }}
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button style={{ margin: 2 }} disabled={task === "" ? true : false}>
          Add Todo
        </button>
      </form>
      <hr />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
