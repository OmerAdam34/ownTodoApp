import { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoList from "./Components/TodoList";

import useStore from "../hooks/useStore";

export default function Home() {
  const todos = useStore((state) => state.todos);

  const setTodos = useStore((state) => state.setTodos);

  const [searchQuery, setSearchQuery] = useState("");

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
  const filterTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Suche von Todos
  return (
    <div className="main">
      <div>
        <input
          onChange={(event) => setSearchQuery(event.target.value)}
          type="text"
          placeholder="search"
        ></input>
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

        {searchQuery ? (
          <TodoList
            title="Suchergebnisse"
            list={filterTodos}
            onDeleteTodo={handleDeleteTodo}
          />
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}
