import {useEffect, useState} from 'react';

export type CortegeInterval = [number, (start?: number) => void]

export function useInterval(time: number): CortegeInterval {
  const [iteration, setSeconds] = useState(0);

  const reset = (start = 0) => setSeconds(() => start + 1);

  useEffect(() => {
    const timer = setTimeout(() => {
      reset(iteration)
    }, time);

    return () => clearTimeout(timer);
  }, [iteration, time]);

  return [
    iteration,
    reset,
  ]
}