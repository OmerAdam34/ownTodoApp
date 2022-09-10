import { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoItem from "./components/TodoItem";
import TodoList from "./Components/TodoList";

export default function Home() {
  const [todos, setTodos] = useState([
    { title: "test Todo", id: uuid(), done: true },
  ]);

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleAddtodo = (event) => {
    if (event.key === "Enter") {
      setTodos([
        ...todos,
        { id: uuid(), title: event.target.value, done: false },
      ]);
      event.target.value = "";
    }
  };

  // Abhacken von Todos
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      })
    );
  };

  const activeTodos = todos.filter(({ done }) => !done);
  const doneTodos = todos.filter(({ done }) => done);

  return (
    <div className="main">
      <div>
        <input type="text" placeholder="search"></input>
      </div>

      <div>
        <h1>Meine Todo-App</h1>
      </div>

      <div>
        <div>
          <input
            onKeyDown={handleAddtodo}
            type="text"
            placeholder="Hier Todo hinzufügen"
          ></input>
        </div>

        <TodoList
          title="Zu erledigen"
          list={activeTodos}
          onDeleteTodo={handleDeleteTodo}
          onToggleTodo={toggleTodo}
        />

        <TodoList
          title="Erledigt"
          list={doneTodos}
          onDeleteTodo={handleDeleteTodo}
          onToggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
}
