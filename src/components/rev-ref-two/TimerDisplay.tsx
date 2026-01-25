interface TimerDisplayProps {
  time: number;
}

function TimerDisplay({ time }: TimerDisplayProps) {
  return <h3 className="text-4xl">Timer: {time}</h3>;
}

export default TimerDisplay;
