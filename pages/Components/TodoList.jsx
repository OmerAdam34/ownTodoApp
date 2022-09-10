import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ list, title, onDeleteTodo, onToggleTodo }) => {
  return (
    <div className="TodoListContainer">
      <h2>{title}</h2>

      {list.map((todo) => (
        <TodoItem
          key={id}
          id={todo.id}
          done={todo.done}
          title={todo.title}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </div>
  );
};
export default TodoList;
