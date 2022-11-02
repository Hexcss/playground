import React, { useState } from 'react';
import './App.css';

function App() {

  const [people, setPeople] = useState([
    {
      name: "Lebron James",
      url: "",
      age: 36,
      note: "Allergic to peanut",
    },
    {
      name: "Kobe Bryant",
      url: "",
      age: 26,
    },
]);

  people.map(person => {
    person.name = "Javier"
  })

  return (
    <div className="App">
      <h1>People Invited To My Party</h1>
    </div>
  );
}

export default App;
