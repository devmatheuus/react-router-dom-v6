import './style.css';

import { Outlet, useParams, useSearchParams } from 'react-router-dom';

export const Posts = () => {
  const { id } = useParams();

  const [queryState, setQueryState] = useSearchParams();

  return (
    <div>
      <h1>
        Post id: {id && id} QS:{queryState && queryState.get('page')}
      </h1>
      <Outlet />
    </div>
  );
};
