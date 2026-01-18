interface SquareProps {
  value: string | null;
  clickHandler: () => void;
}
function Square({ value, clickHandler }: SquareProps) {
  return (
    <button className="square" onClick={clickHandler}>
      {value}
    </button>
  );
}

export default Square;
