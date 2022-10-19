import React from 'react';
import Task from './Task';

const Tasks = ({ onDelete, onToggle }) => {

  const tasks = useSelector((state) => state.tasks);
    
  return (
    <>
        {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
        ))}
    </>
  )
}

export default Tasks;