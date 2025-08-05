import React, { useEffect, useReducer, useRef } from "react";
const SAVE = "save";
const RESET = "reset";
const UPDATE_EMAIL = "email";
const UPDATE_NAME = "name";
const UPDATE_PWD = "pwd";
const valideteEmail = (email) => {
  if (email.trim() !== "" && email.length > 14 && email.includes("@")) {
    return true;
  }
};
const valideteName = (name) => {
  if (name.trim() !== "" && name.length > 4) {
    return true;
  }
};
const validetePwd = (pwd) => {
  if (pwd.trim() !== "" && pwd.length > 5) {
    return true;
  }
};
const handleform = (state) => {
  return state.name &&
    state.email &&
    state.pwd &&
    !state.name_err &&
    !state.email_err &&
    !state.pwd_err
    ? `Hello ${state.name}, your email is: ${state.email} and pwd is: ${state.pwd}`
    : "please fill all inform";
};
const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.value,
        name_err: valideteName(action.value) ? "" : "please enter valid name",
      };

    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.value,
        email_err: valideteEmail(action.value)
          ? ""
          : "please enter valid email",
      };

    case UPDATE_PWD:
      return {
        ...state,
        pwd: action.value,
        pwd_err: validetePwd(action.value) ? "" : "please enter valid pwd",
      };

    case SAVE:
      return {
        ...state,
        msg: handleform(state),
      };
    case RESET:
      return {
        name: "",
        email: "",
        pwd: "",
        name_err: "",
        email_err: "",
        pwd_err: "",
        msg: "",
      };

    default:
      return state;
  }
};
const UseReducer = () => {
  const inpElm = useRef(null);
  useEffect(() => {
    inpElm.current.focus();
  }, []);
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    pwd: "",
    name_err: "",
    email_err: "",
    pwd_err: "",
    msg: "",
  });
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Form State Manager
      </h2>
      {state.msg && (
        <p className="mt-4 p-2 bg-green-100 text-green-700 rounded">
          {state.msg}
        </p>
      )}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
          Name
        </label>
        <input
          ref={inpElm}
          onChange={(e) =>
            dispatch({ type: UPDATE_NAME, value: e.target.value })
          }
          id="name"
          type="text"
          value={state.name}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Enter your name"
        />
        <p className="text-red-500 text-sm">{state.name_err}</p>
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input
          onChange={(e) =>
            dispatch({ type: UPDATE_EMAIL, value: e.target.value })
          }
          id="email"
          type="email"
          value={state.email}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Enter your email"
        />
        <p className="text-red-500 text-sm">{state.email_err}</p>
      </div>

      {/* Password Field */}
      <div className="mb-6">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          onChange={(e) =>
            dispatch({ type: UPDATE_PWD, value: e.target.value })
          }
          id="password"
          value={state.pwd}
          type="password"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Enter your password"
        />
        <p className="text-red-500 text-sm">{state.pwd_err}</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: SAVE });
          }}
          type="button"
          className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Save
        </button>
        <button
          onClick={() => dispatch({ type: RESET })}
          type="button"
          className="flex-1 bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
