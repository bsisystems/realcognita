import React, { useState, useEffect } from "react";

function TodoList() {
  const [item, setItem] = useState("");
  const [todo, setTodos] = useState(JSON.parse(localStorage.getItem("ITEMS")));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (item !== "") {
      setTodos((currentTodos) => {
        return [
          ...currentTodos,
          { id: crypto.randomUUID(), item: item, completed: false },
        ];
      });
      setItem("");
    }
  };

  const handleDelete = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((item) => {
        return item.id !== id;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todo));
  }, [todo]);

  return (
    <div className="p-5 w-96 bg-slate-950 ">
      <form className="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="item" className="text-2xl font-bold text-white">
            New Item
          </label>
          <input
            type="text"
            id="item"
            className="rounded-sm "
            value={item}
            onChange={(e) => setItem(e.target.value)}
            autoFocus
          />

          <button>Add</button>
        </div>
      </form>

      <h1 className="text-4xl text-white font-semibold">Todo List</h1>
      <ul className="text-white list-item ml-4 space-y-2">
        {todo.map((item) => {
          return (
            <li key={item.id} className="flex gap-2 items-center">
              <input type="checkbox" value={item.completed} />
              <label htmlFor={item.id}> {item.item}</label>
              <button
                className="rounded-sm border-2 border-red-500 px-1.5 text-red-500"
                onClick={(e) => handleDelete(item.id)}
              >
                DELETE
              </button>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
