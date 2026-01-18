interface RevCallbackChildProps {
  searchHandler: (search: string) => void;
}

function RevCallbackChild({ searchHandler }: RevCallbackChildProps) {
  console.log("Child rendered");
  return (
    <input
      type="text"
      onChange={(e) => searchHandler(e.target.value)}
      className="input"
    />
  );
}

export default RevCallbackChild;
