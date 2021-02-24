import { Link } from 'react-router-dom';
import styled from 'styled-components';
import png1 from '../img/assassins_creed_PNG62.png';
const HeroSection = () => {
  return (
    <StyledHeroSection>
      <div className='image'>
        <img src={png1} alt='' />
      </div>
      <div className='header'>
        <h1>Unleash The Gamer</h1>
        <h3>Browse from 1000's of Games</h3>

        <Link to='/browse'>Browse All Games</Link>
      </div>
      <div className='box'></div>
    </StyledHeroSection>
  );
};
const StyledHeroSection = styled.section`
  /* height: 50vh; */
  margin: 5rem auto;
  /* width: 100%; */
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  .image {
    grid-area: 1/2/1/7;
    z-index: 1;
    justify-self: start;
    @media (min-width: 768px) {
      grid-area: 1/2/1/5;
    }
    @media (min-width: 1400px) {
      grid-area: 1/3/1/5;
    }
    img {
      width: 100%;
      filter: brightness(20%);
      /* filter: brightness(40%); */
    }
  }
  .header {
    z-index: 2;
    grid-area: 1/2/1/7;
    justify-self: end;
    align-self: center;
    text-align: center;
    font-size: 2rem;
    @media (min-width: 1400px) {
      /* width: 50%; */
      grid-area: 1/3/1/6;
    }
    h1,
    h3 {
      color: white;
      text-align: center;
    }
    h1 {
      @media (min-width: 768px) {
        font-size: 4rem;
      }
      @media (min-width: 1200px) {
        font-size: 5rem;
      }
    }
    h3 {
      font-size: 2rem;
      color: #a7a7a7;
      @media (min-width: 768px) {
        font-size: 2.8rem;
      }
    }

    a {
      display: inline-block;
      margin-top: 2rem;
      font-size: 0.75rem;
      border: none;
      border-radius: 4px;
      font-weight: bold;
      cursor: pointer;
      padding: 1rem 1.5rem;
      background-color: #35bffe;
      color: #eee;
      transition: all 0.3s ease;
      opacity: 0.8;
      &:hover {
        opacity: 1;
        box-shadow: 0 10px 30px rgba(81, 146, 231, 1);
        color: #fff;
      }
    }
  }

  .box {
    clip-path: polygon(73% 0, 100% 0, 27% 100%, 0% 100%);
    background: #35bffe;
    /* grid-area: 1/3/1/6; */
    grid-area: 1/2/1/7;
    opacity: 0.5;
  }
`;
export default HeroSection;
