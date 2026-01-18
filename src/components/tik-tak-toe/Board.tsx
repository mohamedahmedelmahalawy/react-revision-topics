import { calculateWinner, range } from "../functions/funcs";
import Square from "./Square";
import type { Squares } from "./TikTakToe";

interface BoardProps {
  isNext: boolean;
  squares: Squares;
  onPlay: (nextSquares: Array<string | null>) => void;
}

function Board({ isNext, squares, onPlay }: BoardProps) {
  let winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${isNext ? "X" : "O"}`;
  }

  const clickHandler = (i: number) => {
    if (squares[i] !== null || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    if (isNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  };

  return (
    <div className="flex flex-wrap w-25.5">
      {squares.map((s: string | null, index: number) => (
        <Square
          key={index}
          value={s}
          clickHandler={() => clickHandler(index)}
        />
      ))}
      {status && <h3>{status}</h3>}
    </div>
  );
}

export default Board;
