import React from "react";

const TodoItem = ({ id, done, title, onToggleTodo, onDeleteTodo }) => {
  return (
    <div>
      <div key={id} className="TodoItem">
        <input
          checked={done}
          onChange={() => {
            onToggleTodo(id);
          }
          type="checkbox"
        />
        <p>{title}</p>
        <button onClick={() => onDeleteTodo(id)}>Löschen</button>
      </div>
    </div>
  );
};
export default TodoItem;
