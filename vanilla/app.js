import React from "react";
import { TodoListContainer } from "shared";
import { TodoList } from "./todo-list";

export default function App() {
  return (
    <TodoListContainer>
      <TodoList />
    </TodoListContainer>
  );
}
