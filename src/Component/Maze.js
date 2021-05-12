import React from "react";
import genMaze from "./GridGenerate";
import "./Maze.css";

function Maze(props) {
  let diffDim = {
    Easy: 5,
    Medium: 10,
    Hard: 15,
    Hell: 20,
  };
  let diff = props.difficulty;
  let maxHeight = diffDim[diff];
  let grid = genMaze(maxHeight);
  console.log(grid);

  return (
    <div className="grid">
      {grid.map((row) => {
        return (
          <div>
            {row.map((node) => {
              return <p>1</p>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Maze;
