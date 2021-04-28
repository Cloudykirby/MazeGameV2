import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useState } from "react";
import Maze from "./Component/Maze";

function App() {
  const [difficulty, setDifficulty] = useState("Easy");
  const handleChange = (e) => {
    setDifficulty(e.target.value);
  };
  const handleClick = () => {
    console.log(difficulty);
  };
  return (
    <div className="App">
      <h1 className="heading">Play Game</h1>
      <p>Choose your difficulty</p>
      <select
        className="difficulty_setting"
        name="difficulty"
        id="settings"
        onChange={handleChange}
      >
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
        <option value="Hell">Hell</option>
      </select>
      <button>Play Game</button>
    </div>
  );
}

export default App;
