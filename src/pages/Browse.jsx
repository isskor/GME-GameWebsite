import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory, useParams } from 'react-router-dom';
// Styling and Animation
import styled from 'styled-components';
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion';
import bg from '../img/warriro_diana_4k_hd_league_of_legends.jpg';
// Components
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
import useSearchFilter from '../components/useSearchFilter';
import Sidebar2 from '../components/Sidebar2';
// fetch
import { fetchSearch } from '../actions/gamesAction';
import {
  filterSortBy,
  filterPageSize,
  resetPageNumber,
} from '../actions/searchAction';
import Pagination from '../components/Pagination';
import usePagination from '../components/usePagination';
const Browse = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');
  // get Current Location
  const location = useLocation();
  const params = useParams();
  const history = useHistory();
  useSearchFilter();
  const pathId = location.pathname.split('/')[2];
  // genres
  const [genrePath, setGenrePath] = useState([]);

  //fetch data
  const { searched } = useSelector((state) => state.games);
  const { setCurrentPage } = usePagination(searched);
  useEffect(() => {
    if (params.id) return;
    dispatch(fetchSearch(textInput, location.search));
  }, [location.search]);

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput, location.search));
    dispatch(resetPageNumber());
    currentPageHandler(100);
    // dispatch(fetchSearch(textInput, location.search));
  };
  const currentPageHandler = (page) => {
    setCurrentPage(page);
    console.log('asd');
  };
  // sortby
  const sortByHandler = (sort) => {
    dispatch(filterSortBy(sort));
  };
  // filter page size
  const pageSizeHandler = (pages) => {
    dispatch(filterPageSize(pages));
  };
  return (
    <div>
      <StyledBanner className='banner'>
        {/* <img src={bg} alt='' /> */}
      </StyledBanner>
      <StyledPageTitle>Games</StyledPageTitle>
      <StyledContainer className='container'>
        <form className='searchForm ' onSubmit={submitSearch}>
          <div className='form-group searchInput'>
            <input
              type='text'
              id='search'
              placeholder='search games'
              onChange={inputHandler}
            />
          </div>
          <div className='form-group sortInput'>
            <select
              name='sortBy'
              id='sortBy'
              onChange={(e) => sortByHandler(e.target.value)}
            >
              <option value='-added'>Newest</option>
              <option value='-ratings'>Rating</option>
              <option value='-released'>Released</option>
            </select>
          </div>
          <div className='form-group pageInput'>
            <select
              name='pages'
              id='pages'
              onClick={(e) => pageSizeHandler(e.target.value)}
            >
              <option value='10'>10</option>
              <option value='20'>20</option>
              <option value='30'>30</option>
            </select>
          </div>
        </form>
        <div className='sidebar'>
          <Sidebar2
            className='sidebar'
            searchInput={textInput}
            setGenrePath={setGenrePath}
            genrePath={genrePath}
          />
        </div>
        {searched.games.length > 0 && (
          <>
            {/* <div className='header'>
              <img src={searched[0].background_image} alt={searched[0].name} />
              <h2>Games</h2>
            </div> */}
            <AnimateSharedLayout type='crossfade'>
              <AnimatePresence>
                {pathId && <GameDetail pathId={pathId} />}
              </AnimatePresence>
              <StyledGamesList>
                {searched.games.map((game) => (
                  <Game
                    name={game.name}
                    released={game.released}
                    id={game.id}
                    key={game.id}
                    image={game.background_image}
                  />
                ))}
              </StyledGamesList>

              <Pagination list={searched} />
            </AnimateSharedLayout>
          </>
        )}
      </StyledContainer>
    </div>
  );
};

const StyledBanner = styled.div`
  background-image: url(${bg});
  background-color: #6482aa;
  background-blend-mode: multiply;
  background-size: cover;
  background-position-y: 80%;
  /* filter: blur(1px); */
  width: 100%;
  height: 500px;
  z-index: -1;
  overflow: hidden;
  position: absolute;
  border-bottom: 2px solid #132575;
  /* box-shadow: 0 60px 100px #35e7bb; */
  /* img {
    width: 100%;
    object-fit: cover;
    object-position: 50% 100%;
  } */
`;

const StyledContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: auto;
  grid-gap: 1rem;
  .sidebar {
    grid-area: 1/1/10/3;
  }

  .searchForm {
    grid-area: 1/3/1/11;
    padding: 0.75rem 0.25rem;
    display: flex;
    color: white;
    align-items: center;
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.2);
    background: #161139;
    border-radius: 4px;
    justify-content: space-evenly;
    .searchInput {
      flex-basis: 80%;
    }

    input,
    select {
      padding: 1rem;
      margin: 0 1rem;
      border-radius: 4px;
      outline: none;
      border: none;
      background-color: #262247;
      color: white;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }
  }

  .header {
    grid-area: 2/ 3 / 5 / 10;
    background-color: black;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 270px;
    background: #06021b;

    h2 {
      grid-area: 1/1;
      justify-self: start;
      padding: 1rem;
      font-size: 5rem;
      color: rgba(37, 24, 153, 0.6);
    }
    img {
      grid-area: 1/1;
      width: 100%;
      object-fit: contain;
    }
  }
`;

const StyledPageTitle = styled.h1`
  width: 80%;
  margin: 0 auto;
  padding-top: 12rem;
  font-size: 6rem;
  color: #c2c2c2;
`;
const StyledGamesList = styled(motion.div)`
  grid-area: 2/ 3/ 13/ 11;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;
export default Browse;
