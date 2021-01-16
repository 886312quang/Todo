import React, { memo } from "react";
import Todo from "./ToDo";

const TodoList = memo((props) => {
  const { toDoList, isCheckAll, checkAll } = props;

  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox"
        checked={isCheckAll}
      />
      <label htmlFor="toggle-all" onClick={checkAll}></label>
      <ul className="todo-list">
        {toDoList.map((todo, index) => (
          <Todo key={index} {...{ todo }} {...props} index={index} />
        ))}
      </ul>
    </section>
  );
});

export default TodoList;
