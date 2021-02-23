import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames, nextPage } from '../actions/gamesAction';
import { useLocation } from 'react-router-dom';
// font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
// Styling and Animation
import styled from 'styled-components';
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion';

// Components

import GameDetail from '../components/GameDetail';

import HomeBackground from '../components/HomeBackground';
import GameList from '../components/GameList';
import HeroSection from '../components/HeroSection';

const Home = () => {
  // get Current Location
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];

  //   Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames('hey'));
  }, [dispatch]);
  //   Get data from
  const {
    popularGames,
    upcomingGames,
    newGames,

    showcaseGames,
  } = useSelector((state) => state.games);
  const gameLists = [popularGames, upcomingGames, newGames];

  return (
    <>
      <StyledGamesContainer className='App'>
        <HomeBackground backgroundGames={showcaseGames} />
        <AnimateSharedLayout type='crossfade'>
          <AnimatePresence>
            {pathId && <GameDetail pathId={pathId} />}
          </AnimatePresence>
          <HeroSection />
          {/* loop games List */}
          {gameLists.map((list) => (
            <div className='listContainer' key={list.title}>
              <h2>{list.title}</h2>
              <div className='line'></div>
              <GameList list={list} />
            </div>
          ))}
        </AnimateSharedLayout>
      </StyledGamesContainer>
    </>
  );
};
const StyledGamesContainer = styled(motion.div)`
  @media (min-width: 992px) {
    padding: 0rem 5rem;
  }

  .listContainer {
    padding: 2rem 0;
    h2 {
      font-size: 2.5rem;
      position: relative;
      color: rgb(124, 124, 124);
      display: inline;
      margin-left: 10%;
      /* @media (min-width: 992px) {
        margin-left: 0;
      } */
      &::after {
        content: '';
        width: 50%;
        height: 5px;
        background-color: #35bffe;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
`;

export default Home;
