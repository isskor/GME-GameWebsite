import React from 'react';
// styling
import styled from 'styled-components';
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';
const GameDetailHeader = ({ game }) => {
  // stars function
  const getStars = () => {
    const stars = [];
    const rating = (game.rating = Math.floor(game.rating));
    for (let i = 1; i <= 5; i++) {
      i <= rating
        ? stars.push(<img alt='star' key={i} src={starFull}></img>)
        : stars.push(<img alt='star' key={i} src={starEmpty}></img>);
    }
    return stars;
  };
  return (
    <StyledGameHeader>
      <div className='stars'>
        <figure>{getStars()}</figure>
        <div className='stars-circle'>
          <p> {game.rating}</p>
        </div>
      </div>
      <h2 className='game-title'>{game.name}</h2>
      {game.publishers.length > 0 && (
        <h3 className='game-publishers'>{game.publishers[0].name}</h3>
      )}
      <div className='game-website'>
        <a href={game.website}>{game.website}</a>
      </div>
    </StyledGameHeader>
  );
};
const StyledGameHeader = styled.div`
  .game-title {
    font-size: 2.5rem;
    color: #eeeeee;
    margin: 2rem 0 1rem;
    padding: 0;
    user-select: none;
  }
  .game-publishers {
    font-size: 1.5rem;
    color: #a3a2a2;
    margin: 0;
    padding: 0;
    user-select: none;
  }
  .game-website {
    margin-top: 1rem;
    a {
      &:hover {
        color: #35bffe;
      }
    }
  }
  .stars {
    display: flex;
    align-items: center;
    figure {
      margin-right: 1.5rem;
    }
    img {
      width: 2rem;
      height: 2rem;
      display: inline;
    }
    .stars-circle {
      color: white;
      width: 60px;
      height: 60px;
      background-color: #35bffe;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        user-select: none;
        width: 50px;
        height: 50px;
        text-align: center;
        border-radius: 50%;
        border: 1px solid #eee;
        font-weight: bold;
        color: #eeeeee;
        font-size: 1.5rem;
      }
    }
  }
`;
export default GameDetailHeader;
