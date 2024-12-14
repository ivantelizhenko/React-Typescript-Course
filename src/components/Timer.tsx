import { useEffect, useRef, useState } from 'react';
import { Timer as TimerProps } from '../store/timersContextTypes.ts';
import Container from './UI/Container.tsx';
import { useTimers } from '../store/timersContext.tsx';

export default function Timer({ name, duration, id }: TimerProps) {
  const interval = useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = useState<number>(duration * 1000);
  const { isRunning, removeTimer } = useTimers();

  useEffect(() => {
    if (!isRunning && interval.current) return clearInterval(interval.current);

    interval.current = setInterval(
      () =>
        setRemainingTime(curTime => (curTime <= 0 ? curTime : curTime - 50)),
      50
    );

    if (remainingTime <= 0) removeTimer(id);

    return () => clearInterval(interval.current as number);
  }, [isRunning, remainingTime, removeTimer, id]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
