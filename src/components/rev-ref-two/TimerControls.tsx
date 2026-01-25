import { useEffect, useRef } from "react";

interface TimerControlsPorps {
  isRunning: boolean;
  toggleTimer: () => void;
  resetTimer: () => void;
}

function TimerControls({
  isRunning,
  toggleTimer,
  resetTimer,
}: TimerControlsPorps) {
  const startBtnRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (startBtnRef.current) {
      startBtnRef.current.focus();
    }
  }, []);
  return (
    <div className="flex gap-4">
      <button
        className="btn w-fit focus:outline-0 focus:bg-green-700"
        onClick={toggleTimer}
        ref={startBtnRef}
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button className="btn w-fit" onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
}

export default TimerControls;
