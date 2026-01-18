import { useState } from "react";
import RevCallbackChild from "../rev-callback-child/RevCallbackChild";

const people = ["jack", "Mark", "Jennifer", "Ashly", "Thena", "Zaxk"];

function RevCallback() {
  const [count, setCount] = useState<number>(0);
  const [names, setNames] = useState<string[]>(people);

  const searchHandler = (search: string) => {
    const filterdNames = people.filter((name) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
    setNames(filterdNames);
  };
  return (
    <div>
      <div onClick={() => setCount((curr) => curr + 1)} className="btn w-fit">
        Re-render {count}
      </div>

      <RevCallbackChild searchHandler={searchHandler} />
      <div>
        {names.map((n: string) => (
          <h3 key={n}>{n}</h3>
        ))}
      </div>
    </div>
  );
}

export default RevCallback;
