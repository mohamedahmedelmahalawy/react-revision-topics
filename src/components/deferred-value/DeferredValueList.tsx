import { Suspense, useDeferredValue, useEffect } from "react";

interface DeferredValueListProps {
  input: string;
}

function DeferredValueList({ input }: DeferredValueListProps) {
  const deferredValue = useDeferredValue(input);
  const list = () => {
    const result = [];
    for (let i = 0; i < 20000; i++) {
      result.push(<p key={i}>{deferredValue}</p>);
    }
    return result;
  };
  useEffect(() => {
    console.log("Re-render after I finish DeferredValue");
  }, [deferredValue]);
  return (
    <div>
      {input !== deferredValue && (
        <div style={{ opacity: 0.5 }}>Updating...</div>
      )}
      {list()}
    </div>
  );
}

export default DeferredValueList;
