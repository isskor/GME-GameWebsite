import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// components
import ImageGallery from './ImageGallery';
import GameRatingsPercentage from './GameRatingsPercentage';
import GameDetailHeader from './GameDetailHeader';
import GameDetailInfo from './GameDetailInfo';
// Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
// utils

const GameDetail = () => {
  const history = useHistory();
  const { screen, game, isLoading } = useSelector((state) => state.gameDetail);

  const exitGameHandler = (e, btnClick) => {
    const el = e.target;

    if (el.classList.contains('card-shadow') || btnClick) {
      document.body.style.overflow = 'auto';
      history.goBack();
    }
  };

  // handle Images
  // add gameImage to fetched screen images and display in gallery
  const screens = screen.results.map((s) => s);
  const bg = {
    image: game.background_image,
    id: 1,
  };
  const images = [bg, ...screens];

  return (
    <>
      {!isLoading && (
        <CardShadow onClick={exitGameHandler} className='card-shadow'>
          <StyledDetailContainer layoutId={game.id} className='detail'>
            <button className='exitBtn' onClick={(e) => exitGameHandler(e, 1)}>
              <FontAwesomeIcon icon={faTimesCircle} size='3x' />
            </button>
            <ImageGallery
              imageList={images}
              currentGame={game}
              className='gallery'
            />

            <StyledGameStats className='stats'>
              <div className='game-stats'>
                <GameDetailHeader game={game} />
                <GameDetailInfo game={game} />
              </div>
              <div className='game-ratings'>
                <GameRatingsPercentage ratings={game.ratings} />
              </div>
            </StyledGameStats>
            <Description className='description'>
              <h3 className='description-header'>Description</h3>
              <p
                dangerouslySetInnerHTML={{ __html: `${game.description}` }}
              ></p>
            </Description>
          </StyledDetailContainer>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
`;

const StyledDetailContainer = styled(motion.div)`
  height: 100%;
  border-radius: 0.25rem;
  padding: 3rem;
  background: #06021b;
  position: absolute;
  overflow: scroll;
  color: black;
  z-index: 100;
  display: grid;
  @media (min-width: 992px) {
    padding: 5rem 3rem;
    box-shadow: 20px 20px 60px rgba(2, 158, 219, 0.1),
      -20px -20px 60px rgba(2, 158, 219, 0.1);
    width: 90%;
    height: 90%;
    top: 5%;
    left: 5%;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 3fr 2fr;
    /* padding: 5rem; */
  }
  @media (min-width: 1400px) {
    padding: 5rem;
  }
  &::-webkit-scrollbar {
    width: 0.2rem;
    background: transparent;
    height: 50%;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(78, 234, 255, 0.6);

    border-radius: 1rem;
    border-color: transparent;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  .exitBtn {
    position: fixed;
    right: 5%;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    @media (min-width: 992px) {
      right: 7%;
      top: 5%;
    }
    @media (min-width: 992px) {
      top: 10%;
    }
    svg {
      display: inline-block;
      color: #35bffe;
      &:hover {
        color: rgba(252, 28, 103, 0.7);
      }
    }
  }
`;

const StyledGameStats = styled(motion.div)`
  width: 100%;
  /* margin-left: 3rem; */
  /* flex-direction: column; */
  grid-row: 1;
  @media (min-width: 992px) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    /* grid-column: 2; */
    padding-bottom: 2rem;
    .game-stats {
      grid-column: 1;
    }
    .game-ratings {
      grid-column: 2;
    }
  }
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    grid-column: 2;
    margin-left: 3rem;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
  padding-bottom: 5rem;
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-size: 1rem;
    color: #eee;
    margin: 0;
    padding: 0;
  }
  .description-header {
    font-size: 2.5rem;
    user-select: none;
    color: #eeeeee;
    margin-top: 0;
    padding-top: 0;
    margin-bottom: 2rem;
  }
`;

export default GameDetail;
