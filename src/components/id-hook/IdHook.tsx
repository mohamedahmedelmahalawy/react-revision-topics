import React, { useId } from "react";

function IdHook() {
  const id = useId();
  const two = useId();
  const three = useId();
  const four = useId();
  console.log("2:", two, "3:", three, "4:", four);
  return (
    <div>
      <h2 id={id}>One</h2>
    </div>
  );
}

export default IdHook;
