import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { iconDelete } from "shared";

export const TodoList = ({ addItem, removeItem, checkItem, items }) => (
  <div>
    <h1>Things to do</h1>
    <form
      className="todo-add"
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
        autoComplete="off"
        size="30"
        name="label"
        className="todo-add-input"
        type="text"
        placeholder="What do you need to do?"
      />
      <button className="todo-add-btn">Add</button>
    </form>
    <ul className="todo-list" style={{ height: 57 * items.length + "px" }}>
      <TransitionGroup component={null}>
        {items.map((item, i) => {
          return (
            <CSSTransition
              key={item.id}
              timeout={500}
              classNames="todo-list-item"
            >
              <li
                style={{
                  "--y": `translateY(${i * 57 + "px"})`,
                }}
                className={`todo-list-item ${item.checked ? "is-checked" : ""}`}
              >
                <label className="todo-list-item-label">
                  <input
                    onChange={(e) => {
                      checkItem(item.id);
                    }}
                    type="checkbox"
                    checked={item.checked}
                    className="todo-list-item-checkbox"
                  />
                  <span className="todo-list-item-text">{item.label}</span>
                </label>
                <div
                  role="button"
                  onClick={() => removeItem(item.id)}
                  className="btn todo-list-item-remove-btn"
                >
                  {iconDelete}
                </div>
              </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </ul>
  </div>
);
