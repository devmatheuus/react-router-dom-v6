import './style.css';

import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Redirect = () => {
  const [time, setTime] = useState(3);

  const timeOut = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    timeOut.current = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);

    if (time <= 0) {
      navigate('/', {
        replace: true,
        state: `this is the state ${Math.random()}`,
      });
    }

    return () => {
      clearTimeout(timeOut.current);
    };
  }, [time]);

  return (
    <div>
      <h1>Get out of here in {time}</h1>
    </div>
  );
};
