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
  }, [genres, platforms, stores]);

  //active filter handler

  return (
    <motion.div>
      <StyledSidebar>
        <button className='showFilter' onClick={() => setShowSidebar(false)}>
          <FontAwesomeIcon icon={faTimesCircle} size='1x' />
          Close filters
        </button>
        <div className='genre-title'>
          <h3>Filters</h3>
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
  background: rgba(7, 3, 43, 0.9);
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
    color: #35bffe;
    margin: 1rem;
    display: flex;
    align-items: center;
    opacity: 0.8;
    cursor: pointer;
    svg {
      font-size: 2rem;
      margin-right: 0.5rem;
    }
    @media (min-width: 992px) {
      display: none;
    }
  }
  .genre-title {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    margin: 0 auto;
    @media (min-width: 992px) {
      flex-direction: column;
      margin-bottom: 1rem;
      /* padding: 2rem; */
    }
    h3 {
      color: white;
      font-size: 1rem;
      user-select: none;
      /* align-self: flex-start; */
      align-self: center;
      /* padding: 0 2rem 2rem; */
      @media (min-width: 992px) {
        align-self: flex-start;
        font-size: 1.2rem;
      }
    }
  }
`;

export default Sidebar;
