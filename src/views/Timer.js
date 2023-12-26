import React, { useState, useCallback, useRef } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);

  const timer = useRef(null);

  const handleStart = useCallback(() => {
    timer.current = window.setInterval(() => {
      setTime((time) => time + 1);
    }, 100);
  }, []);

  const handlePause = useCallback(() => {
    window.clearInterval(timer.current);
    timer.current = null;
  }, []);

  const handleReset = useCallback(() => {
    window.clearInterval(timer.current);
    timer.current = null;
    setTime(0);
  }, []);

  return (
    <>
      {time / 10} seconds
      <br />
      <button onClick={handleStart}>start</button>
      <button onClick={handlePause}>pause</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
}
