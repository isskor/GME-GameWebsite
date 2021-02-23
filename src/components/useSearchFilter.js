import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useSearchFilter = () => {
  const history = useHistory();
  const states = useSelector((state) => state.filters);

  const [queryState, setQueryState] = useState('');

  const queryHandler = (queries) => setQueryState(queries);
  console.log('usesearch filter ran');
  useEffect(() => {
    let q = '';
    for (const [key, value] of Object.entries(states)) {
      if (key === 'genres' && !/\d/.test(value)) continue;
      if (key === 'platforms' && !/\d/.test(value)) continue;
      if (key === 'stores' && !/\d/.test(value)) continue;
      q += value;
    }

    queryHandler(q);
  }, [states]);

  useEffect(() => {
    history.push('/browse?' + queryState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryState]);
  return {
    queryState,
  };
};

export default useSearchFilter;
