import React, { useEffect, useState } from "react";
import { TodoItem } from "@/interfaces/TodoItem";
import { Button, Input, List } from "antd";
import { v4 as uuidv4 } from "uuid";

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: uuidv4(), text: newTodo, done: false }]);
    }
    setNewTodo("");
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <Input
        placeholder="請輸入待辦事項"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button onClick={addTodo} disabled={newTodo.trim() === ""}>
        新增待辦事項
      </Button>
      總代辦事項數量: {todos.length}
      <List
        bordered
        dataSource={todos}
        renderItem={(todo) => (
          <List.Item
            actions={[
              <Button type="link" onClick={() => toggleTodo(todo.id)}>
                {todo.done ? "Undo" : "Complete"}
              </Button>,
              <Button type="link" danger onClick={() => deleteTodo(todo.id)}>
                Delete
              </Button>,
            ]}
          >
            <span
              style={{ textDecoration: todo.done ? "line-through" : "none" }}
            >
              {todo.text}
            </span>
          </List.Item>
        )}
      />
    </>
  );
};

export default Todo;
