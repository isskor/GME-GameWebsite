import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HomeBackground = ({ backgroundGames }) => {
  const [mainGame, setMainGame] = useState({});
  useEffect(() => {
    console.log(backgroundGames);
    setMainGame(backgroundGames[0]);
  }, [backgroundGames]);

  return (
    <StyledBgContainer>
      {mainGame && (
        <div className='mainGame'>
          <img
            src={mainGame.background_image}
            alt=''
            loading='lazy'
            key={mainGame.name}
          />
          <div className='mainGameDesc'>
            <h1>{mainGame.name}</h1>
            <h4>{mainGame.released}</h4>
            <button>See More</button>
          </div>
        </div>
      )}
      <StyledShowcaseGames className='games'>
        {backgroundGames.length > 0 &&
          backgroundGames.slice(0, 5).map((game) => (
            <div
              className='gameContainer'
              onClick={() => setMainGame(game)}
              key={game.name}
            >
              <img src={game.background_image} alt='' />
              <h4>{game.name}</h4>
            </div>
          ))}
      </StyledShowcaseGames>
    </StyledBgContainer>
  );
};
const StyledBgContainer = styled.div`
  display: grid;
  z-index: -1;
  /* height: calc(100vh - 80px); */
  width: 100%;
  top: 0;
  left: 0;
  margin: 0 auto;
  justify-items: center;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
  .mainGame {
    grid-area: 1/1;
    display: grid;
    img {
      grid-area: 1/1;
      width: 100%;
      object-fit: cover;
      object-position: 50% 10%;
      height: calc(80vh - 90px);
    }
    .mainGameDesc {
      grid-area: 1/1;
      justify-self: center;
      align-self: end;
      color: rgba(255, 255, 255, 0.4);
      background-color: rgba(0, 0, 0, 0.6);
      width: 100%;
      padding: 1rem 2rem;

      h1 {
        font-size: 3rem;
        padding: 1rem;
        /* width: 60%; */
      }
    }
  }
`;
const StyledShowcaseGames = styled.div`
  display: grid;
  /* grid-area: 1/1; */
  align-self: end;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);

  .gameContainer {
    display: grid;
    cursor: pointer;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
  }
  img {
    width: 100%;
    height: 20vh;
    object-fit: cover;
    grid-area: 1/1;
  }
  h4 {
    grid-area: 1/1;
    color: white;
    align-self: flex-end;
    padding: 1rem;
  }
`;
export default HomeBackground;
