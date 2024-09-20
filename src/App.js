import { useState } from "react";

const NUM_OF_ROWS = 3;
const NUM_OF_COLUMNS = 3;
const Square = ({ value, onSquareClicked }) => {
  //const [value, setValue] = useState(null);

  // const handleClick = () => {
  //   setValue("X");
  // };

  return (
    <button className="square" onClick={onSquareClicked}>
      {value}
    </button>
  );
};

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  };
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClicked={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClicked={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClicked={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClicked={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClicked={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClicked={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClicked={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClicked={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClicked={() => handleClick(8)} />
      </div>
    </>
  );
}
