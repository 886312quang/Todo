import React, { memo, useState } from "react";
import actions from "./../_actions/task";

const Header = memo((props) => {
  const [text, setText] = useState("");
  const { addToDo, isCheckAll } = props;
  const onAddToDo = (e) => {
    if (e.key === "Enter" && text) {
      let data = { id: new Date().valueOf(), text, isComplete: false };

      addToDo(data);
      setText("");

      actions.addTask(data);
    }
  };

  return (
    <div className="header">
      <h1>To do</h1>
      <input
        className="new-todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => onAddToDo(e)}
        checked={isCheckAll}
      />
    </div>
  );
});

export default Header;
