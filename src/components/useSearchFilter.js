import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useSearchFilter = () => {
  const history = useHistory();
  const states = useSelector((state) => state.filters);
  const [genres, setGenres] = useState('');
  // const [sortBy, setSortBy] = useState('');
  // const [pageSize, setPageSize] = useState(`&page_size=10`);
  // const [platforms, setPlatforms] = useState('');
  // const [dates, setDates] = useState('&dates=2010-01-01,2022-01-01');
  // const [publishers, setPublishers] = useState('initialState');
  // const [metacritic, setMetacritic] = useState('initialState');
  const [queryState, setQueryState] = useState('');
  // const [currentPage, setCurrentPage] = useState('');

  const genreQuery = (genre) => setGenres(`&genres=${genre}`);
  // const sortQuery = (sort) => setSortBy(sort);
  // const pageSizeQuery = (val) => setPageSize(val);
  // const platformsQuery = (val) => setPlatforms(val);
  // const datesQuery = (val) => setDates(val);
  // const publishersQuery = (val) => setPublishers(val);
  // const metacriticQuery = (critic) => setMetacritic(critic);
  // const pageQuery = (page) => setCurrentPage(`&page=${page}`);
  const queryHandler = (queries) => setQueryState(queries);

  useEffect(() => {
    let q = '';
    for (const [key, value] of Object.entries(states)) {
      if (key == 'genres' && !/\d/.test(value)) continue;
      q += value;
    }

    queryHandler(q);
  }, [states]);

  useEffect(() => {
    history.push('/browse?' + queryState);
  }, [queryState]);
  return {
    // // queryState,
    // genres,
    // genreQuery,
    // sortQuery,
    // pageSizeQuery,
    // platformsQuery,
    // datesQuery,
    // publishersQuery,
    // metacriticQuery,
    // pageQuery,
    queryState,
  };
};

export default useSearchFilter;
