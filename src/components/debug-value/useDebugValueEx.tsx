import { useDebugValue, useState } from "react";

function slowLoad() {
  let sum: number[] = [];
  for (let i = 0; i < 30000; i++) {
    sum.push(i);
  }
  return sum;
}

function useDebugValueEx() {
  const [value, setValue] = useState("yes");
  //   useDebugValue(value);
  //   useDebugValue("No");
  useDebugValue(value, () => slowLoad());
  return <div>Done</div>;
}

export default useDebugValueEx;
