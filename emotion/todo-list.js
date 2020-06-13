import React from "react";
import { Transition, TransitionGroup } from "react-transition-group";
import { iconDelete, iconDrag } from "shared";
import { css } from "@emotion/core";

function getTransitionStyle(state) {
  if (state === "entered") {
    return {
      transform: "scale(1)",
      opacity: 1,
    };
  }
  if (state === "entering") {
    return {
      opacity: 1,
      transform: "scale(1)",
      transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    };
  }
  if (state === "exiting") {
    return {
      opacity: 0,
      transform: "scale(0)",
      transition: "all 500ms",
    };
  }
  if (state === "exited") {
    return {
      transform: "scale(0)",
      opacity: "0",
    };
  }
}

const btn = css`
  border: 1px solid burlywood;
  background: linear-gradient(papayawhip, #ffd6b1);
  padding: 5px;
  border-radius: 2px;
  &:hover {
    border-color: #aaa;
    fill: #555;
  }
`;

export const TodoList = ({ addItem, removeItem, checkItem, items }) => (
  <div>
    <h1>Things to do</h1>
    <form
      css={{
        display: "flex",
        alignItems: "center",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        const label = e.target.label.value;
        if (!label) return;
        addItem(label);
        e.target.label.focus();
        e.target.reset();
      }}
    >
      <input
        css={{
          marginRight: "10px",
          background: "papayawhip",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid burlywood",
          borderWidth: "0 0 1px",
          height: "50px",
          ":focus": {
            borderColor: "#c8a67b",
          },
        }}
        size="30"
        name="label"
        type="text"
        placeholder="What do you need to do?"
      />
      <button
        css={{
          borderRadius: "2px",
          border: "1px solid burlywood",
          background: "linear-gradient(papayawhip, #ffd6b1)",
          height: "50px",
          fontWeight: "500",
          letterSpacing: "0.02em",
          textShadow: "1px 0px 0px peachpuff",
          padding: "0 25px",
          fontSize: "16px",
          color: "#222",
          ":hover": {
            borderColor: "#c8a67b",
            color: "#555",
          },
        }}
      >
        Add
      </button>
    </form>
    <ul css={{ listStyle: "none", padding: 0 }}>
      <TransitionGroup component={null}>
        {items.map((item) => {
          return (
            <Transition
              key={item.id}
              timeout={500}
              onEnter={(node) => node.scrollTop}
            >
              {(state) => {
                return (
                  <li
                    css={{
                      display: "flex",
                      marginBottom: "5px",
                      borderBottom: "1px solid sandybrown",
                      padding: "10px 0",
                      ...getTransitionStyle(state),
                    }}
                  >
                    <label
                      css={{
                        display: "flex",
                        flexGrow: 1,
                        alignItems: "center",
                      }}
                    >
                      <input
                        onChange={(e) => {
                          checkItem(item.id);
                        }}
                        type="checkbox"
                        checked={item.checked}
                        css={{ marginRight: 10 }}
                      />
                      <span
                        css={{
                          transition: "200ms all ease-out",
                          ...(item.checked && {
                            opacity: 0.2,
                            textDecoration: "line-through",
                          }),
                        }}
                      >
                        {item.label}
                      </span>
                    </label>
                    <div
                      role="button"
                      onClick={() => removeItem(item.id)}
                      css={[
                        btn,
                        {
                          marginLeft: "auto",
                          marginRight: 5,
                        },
                      ]}
                    >
                      {iconDelete}
                    </div>
                    <div
                      role="button"
                      css={[
                        {
                          padding: 5,
                          border: "none",
                          cursor: "move",
                        },
                      ]}
                    >
                      {iconDrag}
                    </div>
                  </li>
                );
              }}
            </Transition>
          );
        })}
      </TransitionGroup>
    </ul>
  </div>
);
