import create from "zustand";
import { v4 as uuid } from "uuid";

const useStore = create((set) => {
  return {
    todos: [{ title: "test Todo", id: uuid(), done: true }],
    setTodos: (todos) => {
      set({
        todos: todos,
      });
    },
  };
});

export default useStore;
