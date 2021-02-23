import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  filterGenres,
  filterPlatforms,
  filterStores,
} from '../actions/searchAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import FilterList from './FilterList';
import ClearFiltersButton from './ClearFiltersButton';
const Sidebar = ({ setShowSidebar }) => {
  const { platforms, genres, stores } = useSelector((state) => state.f);
  const [genresState, setGenresState] = useState([]);
  const [platformsState, setPlatformsState] = useState([]);
  const [storesState, setStoresState] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // initial state

  useEffect(() => {
    setGenresState(genres);
    setPlatformsState(platforms);
    setStoresState(stores);
    console.log('genrelist change');
  }, [genres, platforms, stores]);

  //active filter handler

  return (
    <motion.div>
      <StyledSidebar>
        <button className='showFilter' onClick={() => setShowSidebar(false)}>
          <FontAwesomeIcon icon={faTimesCircle} size='3x' />
          Close filters
        </button>
        <div className='genre-title'>
          <h3 layouId={'sidebar'}>Filters</h3>
          <ClearFiltersButton
            setGenresState={setGenresState}
            setPlatformsState={setPlatformsState}
          />
        </div>

        <FilterList
          listName='Genres'
          list={genresState}
          listStateSetter={setGenresState}
          listDispatch={filterGenres}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          index={1}
        />
        <FilterList
          listName='PlatForms'
          list={platformsState}
          listStateSetter={setPlatformsState}
          listDispatch={filterPlatforms}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          index={2}
        />
        <FilterList
          listName='Stores'
          list={storesState}
          listStateSetter={setStoresState}
          listDispatch={filterStores}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          index={3}
        />
      </StyledSidebar>
    </motion.div>
  );
};

const StyledSidebar = styled(motion.ul)`
  background: #06021b;
  /* background: transparent; */
  color: white;
  list-style: none;
  border-radius: 4px;
  /* padding: 1rem 0; */
  /* position: absolute; */
  height: 100%;
  transition: all 1s ease;
  .showFilter {
    background: transparent;
    border: none;
    outline: none;
    color: rgba(252, 28, 103, 0.7);
    margin: 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    @media (min-width: 992px) {
      display: none;
    }
  }
  .genre-title {
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    margin: 1rem auto;
    h3 {
      color: white;
      /* font-size: 1.5rem; */
      font-size: 1rem;
      /* align-self: flex-start; */
      align-self: center;
      /* padding: 0 2rem 2rem; */
    }
  }
`;

export default Sidebar;
