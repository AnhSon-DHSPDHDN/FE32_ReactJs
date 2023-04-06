import React, { useEffect, useState } from "react";
import taskApi from "../../apis/taskApi";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
import InputTask from "../../components/InputTask";
import Task from "../../components/Task";
import "./TodoListLayout.scss"

const TodoListLayout = () => {
  const [taskList, setTaskList] = useState([])
  const [inputTask, setInputTask] = useState("")

  useEffect(() => {
    handleFetchTaskList()
  }, [])

  const handleFetchTaskList = async () => {
    const data = await taskApi.getAllTask()
    setTaskList(data)
  }

  const renderTaskList = (tasks) => {
    if (tasks.length === 0) {
      return <div>No task. please input your task!</div>
    }

    return tasks.map(task => {
      return <Task
        task={task}
        key={task.id}
        handleDeleteTask={handleDeleteTask}
        handleMakeDoneTask={handleMakeDoneTask}
      />
    })
  }

  const handleChangeInputTask = (event) => {
    setInputTask(event.target.value)
  }

  const handleAddTask = async () => {
    if (inputTask === "") return

    const task = {
      taskName: inputTask,
      isDone: false,
      createAt: new Date().getTime()
    }

    await taskApi.addTask(task)
    await handleFetchTaskList()
    setInputTask("")
  }

  const handleDeleteTask = async (id) => {
    await taskApi.deleteTaskById(id)
    await handleFetchTaskList()
  }

  const handleMakeDoneTask = async (id) => {
    const currentTask = await taskApi.getTaskById(id)
    await taskApi.updateTaskById(id, {
      ...currentTask,
      isDone: true
    })
    await handleFetchTaskList()
  }

  return <div className="todo-layout-wrapper">
    <h2 className="todo-list-title">TODO LIST APP</h2>
    <div className="add-task-wrapper">
      <InputTask
        placeholder="Please input task name ..."
        onChange={handleChangeInputTask}
        value={inputTask}
      />
      <Button
        label="Add Task"
        customClass="btn-add-task"
        onClick={handleAddTask}
      />
    </div>
    <Divider customClass="mt-1" />
    <div>
      {renderTaskList(taskList)}
    </div>
  </div>;
};

export default TodoListLayout;
