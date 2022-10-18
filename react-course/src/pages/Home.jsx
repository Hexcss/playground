import React from 'react'

import { Tasks, AddTask, Footer } from "../components/index";

const Home = ({ showAddTask, tasks, addTask, deleteTask, toggleReminder }) => {
  return (
    <div>
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "Create a Task"}
        <Footer/>
    </div>
  )
}

export default Home