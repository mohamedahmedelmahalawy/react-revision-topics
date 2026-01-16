import { useEffect, useRef, useState } from "react";

function RevRef() {
  const [state, setState] = useState(0);
  const myRef = useRef<HTMLHeadingElement>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current!.focus();
  }, [state]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      inputRef.current!.blur();
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [state]);

  console.log("myRef:", myRef.current);
  const btnHandler = () => {
    setState((curr) => curr + 1);
    let hexaColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    myRef.current!.style.color = hexaColor;
  };

  return (
    <div>
      <h1 ref={myRef}>Hi</h1>
      <button
        onClick={btnHandler}
        className="bg-blue-300 text-black font-semibold px-6 py-2 rounded"
      >
        Re-render
      </button>
      <div>
        <input
          ref={inputRef}
          type="text"
          className="bg-red-300  text-black p-2 font-medium"
        />
      </div>
    </div>
  );
}

export default RevRef;
