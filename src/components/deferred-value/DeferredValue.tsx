import { Suspense, useState } from "react";
import DeferredValueList from "./DeferredValueList";

function DeferredValue() {
  const [input, setInput] = useState<string>("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="input"
      />

      <DeferredValueList input={input} />
    </div>
  );
}

export default DeferredValue;
