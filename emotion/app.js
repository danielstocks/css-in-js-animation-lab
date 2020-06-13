import React from "react";
import { Global, css } from "@emotion/core";
import { TodoListContainer } from "shared";
import { TodoList } from "./todo-list";

export default function App() {
  return (
    <div css={{ padding: 20 }}>
      <Global
        styles={css`
          body {
            max-width: 720px;
            margin: 0 auto;
            font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
              sans-serif;
            font-size: 24px;
            background: peachpuff;
          }
        `}
      />
      <TodoListContainer>
        <TodoList />
      </TodoListContainer>
    </div>
  );
}
