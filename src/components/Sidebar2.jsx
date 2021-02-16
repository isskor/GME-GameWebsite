import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  filterGenres,
  clearAllFilters,
  resetPageNumber,
} from '../actions/searchAction';

import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
const Sidebar = ({ searchInput, setGenrePath, genrePath }) => {
  const { genres } = useSelector((state) => state.games);

  const dispatch = useDispatch();
  const genreList = genres.map((genre) => {
    return {
      ...genre,
      active: false,
    };
  });
  genreList.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    return 1;
  });
  const [genresState, setGenresState] = useState(genreList);

  const history = useHistory();

  const activeGenreHandler = (genre) => {
    let newGenres = genresState.map((g) => {
      if (g === genre) {
        g.active = !g.active;
      }
      return g;
    });
    let newPath = newGenres
      .filter((item) => item.active)
      .map((filteredItem) => filteredItem.id);

    let activeGenre = newGenres
      .filter((g) => g.active)
      .sort((a, b) => (a.name < b.name ? -1 : 1));

    let notActiveGenre = newGenres
      .filter((g) => !g.active)
      .sort((a, b) => (a.name < b.name ? -1 : 1));

    // console.log(activeGenre, notActiveGenre);
    setGenresState([...activeGenre, ...notActiveGenre]);
    dispatch(filterGenres(newPath));
  };

  useEffect(() => {
    setGenresState(genreList);
  }, [genres]);

  const clearActiveHandler = () => {
    setGenresState(genreList);
    setGenrePath([]);
    dispatch(clearAllFilters());
    dispatch(resetPageNumber(1));
    history.push('/browse');
  };

  return (
    <motion.div>
      <StyledSidebar>
        <div className='genre-title'>
          <h3>Genres</h3>
          <button onClick={clearActiveHandler}>Clear All</button>
        </div>

        {genresState.map((genre) => (
          <motion.li
            onClick={() => activeGenreHandler(genre)}
            className={genre.active ? 'active' : ''}
            key={genre.id}
          >
            <a>{genre.name}</a>
          </motion.li>
        ))}
      </StyledSidebar>
    </motion.div>
  );
};

const StyledSidebar = styled(motion.ul)`
  color: white;
  background: #161139;
  list-style: none;
  border-radius: 4px;
  padding: 1rem 0;

  .genre-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem auto 2rem;
    h3 {
      color: white;
      font-size: 1.5rem;
      align-self: flex-start;
      padding: 0 2rem 2rem;
    }
    button {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      font-weight: bold;
      border-radius: 4px;
      border: none;
      outline: none;
      cursor: pointer;
      background-color: #35bffe;
      transition: all 0.3s ease;
      &:hover {
        box-shadow: 0px 5px 20px #35bffe;
      }
    }
  }

  li {
    position: relative;
    transition: all 0.1s ease;
    ::after {
      content: '';
      position: absolute;
      width: 80%;
      left: 10%;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    &:hover {
      border-left: 8px solid #35bffe;
      ::before {
        transition: all 0.3s ease;
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        width: 100%;
        height: 100%;
        box-shadow: -30px 0 30px rgba(28, 132, 252, 0.521);
      }
    }
    a {
      display: block;
      padding: 1rem 2rem;
      color: white;
    }
    &.active {
      border-left: 8px solid #35bffe;
      ::before {
        transition: all 0.3s ease;
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        width: 100%;
        height: 100%;
        box-shadow: -30px 0 30px rgba(28, 207, 252, 0.521);

        &:hover {
          box-shadow: -30px 0 30px rgba(252, 28, 233, 0.521);
        }
      }
      &:hover {
        border-left: 8px solid #fe3550;

        ::before {
          box-shadow: -30px 0 30px rgba(252, 28, 103, 0.521);
        }
      }
    }
  }
`;

export default Sidebar;
