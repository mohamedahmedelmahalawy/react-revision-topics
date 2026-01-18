import { useState } from "react";
import Board from "./Board";

export type Squares = Array<string | null>;

function TikTakToe() {
  const [history, setHistory] = useState<Array<Squares>>([Array(9).fill(null)]);
  const [currMove, setCurrMove] = useState<number>(0);
  const currentSquares = history[currMove];
  const isNext = currMove % 2 === 0;
  const playHandler = (nextSquares: Squares) => {
    const nextHistory = [...history.slice(0, currMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrMove(nextHistory.length - 1);
  };
  const jumpTo = (nextMove: number) => {
    setCurrMove(nextMove);
  };
  return (
    <div className="flex ">
      <div>
        <Board isNext={isNext} squares={currentSquares} onPlay={playHandler} />
      </div>
      <div className="flex flex-col gap-3">
        {history.map((move, index) => {
          return (
            <button
              key={index}
              onClick={() => jumpTo(index)}
              className="bg-amber-300 text-black font-semibold px-6 py-2 rounded-2xl"
            >
              {index > 0 ? `Go to # ${index}` : "Go to Start"}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TikTakToe;
