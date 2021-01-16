import React, { memo } from "react";

const ToDo = memo((props) => {
  const { todo, editById, markCompleted, removeToDo } = props;

  return (
    <li>
      <div className="view">
        <svg width="0" height="0" viewBox="0 0 0 0" className="todo-sgv">
          <defs>
            <linearGradient
              id="boxGradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="0"
              x2="25"
              y2="25"
            >
              <stop offset="0%" stopColor="#27FDC7" />
              <stop offset="100%" stopColor="#0FC0F5" />
            </linearGradient>

            <linearGradient id="lineGradient">
              <stop offset="0%" stopColor="#0FC0F5" />
              <stop offset="100%" stopColor="#27FDC7" />
            </linearGradient>

            <path
              id="todo__line"
              stroke="url(#lineGradient)"
              d="M21 12.3h168v0.1z"
            ></path>
            <path
              id="todo__box"
              stroke="url(#boxGradient)"
              d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"
            ></path>
            <path
              id="todo__check"
              stroke="url(#boxGradient)"
              d="M10 13l2 2 5-5"
            ></path>
            <circle id="todo__circle" cx="13.5" cy="12.5" r="10"></circle>
          </defs>
        </svg>
        <div className="todo-list">
          <label className="todo">
            <input
              className="todo__state"
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => markCompleted(todo.id)}
            />

            <svg viewBox="0 0 200 25" className="todo__icon">
              <use xlinkHref="#todo__line" className="todo__line"></use>
              <use xlinkHref="#todo__box" className="todo__box"></use>
              <use xlinkHref="#todo__check" className="todo__check"></use>
              <use xlinkHref="#todo__circle" className="todo__circle"></use>
            </svg>
            <label
              className="todo__text"
              onDoubleClick={() => editById(todo.id)}
            >
              {todo.text}
            </label>
            <button
              className="destroy"
              onClick={() => removeToDo(todo.id)}
            ></button>
          </label>
        </div>
      </div>
    </li>
  );
});

export default ToDo;
