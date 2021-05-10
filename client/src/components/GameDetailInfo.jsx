import React from 'react';
import styled from 'styled-components';
const GameDetailInfo = ({ game }) => {
  return (
    <StyledGameInfo className='info'>
      <div className='info-stats'>
        <h5 className='info-title'>Released</h5>
        <p className='info-content'>{game.released}</p>
      </div>
      <div className='info-stats'>
        <h5 className='info-title'>Metacritic</h5>
        <p className='info-content'>{game.metacritic}</p>
      </div>
      <div className='info-stats'>
        <h5 className='info-title'>Genres</h5>
        <div className='info-content'>
          {game.genres.map((genre) => (
            <p key={genre.id}>{genre.name},</p>
          ))}
        </div>
      </div>
      <div className='info-stats'>
        <h5 className='info-title'>Platforms</h5>
        <div className='info-content'>
          {game.platforms
            .sort((a, b) => (a.platform.name < b.platform.name ? -1 : 1))
            .map((data) => (
              <p key={data.platform.id}>{data.platform.name},</p>
            ))}
        </div>
      </div>
    </StyledGameInfo>
  );
};
const StyledGameInfo = styled.div`
  margin-top: 2rem;
  font-size: 1.5rem;
  color: #eee;
  display: flex;
  flex-wrap: wrap;

  .info-stats {
    /* flex-basis: 50%; */
    flex-basis: 100%;
    padding: 1rem 0;
    @media (min-width: 576px) {
      flex-basis: 50%;
      justify-content: center;
    }
    .info-title {
      font-size: 1rem;
      color: #696969;
      font-weight: normal;
      display: inline;
      padding: 0.25rem 0;
      border-bottom: 1px solid #35bffe;
    }
    .info-content {
      color: #eee;
      display: flex;
      flex-wrap: wrap;
      p {
        color: #eee;
        margin-right: 1rem;
      }
    }
  }
`;
export default GameDetailInfo;
