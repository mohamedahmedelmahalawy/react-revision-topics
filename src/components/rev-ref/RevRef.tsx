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
      <button onClick={btnHandler} className="btn">
        Re-render
      </button>
      <div>
        <input ref={inputRef} type="text" className="input" />
      </div>
    </div>
  );
}

export default RevRef;
