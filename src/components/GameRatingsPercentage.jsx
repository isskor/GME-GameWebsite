import React from 'react';
import PercentageCircle from './PercentageCircle';
import styled from 'styled-components';
const GameRatingsPercentage = ({ ratings }) => {
  const ratingColors = ['#35bffa', '#35fea0', '#faab35', '#fa3570'];
  //   add colors to each rating
  // API gives back highest rating % first, hence conditional rendering
  const ratingList = ratings.map((r) => {
    if (r.title === 'exceptional') return { ...r, color: ratingColors[0] };
    if (r.title === 'recommended') return { ...r, color: ratingColors[1] };
    if (r.title === 'meh') return { ...r, color: ratingColors[2] };
    if (r.title === 'skip') return { ...r, color: ratingColors[3] };
  });

  return (
    <StyledRatingsContainer>
      {ratingList.map((rating) => (
        <div className='rating' key={rating.id}>
          <p style={{ color: rating.color }}>{rating.title}</p>
          <PercentageCircle
            percentage={rating.percent}
            stroke={rating.color}
            emptyStroke={'blue'}
            // change on mediaResize
            size={100}
          >
            {rating.percent}
          </PercentageCircle>
        </div>
      ))}
    </StyledRatingsContainer>
  );
};

const StyledRatingsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 0;
  @media (min-width: 576px) {
    flex-wrap: nowrap;
  }
  @media (min-width: 992px) {
    flex-wrap: wrap;
  }
  .rating {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    text-transform: capitalize;

    p {
      padding: 1rem 0;
      /* font-size: 1.2rem;  from global?*/
      font-size: 1rem;
      @media (min-width: 992px) {
        font-size: 1.2rem;
      }
    }
  }
`;
export default GameRatingsPercentage;
