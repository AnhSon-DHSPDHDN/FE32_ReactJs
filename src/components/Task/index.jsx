import React from 'react';
import Button from '../Button';
import './Task.scss';

const Task = ({ task, handleMakeDoneTask, handleDeleteTask }) => {

  return (
    <div className='task-wrapper'>
      <span className={`task-item ${task?.isDone ? 'task-item--done' : ''}`}>
        {task?.taskName || ''}
      </span>
      <div className='task-group-btn'>
        {!task?.isDone && <Button label='Done' />}
        <Button label='Del' />
      </div>
    </div>
  )
}

export default Task
