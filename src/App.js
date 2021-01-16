import React, { PureComponent } from "react";
import Header from "./Component/Header";
import TodoList from "./Component/ToDoList";
import actions from "./_actions/task";

// CSS
import "./styles.css";
import "./Component/CSS/styles.css";
import Footer from "./Component/Footer";

const isNotCheckAll = (todos = []) => {
  let check = filterStatus(todos, "ACTIVE");
  if (check.length === 0) {
    return false;
  }
  return true;
};

const filterStatus = (todos = [], status = "", id = "") => {
  switch (status) {
    case "ACTIVE":
      return todos.filter((todo) => !todo.isComplete);
    case "COMPLETED":
      return todos.filter((todo) => todo.isComplete);
    case "REMOVE":
      return todos.filter((todo) => todo.id !== id);
    default:
      return todos;
  }
};

class App extends PureComponent {
  state = {
    list: [],
    toDoEditById: "",
    isCheckAll: false,
    status: "ALL"
  };

  async componentWillMount() {
    const listTask = await actions.getListTask();
    const check = !isNotCheckAll(listTask);
    this.setState({
      list: listTask,
      isCheckAll: check
    });
  }

  checkAll = () => {
    const { list, isCheckAll } = this.state;
    const data = { status: !isCheckAll };
    actions.checkAll(data);
    this.setState((preState) => ({
      list: list.map((todo) => ({ ...todo, isComplete: !isCheckAll })),
      isCheckAll: !preState.isCheckAll
    }));
  };

  setStatusFilter = (status = "") => {
    this.setState({
      status
    });
  };

  // onEditById = async (todo = {}, index = -1) => {
  //   if (index >= 0) {
  //     const { list: l } = this.state;
  //     l.splice(index, 1, todo);
  //     this.setState({ list: l, toDoEditById: "" });
  //     await actions.editTask(todo);
  //   }
  // };

  markCompleted = async (id = "") => {
    const { list } = this.state;
    let data = { id };
    const updatedList = list.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    this.setState((preState) => ({
      list: updatedList,
      isCheckAll: !isNotCheckAll(updatedList)
    }));
    await actions.markComplete(data);
    console.log(this.state.isCheckAll);
  };

  addToDo = (todo = {}) => {
    this.setState((preState) => ({
      list: [...preState.list, todo],
      isCheckAll: false
    }));
  };

  // editById = (id = "") => {
  //   this.setState({ toDoEditById: id });
  // };

  clearCompleted = async () => {
    const { list } = this.state;
    this.setState({
      list: filterStatus(list, "ACTIVE")
    });
    await actions.clearComplete();
  };

  removeToDo = async (id = "") => {
    const { list } = this.state;
    this.setState({
      list: filterStatus(list, "REMOVE", id)
    });
    await actions.deleteTask(id);
  };

  render() {
    const { list, toDoEditById, isCheckAll, status } = this.state;
    return (
      <div className="todoapp">
        <Header addToDo={this.addToDo} isCheckAll={isCheckAll} />
        <TodoList
          toDoList={filterStatus(list, status)}
          // editById={this.editById}
          // toDoEditById={toDoEditById}
          // onEditById={this.onEditById}
          markCompleted={this.markCompleted}
          isCheckAll={isCheckAll}
          checkAll={this.checkAll}
          removeToDo={this.removeToDo}
        />
        <Footer
          status={status}
          setStatusFilter={this.setStatusFilter}
          clearCompleted={this.clearCompleted}
          countItemLeft={filterStatus(list, "ACTIVE").length}
          countItem={list.length}
        />
      </div>
    );
  }
}

export default App;
