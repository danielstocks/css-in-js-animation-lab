import React, { useState } from "react";

let fakeUniqueId = 0;
function getUniqueId() {
  fakeUniqueId++;
  return fakeUniqueId;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const TodoListContainer = (props) => {
  const [items, updateItems] = useState([
    {
      label: "Eat",
      checked: true,
      id: getUniqueId(),
    },
    {
      label: "Work",
      checked: true,
      id: getUniqueId(),
    },
    {
      label: "Sleep",
      checked: false,
      id: getUniqueId(),
    },
    {
      label: "Die",
      checked: false,
      id: getUniqueId(),
    },
  ]);

  const addItem = (label) => {
    updateItems([{ label, id: getUniqueId(), checked: false }, ...items]);
  };

  const checkItem = (id) => {
    const index = items.findIndex((item) => item.id == id);
    const newItems = items.slice(0);
    newItems[index].checked = !items[index].checked;
    updateItems(newItems);
  };

  const removeItem = (id) => {
    updateItems(items.filter((item) => item.id !== id));
  };

  const moveItem = (dragIndex, hoverIndex) => {
    const newItems = items.slice(0);
    const dragItem = items[dragIndex];
    const hoverItem = items[hoverIndex];
    newItems[hoverIndex] = dragItem;
    newItems[dragIndex] = hoverItem;
    updateItems(newItems);
  };

  const shuffleItems = () => {
    const newItems = items.slice(0);
    updateItems(shuffle(newItems));
  };

  return (
    <div>
      {React.cloneElement(props.children, {
        addItem,
        removeItem,
        checkItem,
        moveItem,
        shuffleItems,
        items,
      })}
    </div>
  );
};
