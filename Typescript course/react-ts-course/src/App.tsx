import React, { useState } from 'react';
import './App.css';

function App() {

  interface IState {
    people: {
      name: string,
      age: number,
      url: string,
      note?: string,
    }[]
  }

  const [people, setPeople] = useState<IState["people"]>([]);

  return (
    <div className="App">
      <h1>People Invited To My Party</h1>
    </div>
  );
}

export default App;
