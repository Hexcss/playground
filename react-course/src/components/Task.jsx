import React from 'react';
import { FaTimes } from "react-icons/fa"

const Task = ({ task }) => {

  const onDelete = useSelector((state) => state.tasks);
  const onToggle= useSelector((state) => state.tasks);

  return (
    <div className={task.reminder ? "task reminder" : "task"} onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.text} <FaTimes style={{ color: "red", cursor: "pointer"}} onClick={() => onDelete(task.id)}/></h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task;