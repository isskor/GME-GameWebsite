import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/gameDetailAction';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { resizeImg } from '../util';

const HomeBackground = ({ backgroundGames }) => {
  const [mainGame, setMainGame] = useState({});
  useEffect(() => {
    console.log(backgroundGames);
    setMainGame(backgroundGames[2]);
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
          backgroundGames.slice(2, 7).map((game, i) => (
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
  img {
    width: 100%;
  }

  .mainGame {
    grid-area: 1/1;
    display: grid;
    justify-items: center;
    img {
      grid-area: 1/1;
      width: 100%;
      object-fit: cover;
      object-position: 50% 10%;
      height: calc(80vh - 90px);
      /* height: 90vh; */
      @media (min-width: 768px) {
        height: calc(90vh - 90px);
      }
      @media (min-width: 992px) {
        height: calc(80vh - 90px);
      }
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
  grid-area: 1/1;
  display: grid;
  align-self: end;
  grid-template-columns: repeat(6, minmax(40px, 1fr));
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
  .gameContainer {
    grid-column: span 2;
    display: grid;
    cursor: pointer;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
  }
  .largeContainer {
    grid-column: span 3;
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
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(5, minmax(100px, 1fr));
    .gameContainer {
      grid-column: span 1;
    }
    .largeContainer {
      grid-column: span 1;
    }
  }
`;
// const StyledBgContainer = styled.div`
//   display: grid;
//   width: 100%;
//   top: 0;
//   left: 0;
//   margin: 0 auto;
//   justify-items: center;
//   background: rgba(0, 0, 0, 0.6);
//   box-shadow: -20px -20px 60px rgba(151, 151, 151, 0.1),
//     20px 20px 60px rgba(0, 0, 0, 0.3);
//   .mainGame {
//     grid-area: 1/1;
//     display: grid;
//     img {
//       grid-area: 1/1;
//       width: 100%;
//       object-fit: cover;
//       object-position: 50% 10%;
//       height: calc(80vh - 90px);
//     }
//     .mainGameDesc {
//       grid-area: 1/1;
//       justify-self: center;
//       align-self: center;
//       color: rgba(0, 0, 0, 0.4);
//       /* background-color: rgba(0, 0, 0, 0.6); */
//       width: 100%;
//       padding: 1rem 2rem;
//       text-align: center;

//       .mainGame-title {
//         font-size: 10rem;
//         padding: 1rem;
//         -webkit-text-stroke-width: 1px;
//         -webkit-text-stroke-color: rgba(182, 179, 179, 0.5);
//         /* width: 60%; */
//       }
//       .mainGame-button {
//         margin: 5rem 2rem;
//         display: inline-block;
//         font-size: 0.75rem;
//         padding: 0.75rem 1.5rem;
//         background-color: #132575;
//         border: 2px solid #132575;
//         border-radius: 4px;
//         opacity: 0.4;
//         color: #eee;
//         transition: all 0.3s ease;
//         &:hover {
//           opacity: 1;
//         }
//       }
//     }
//   }
// `;
// const StyledShowcaseGames = styled.div`
//   display: grid;
//   align-self: end;
//   grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
//   box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);

//   .gameContainer {
//     display: grid;
//     cursor: pointer;
//     box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
//   }
//   img {
//     width: 100%;
//     height: 20vh;
//     object-fit: cover;
//     grid-area: 1/1;
//   }
//   h4 {
//     grid-area: 1/1;
//     color: white;
//     align-self: flex-end;
//     padding: 1rem;
//   }
// `;
export default HomeBackground;
