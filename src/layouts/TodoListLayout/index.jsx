import React from "react";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
import InputTask from "../../components/InputTask";
import Task from "../../components/Task";
import "./TodoListLayout.scss"

const mockData = [
  {
    id: 1,
    taskName: "hihi",
    isDone: false
  },
  {
    id: 2,
    taskName: "haha",
    isDone: true
  },
  {
    id: 3,
    taskName: "hoho",
    isDone: false
  }
]

const TodoListLayout = () => {
  return <div className="todo-layout-wrapper">
    <h2 className="todo-list-title">TODO LIST APP</h2>
    <div className="add-task-wrapper">
      <InputTask placeholder="Please input task name ..." />
      <Button label="Add Task" customClass="btn-add-task" />
    </div>
    <Divider customClass="mt-1" />
    <div>
      {mockData.map(task => (<Task
        key={task.id}
        task={task}
      />))}
    </div>
  </div>;
};

export default TodoListLayout;
