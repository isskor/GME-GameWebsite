import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames, nextPage } from '../actions/gamesAction';
import { useLocation } from 'react-router-dom';
// Styling and Animation
import styled from 'styled-components';
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion';

// Components
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';

import HomeBackground from '../components/HomeBackground';
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

  const gamePage = (gameList, direction) => {
    dispatch(nextPage(gameList, direction));
  };

  return (
    <>
      <HomeBackground backgroundGames={showcaseGames} />
      <StyledGamesContainer className='App'>
        <AnimateSharedLayout type='crossfade'>
          <AnimatePresence>
            {pathId && <GameDetail pathId={pathId} />}
          </AnimatePresence>
          {/* loop games List */}
          {gameLists.map((list) => (
            <div key={list.title}>
              <h2>{list.title}</h2>
              <StyledList className='styled-list'>
                <figure>
                  {list.prev ? (
                    <button
                      onClick={() => gamePage(list, 'prev')}
                      disabled={!list.prev}
                    >
                      Arrow
                    </button>
                  ) : (
                    'disabled'
                  )}
                </figure>
                <StyledGamesList>
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
                </StyledGamesList>
                <figure onClick={() => gamePage(list, 'next')}>Arrow</figure>
              </StyledList>
            </div>
          ))}
        </AnimateSharedLayout>
      </StyledGamesContainer>
    </>
  );
};
const StyledGamesContainer = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const StyledGamesList = styled(motion.div)`
  flex-basis: 90%;
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(5, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

const StyledList = styled.div`
  display: flex;
`;

export default Home;
