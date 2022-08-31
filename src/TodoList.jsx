import { useState } from "react";

export const TodoList = (props) => {
  const handleRemove = (id) => {
    props.setTodos(props.todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo.task}
          id={todo.id}
          handleRemove={handleRemove}
        />
      ))}
    </>
  );
};

export const TodoItem = (props) => {
  const [completed, setCompleted] = useState(false);
  const handleUpdate = () => {
    setCompleted(true);
  };
  return (
    <ul>
      <li style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            margin: 2,
            textDecoration: completed ? "line-through" : "none"
          }}
        >
          {props.todo}
        </div>
        {!completed && (
          <div
            onClick={handleUpdate}
            style={{
              margin: 2,
              backgroundColor: "grey",
              width: "auto",
              padding: 8,
              cursor: "pointer"
            }}
          >
            Completed
          </div>
        )}
        <div
          onClick={() => props.handleRemove(props.id)}
          style={{
            margin: 2,
            backgroundColor: "grey",
            width: "auto",
            padding: 8,
            cursor: "pointer"
          }}
        >
          Remove
        </div>
      </li>
    </ul>
  );
};
