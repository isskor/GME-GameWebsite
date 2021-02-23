import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
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
import SearchForm from '../components/SearchForm';
import FilterMobileButton from '../components/FilterMobileButton';
const Browse = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');
  // get Current Location
  const location = useLocation();
  const params = useParams();
  const pathId = location.pathname.split('/')[2];
  // genres

  //fetch data
  const { searched } = useSelector((state) => state.games);
  // media
  const [windowWidth, setWindowWidth] = useState(null);

  const [showSidebar, setShowSidebar] = useState(false);
  // window.addEventListener('resize', () => {
  //   if (window.innerWidth > 992) setShowSidebar(true);
  // });
  useEffect(() => {
    // check width on initial render
    if (window.innerWidth > 992) setShowSidebar(true);
    // check width when resizing window
    function handleWidthSize() {
      if (window.innerWidth > 992) setShowSidebar(true);
    }
    // add event listener
    window.addEventListener('resize', handleWidthSize);
    // remove eventlistener on unmount
    return () => window.removeEventListener('resize', handleWidthSize);
  });
  // if (window.innerWidth > 992) setShowSidebar(true);

  // console.log('browse rerender');
  // useSearchFilter();
  // useEffect(() => {
  //   if (params.id) return;
  //   dispatch(fetchSearch(textInput, location.search));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [location.search]);

  // const inputHandler = (e) => {
  //   setTextInput(e.target.value);
  // };
  // const submitSearch = (e) => {
  //   e.preventDefault();
  //   dispatch(fetchSearch(textInput, location.search));
  //   dispatch(resetPageNumber());
  // };

  // // sortby
  // const sortByHandler = (sort) => {
  //   dispatch(filterSortBy(sort));
  // };
  // // filter page size
  // const pageSizeHandler = (pages) => {
  //   dispatch(filterPageSize(pages));
  // };
  return (
    <div>
      <StyledBanner className='banner'>
        {/* <img src={bg} alt='' /> */}
        <div className='line'></div>
      </StyledBanner>
      <StyledPageTitle>Games</StyledPageTitle>

      <StyledContainer
        className={`content-container ${showSidebar ? 'filtersActive' : ''}`}
      >
        {showSidebar && (
          <div className='sidebar'>
            <Sidebar2 setShowSidebar={setShowSidebar} />
          </div>
        )}

        <SearchForm />
        <button className='showFiltersBtn' onClick={() => setShowSidebar(true)}>
          show filters
        </button>
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
  background-color: #addbe9;
  background-blend-mode: multiply;
  background-size: cover;
  /* background-position-y: 70%; */
  background-position: center;
  width: 100%;
  height: 500px;
  z-index: -1;
  overflow: hidden;
  position: absolute;

  .line {
    width: 100%;
    height: 3px;
    position: absolute;
    bottom: 0;
    background-color: #132575;
  }
`;

const StyledContainer = styled.div`
  /* width: 80%; */
  transition: all 0.3s ease;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: 80px 1fr 80px;
    grid-gap: 1rem;
  }
  .sidebar {
    /* display: none; */
    z-index: 10;
    position: absolute;
    width: 50%;
    max-width: 220px;
    top: 60px;
    left: 0;
    height: 100%;
    background: #06021b;
    @media (min-width: 992px) {
      grid-area: 1/1/3/3;
      position: static;
      width: 100%;
      max-width: 100%;
      z-index: 0;
    }
  }
  .showFiltersBtn {
    color: #fff;
    padding: 0.75rem 1.25rem;
    background-color: #262247;
    border: none;
    outline: none;
    border: 4px;
    margin-top: 0.5rem;
    @media (min-width: 992px) {
      display: none;
    }
  }
  &.filtersActive {
    margin-left: 30%;
    width: 70%;
    @media (min-width: 992px) {
      margin-left: auto;
      width: 90%;
    }
  }
`;

const StyledPageTitle = styled.h1`
  width: 80%;
  margin: 0 auto;

  padding-top: 6rem;

  font-size: 3rem;
  color: #c2c2c2;
  @media (min-width: 576px) {
    font-size: 4rem;
  }
  @media (min-width: 992px) {
    font-size: 6rem;
    padding-top: 12rem;
  }
`;
const StyledGamesList = styled(motion.div)`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  @media (min-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    margin-top: 0;
    grid-template-columns: repeat(4, 1fr);
    grid-area: 2/ 3/ 3/ 12;
  }
`;
const StyledContents = styled(motion.div)`
  .filtersActive {
    margin-left: 30%;
  }
`;
export default Browse;
