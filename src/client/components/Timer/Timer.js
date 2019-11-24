import React, { useState, useContext, useEffect } from 'react';

import Context from '../../context/context';

export default function Timer() {
  const { isRunning } = useContext(Context);
  const [runningTime, setRunningTime] = useState(0);

  useEffect(() => {
    let intv;

    if (isRunning) {
      const startTime = Date.now() - runningTime;
      // # adjust running time
      intv = setInterval(() => {
        setRunningTime(Date.now() - startTime);
      });
    }

    return () => clearInterval(intv);
  }, [isRunning]);

  return (
    <div className="timer">
      {runningTime}
      ms
    </div>
  );
}
