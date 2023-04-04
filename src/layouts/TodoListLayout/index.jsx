import React, { useEffect, useState } from "react";
import taskApi from "../../apis/taskApi";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
import InputTask from "../../components/InputTask";
import Task from "../../components/Task";
import { KEY_TASK_LIST } from "../../constants/common";
import { makeRandomId } from "../../utils";
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

  const handleAddTask = () => {
    if (inputTask === "") return

    const task = {
      id: makeRandomId(),
      taskName: inputTask,
      isDone: false
    }
    setTaskList([task, ...taskList])
    setInputTask("")
    localStorage.setItem(KEY_TASK_LIST, JSON.stringify([task, ...taskList]))
  }

  const handleDeleteTask = (id) => {
    const taskListClone = taskList.filter(task => task.id !== id)
    setTaskList(taskListClone)
    localStorage.setItem(KEY_TASK_LIST, JSON.stringify(taskListClone))
  }

  const handleMakeDoneTask = (id) => {
    const existedTaskIndex = taskList.findIndex(task => task.id === id)
    const taskListClone = [...taskList]
    taskListClone[existedTaskIndex] = {
      ...taskListClone[existedTaskIndex],
      isDone: true
    }
    setTaskList(taskListClone)
    localStorage.setItem(KEY_TASK_LIST, JSON.stringify(taskListClone))
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
