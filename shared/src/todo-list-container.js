import React, { useState } from "react";

let fakeUniqueId = 0;
function getUniqueId() {
	fakeUniqueId++;
	return fakeUniqueId;
}

export const TodoListContainer = props => {
	const [items, updateItems] = useState([
		{
			label: "Eat",
			checked: true,
			id: getUniqueId()
		},
		{
			label: "Sleep",
			checked: true,
			id: getUniqueId()
		},
		{
			label: "Die",
			checked: false,
			id: getUniqueId()
		}
	]);

	const addItem = label => {
		updateItems([...items, { label, id: getUniqueId(), checked: false }]);
	};

	const checkItem = id => {
		const index = items.findIndex(item => item.id == id);
		const newItems = items.slice(0);
		newItems[index].checked = !items[index].checked;
		updateItems(newItems);
	};

	const removeItem = id => {
		updateItems(items.filter(item => item.id !== id));
	};

	return (
		<div>
			{React.cloneElement(props.children, {
				addItem,
				removeItem,
				checkItem,
				items
			})}
		</div>
	);
};
