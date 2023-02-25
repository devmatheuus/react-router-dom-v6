import './styles.css';

import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" state={'This is a state from HOME'}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/posts/10">Post 10</Link>
        </li>
        <li>
          <Link to="/redirect">Redirect</Link>
        </li>
      </ul>
    </nav>
  );
};
