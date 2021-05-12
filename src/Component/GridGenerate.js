const genMaze = function Maze(integer) {
  var height = integer;
  var width = integer;
  let mazeMap = new Array(height);
  for (let y = 0; y < height; y++) {
    mazeMap[y] = new Array(width);
  }
  return mazeMap;
};

export default genMaze;
