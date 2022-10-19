import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header, Home, About} from "./components"
import './assets/scss/styles.scss';

const App = () => {

  //Redux

  //Not Redux

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]); 

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    
  getTasks();
    
  }, []);

  //Fetch Tasks Data
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json();

    //console.log(data)
  
    return data;
  }

 //Fetch Single Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json();

    return data;
  }

  //Add Task
  const addTask =  async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data]);
  };

  //Delete Task
  const deleteTask = async (id) => {

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = async (id) => {

    const taskToToggle = await fetchTask(id);
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder};

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })

    const data = await res.json();

    setTasks(
      tasks.map((task) => 
      task.id === id ? {...task, reminder: 
        data.reminder} : task
      )
    );
  }

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        <Routes>
          <Route path="/" element={<Home tasks={tasks} showAddTask={showAddTask} addTask={addTask} deleteTask={deleteTask} toggleReminder={toggleReminder}/>}/>
          <Route path="about" element={<About />} exact/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
