import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextPage } from '../actions/gamesAction';
import styled from 'styled-components';
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Game from './Game';
import usePageAnim from './usePageAnim';
const GameList = ({ list }) => {
  const dispatch = useDispatch();
  const [[page, direction], setPage] = useState([0, 0]);
  //   const { isLoading } = useSelector((state) => state.games);
  //   const [page, direction, setPage] = usePageAnim();
  console.log(list.isLoading);
  const paginate = (newDirection) => {
    dispatch(nextPage(list, newDirection));
    setPage([page + newDirection, newDirection]);
    // setLoadPage(true);
  };
  console.log(page);
  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 1,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        transition: { duration: 0.3 },
      };
    },
  };
  return (
    <StyledList className='styled-list'>
      <figure>
        <FontAwesomeIcon
          onClick={list.prev ? () => paginate(-1) : null}
          icon={faAngleLeft}
          size='5x'
          className={list.prev ? 'active-btn' : ''}
        />
      </figure>
      <motion.div className='games-container'>
        <AnimatePresence
          initial={false}
          custom={direction}
          exitBeforeEnter={true}
        >
          {!list.isLoading && (
            <StyledGames
              key={list.title + page}
              variants={variants}
              custom={direction}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Loop games within list */}
              {list.games.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  key={game.id}
                  image={game.background_image}
                />
              ))}
            </StyledGames>
          )}
        </AnimatePresence>
      </motion.div>
      <figure>
        <FontAwesomeIcon
          onClick={list.next ? () => paginate(1) : null}
          icon={faAngleRight}
          size='5x'
          className={list.next ? 'active-btn' : ''}
        />
      </figure>
    </StyledList>
  );
};
const StyledList = styled(motion.div)`
  display: flex;
  margin: 5rem auto;
  justify-content: center;
  align-items: center;
  /* height: 70vh; */
  width: 100%;
  figure {
    display: none;
    @media (min-width: 768px) {
      padding: 0 2rem;
      display: block;
      z-index: 2;
    }
    svg {
      color: #383838;
    }
    .active-btn {
      cursor: pointer;
      color: #35bffe;
      transition: all 0.3s ease;
      opacity: 0.3;
      &:hover {
        opacity: 1;
        transform: scale(1.2);
      }
    }
  }

  .games-container {
    flex-basis: 80%;
    width: 100%;
    /* height: 70vh; */
    position: relative;
  }
`;
const StyledGames = styled(motion.div)`
  /* flex-basis: 80%; */
  /* position: absolute; */
  top: 0;
  left: 0;
  display: grid;
  /* grid-template-columns: repeat(5, minmax(180px, 1fr)); */
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(180px, 1fr));
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, minmax(180px, 1fr));
  }
`;
export default GameList;
