// App.tsx
import React, { useState } from "react";
import Todolist from "./Todolist";
import Timer from "./Timer";

interface ITodo {
  id: number;
  text: string;
  isChecked: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [input, setInput] = useState<string>("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: input, isChecked: false }]);
      setInput("");
    }
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div>
      <Timer />
      <h1>할 일 목록</h1>
      <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="할 일을 입력하세요" />
        <button onClick={addTodo}>추가</button>
      </div>
      <div>
        {todos.map((todo) => (
          <Todolist key={todo.id} todo={todo} onDelete={() => deleteTodo(todo.id)} />
        ))}
      </div>
    </div>
  );
};

export default App;
