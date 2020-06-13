import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { iconDelete, iconDrag } from "shared";

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
        autocomplete="off"
        size="30"
        name="label"
        className="todo-add-input"
        type="text"
        placeholder="What do you need to do?"
      />
      <button className="todo-add-btn">Add</button>
    </form>
    <TransitionGroup component="ul" className="todo-list">
      {items.map((item) => {
        return (
          <CSSTransition
            key={item.id}
            timeout={500}
            classNames="todo-list-item"
          >
            <li
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
              <div role="button" className="todo-list-item-drag-btn">
                {iconDrag}
              </div>
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  </div>
);
