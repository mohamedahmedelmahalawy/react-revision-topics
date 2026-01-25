import { useEffect, useRef, useState } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";

function RevRefTwo() {
  const [time, setTime] = useState<number>(() => {
    const localTime = localStorage.getItem("timer");
    return localTime ? JSON.parse(localTime) : 0;
  });
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    localStorage.setItem("timer", JSON.stringify(time));
  }, [time]);

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current as number);
      timerRef.current = null;
    } else {
      timerRef.current = setInterval(() => {
        setTime((curr) => curr + 1);
      }, 1000);
    }

    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current as number);
    timerRef.current = null;
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <TimerDisplay time={time} />
      <TimerControls
        isRunning={isRunning}
        toggleTimer={toggleTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
}

export default RevRefTwo;
