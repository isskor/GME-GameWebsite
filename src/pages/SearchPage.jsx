import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
import { useLocation } from 'react-router-dom';
// Styling and Animation
import styled from 'styled-components';
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion';

// Components
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
import Navbar from '../components/Navbar';
import Nav from '../components/Nav';
import GenreButtons from '../components/GenreButtons';
import Sidebar from '../components/Sidebar';
const SearchPage = () => {
  // get Current Location
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];

  //   Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames('hey'));
  }, [dispatch]);
  //   Get data from
  const genreList = () =>
    genres.map((g) => {
      return { name: g.name, id: g.id, active: false };
    });
  const { searched, genres } = useSelector((state) => state.games);
  const [activeGenre, setActiveGenre] = useState(genreList);

  const gamePage = (gameList, displayNumber) => {};
  const toggleGenreHandler = (index) => {
    let newGenres = activeGenre.map((g, i) => {
      if (i === index) {
        g.active = !g.active;
      }
      return g;
    });
    console.log(newGenres);
    setActiveGenre(newGenres);
  };

  return (
    <>
      <Nav />
      <StyledGenres className='genres'>
        {genres &&
          activeGenre.map((genre, i) => (
            <button
              genre={genre}
              onClick={() => toggleGenreHandler(i)}
              className={genre.active ? 'active' : ''}
            >
              {genre.name}
            </button>
          ))}
      </StyledGenres>
      <Sidebar />

      <StyledGamesContainer className='App'>
        <AnimateSharedLayout type='crossfade'>
          <AnimatePresence>
            {pathId && <GameDetail pathId={pathId} />}
          </AnimatePresence>
          {searched.length > 0 && (
            <div className='searched'>
              <h2>Searched Games</h2>
              <StyledGamesList>
                {searched.map((game) => (
                  <Game
                    name={game.name}
                    released={game.released}
                    id={game.id}
                    key={game.id}
                    image={game.background_image}
                  />
                ))}
              </StyledGamesList>
            </div>
          )}
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 5rem;
`;

const StyledList = styled.div`
  display: flex;
`;

const StyledGenres = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 60%;
  justify-content: center;
  button {
    padding: 1rem 2rem;
    margin: 1rem;
    border-radius: 1.25rem;
    outline: none;
    border: none;
    cursor: pointer;
  }
  .active {
    background-color: crimson;
    box-shadow: 0 20px 30px rgba(3, 237, 245, 0.411);
  }
`;

export default SearchPage;
