// Todo.tsx
import React from "react";

interface TodoProps {
  todo: {
    id: number;
    text: string;
    isChecked: boolean;
  };
  onDelete: () => void;
}

const Todo: React.FC<TodoProps> = ({ todo, onDelete }) => {
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Todo;
