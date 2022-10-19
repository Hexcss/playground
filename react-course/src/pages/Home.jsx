import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { Tasks, AddTask, Footer } from "../components/index";

const Home = ({ showAddTask, addTask, deleteTask, toggleReminder }) => {

  const tasks = useSelector((state) => state.tasks);

  console.log(tasks);

  return (
    <div>
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "Create a Task"}
        <Footer/>
    </div>
  )
}

export default Home