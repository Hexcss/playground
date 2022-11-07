import { useState } from "react";

import "./App.css";
import { List, AddToList } from "./components";
import { IState } from "./interfaces";

const App = () => {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 35,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      img: "https://fullpresscoverage.com/wp-content/uploads/2020/01/101524695-457220551.jpg"
    }
  ])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList setPeople={setPeople} people={people}/>
    </div>
  );
}

export default App;
