import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// actions
import { loadDetail } from '../actions/gameDetailAction';
// styling
import styled from 'styled-components';
// utils
import { resizeImg } from '../util';

const HomeBackground = ({ backgroundGames }) => {
  const [mainGame, setMainGame] = useState({});
  useEffect(() => {
    setMainGame(backgroundGames[1]);
  }, [backgroundGames]);
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(mainGame.id));
    document.body.style.overflow = 'hidden';
  };
  return (
    <StyledBGConatiner>
      {mainGame && (
        <div className='mainGame'>
          <img
            src={resizeImg(mainGame.background_image, 1920)}
            alt=''
            loading='lazy'
            key={mainGame.name}
          />
          <div className='mainGameDesc'>
            <h1 className='mainGame-title'>{mainGame.name}</h1>

            <div className='button-container'>
              <Link
                to={`/game/${mainGame.id}`}
                className='mainGame-button'
                onClick={loadDetailHandler}
              >
                Browse Game
              </Link>

              <Link to='/browse' className='mainGame-button'>
                More Games
              </Link>
            </div>
          </div>
        </div>
      )}
      <StyledShowcaseGames1 className='games'>
        {backgroundGames.length > 0 &&
          backgroundGames.slice(1, 6).map((game, i) => (
            <div
              className={`gameContainer ${i > 2 ? 'largeContainer' : ''}`}
              onClick={() => setMainGame(game)}
              key={game.name}
            >
              <img src={resizeImg(game.background_image, 1920)} alt='' />
              <h4>{game.name}</h4>
            </div>
          ))}
      </StyledShowcaseGames1>
    </StyledBGConatiner>
  );
};

const StyledBGConatiner = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 1400px;
  margin: 2rem auto 0;
  img {
    width: 100%;
  }

  .mainGame {
    /* grid-area: 1/1; */
    display: grid;
    justify-items: center;
    @media (min-width: 768px) {
      /* height: calc(90vh - 90px); */
      flex-basis: 80%;
    }
    img {
      grid-area: 1/1;
      object-fit: cover;
      object-position: 50% 10%;
      height: 100%;
      /* height: 90vh; */
    }
    .mainGameDesc {
      grid-area: 1/1;
      justify-self: center;
      align-self: center;
      width: 100%;
      color: rgba(0, 0, 0, 0.4);
      text-align: center;
      @media (min-width: 992px) {
        /* padding: 1rem 2rem; */
      }

      .mainGame-title {
        font-size: 3rem;
        padding: 1rem;
        user-select: none;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: rgba(182, 179, 179, 0.5);
        /* width: 60%; */
        @media (min-width: 768px) {
          font-size: 5rem;
        }
      }
      .button-container {
        display: flex;
        justify-content: space-around;
        @media (min-width: 768px) {
          justify-content: center;
        }
      }
      .mainGame-button {
        margin: 5rem 0rem;
        display: inline-block;
        font-size: 0.75rem;
        padding: 0.75rem 1.5rem;
        background-color: #132575;
        border: none;
        border-radius: 4px;
        opacity: 0.8;
        color: #eee;
        transition: all 0.3s ease;
        &:hover {
          opacity: 1;
        }
        @media (min-width: 768px) {
          margin: 5rem 5rem;
        }
      }
    }
  }
`;
const StyledShowcaseGames1 = styled.div`
  display: none;
  flex-direction: column;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
  @media (min-width: 576px) {
    flex-basis: 20%;
    display: flex;
    flex-direction: column;
  }
  .gameContainer {
    flex: 0.2;
    display: grid;
    cursor: pointer;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    grid-area: 1/1;
  }
  h4 {
    grid-area: 1/1;
    color: white;
    align-self: flex-end;
    padding: 1rem;
    user-select: none;
  }
`;
export default HomeBackground;
