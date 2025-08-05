import React, { useEffect, useReducer, useState } from "react";
const ACTIONS = {
  add: "add",
  delete: "delete",
  mark_done: "mark_done",
  edit: "edit",
};

function getUID() {
  return Date.now().toString(36);
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.add:
      return [
        ...state,
        { id: getUID(), title: action.payload.title, completed: false },
      ];
    case ACTIONS.delete:
      return state.filter((todo) => todo.id !== action.payload.id);

    case ACTIONS.mark_done:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case ACTIONS.edit:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );

    default:
      return state;
  }
};

const UserReducer = () => {
  const [newTitle, setTitle] = useState("");
  const handleSubmit = () => {
    if (newTitle.trim() === "") return;
    dispatch({ type: ACTIONS.add, payload: { title: newTitle } });
    setTitle("");
  };
  const loadFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(reducer, [], loadFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Todo List</h2>

      <form className="flex gap-2 mb-6">
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          value={newTitle}
          placeholder="Enter a new todo"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          type="submit"
          className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
      </form>

      <ul className="space-y-3">
        {todos && todos.length > 0
          ? todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <input
                    onChange={() =>
                      dispatch({
                        type: ACTIONS.mark_done,
                        payload: { id: todo.id },
                      })
                    }
                    checked={todo.completed === true}
                    type="checkbox"
                    className="w-5 h-5"
                  />
                  {editId === todo.id ? (
                    <>
                      <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="border px-2 py-1 rounded"
                      />
                      <button
                        onClick={() => {
                          dispatch({
                            type: ACTIONS.edit,
                            payload: { id: todo.id, title: editTitle },
                          });
                          setEditId(null);
                          setEditTitle("");
                        }}
                        className="ml-2 text-blue-500 hover:text-blue-700"
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <span
                        className={` ${
                          todo.completed
                            ? "line-through text-red-500"
                            : "text-gray-800"
                        }`}
                      >
                        {todo.title}
                      </span>
                      <button
                        onClick={() => {
                          setEditId(todo.id);
                          setEditTitle(todo.title);
                        }}
                        className="ml-2 text-green-500 hover:text-green-700"
                      >
                        Edit
                      </button>
                    </>
                  )}
                </div>
                <button
                  onClick={() =>
                    dispatch({ type: ACTIONS.delete, payload: { id: todo.id } })
                  }
                  className="text-red-500 hover:text-red-700"
                >
                  ✕
                </button>
              </li>
            ))
          : "no tasks right now"}
      </ul>
    </div>
  );
};

export default UserReducer;
