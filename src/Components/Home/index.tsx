import './style.css';

import { useLocation } from 'react-router-dom';

export const Home = () => {
  const { state }: { state: string } = useLocation();

  return (
    <div>
      <h1>home</h1>
      <p>{state}</p>
    </div>
  );
};
