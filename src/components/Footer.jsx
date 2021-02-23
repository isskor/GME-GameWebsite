import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faGithubSquare,
  faInstagramSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import footerBg from '../img/league_of_legends_nami_4k_hd_league_of_legends.jpg';
import footerPng from '../img/94444-league-graphic-legends-of-wallpaper-artifact-dota.png';
import footerPng2 from '../img/3-2-league-of-legends-free-png-image.png';
const Footer = () => {
  const socialIcons = [
    faFacebookSquare,
    faGithubSquare,
    faInstagramSquare,
    faTwitterSquare,
  ];
  return (
    <StyledFooterContainer>
      <StyledBanner className='banner'></StyledBanner>
      {/* <img src={bg} alt='' /> */}
      <div className='footer-image'>
        <img src={footerPng} alt='' />
      </div>

      <div className='banner-content'>
        <h3 className='banner-text'>Subscribe </h3>
        <h3 className='banner-text-two'>
          for more
          <span className='colored-text'> game news</span>
        </h3>
      </div>

      <footer>
        <div className='footer-container'>
          <div className='logo'>
            <h3>GME</h3>
          </div>
          <div className='links'>
            <ul>
              <li>Home</li>
              <li>Browse Games</li>
            </ul>
          </div>
          <div className='subscribe'>
            <input type='text' />
            <button>Subscribe</button>
          </div>
          <div className='social'>
            {socialIcons.map((icon) => (
              <FontAwesomeIcon icon={icon} size='2x' key={icon.iconName} />
            ))}
          </div>
        </div>
      </footer>
      <div className='footer-note'>
        <a href='https://rawg.io/'> Powered by RAWG.IO</a>
      </div>
    </StyledFooterContainer>
  );
};

const StyledFooterContainer = styled.div`
  margin-top: 5rem;
  color: white;
  display: grid;
  grid-template-rows: 220px 1fr 100px 20px;
  /* grid-template-rows: 2fr 1fr 1fr 20px; */
  grid-template-columns: 2fr 2fr;
  @media (min-width: 992px) {
    margin-top: 10rem;
  }
  .footer-image {
    grid-area: 1/1/2/3;
    justify-self: start;
    /* margin-right: 100px; */

    @media (min-width: 768px) {
      grid-area: 1/1/2/2;
      justify-self: end;
    }
    img {
      width: 100%;
    }
  }
  .banner-content {
    grid-area: 1/2/2/3;
    align-self: center;
    @media (min-width: 992px) {
      grid-area: 2/2/2/3;
      width: 60%;
    }
    h3 {
      font-size: 2rem;
      color: white;
      text-transform: uppercase;
      padding: 0.25rem 0;
      /* font-size: 2.8rem; */
    }
    .banner-text {
      position: relative;
      &::after {
        content: '';
        width: 50%;
        height: 5px;
        position: absolute;
        left: 0;
        bottom: -4px;
        background: #35bffe;
      }
    }
    .banner-text-two {
      .colored-text {
        color: #35bffe;
        position: relative;
        /* &::after {
          content: '';
          width: 100%;
          position: absolute;
          height: 5px;
          left: 0;
          top: -5px;
          background: white;
        } */
      }
    }
  }

  footer {
    grid-area: 2/1/4/3;
    width: 100%;
    background-color: black;
    padding: 2rem 0;
    display: flex;
    align-items: center;
    @media (min-width: 992px) {
      grid-area: 3/1/3/3;
    }
  }
  .footer-container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 992px) {
      flex-wrap: nowrap;
    }
    .logo {
      text-align: center;
      width: 100%;
      @media (min-width: 992px) {
        width: auto;
      }
    }

    .links {
      flex-basis: 100%;
      @media (min-width: 992px) {
        flex-basis: 30%;
      }
      ul {
        display: flex;
        justify-content: space-evenly;
        list-style: none;
        padding: 3rem 2rem;
        border-top: 2px solid rgba(150, 150, 150, 0.2);
        /* flex-direction: column; */
        @media (min-width: 992px) {
          justify-content: space-around;
          font-size: 0.8rem;
          border: none;
          padding: 1.4rem 2rem;
          border-left: 2px solid rgba(150, 150, 150, 0.2);
          border-right: 2px solid rgba(150, 150, 150, 0.2);
          /* border-bottom: 2px solid rgba(150, 150, 150, 0.2); */
        }
      }
    }
    .subscribe {
      display: flex;
      justify-content: center;
      flex-basis: 100%;
      order: -1;
      margin: 2rem 0;
      @media (min-width: 992px) {
        flex-basis: 30%;
        order: 1;
      }
      input {
        width: 60%;
        padding: 0.4rem;
        border-radius: 5rem 0 0 5rem;
        background-color: gray;
        color: #ffffff;
      }
      button {
        border: none;
        outline: none;
        padding: 0 1rem;
        background: #35bffe;
        color: #ffffff;
        border-radius: 0 5rem 5rem 0;
      }
    }
    .social {
      flex-basis: 30%;
      margin: 0 auto;
      padding: 1rem 2rem;
      border-left: 2px solid rgba(150, 150, 150, 0.2);
      border-right: 2px solid rgba(150, 150, 150, 0.2);
      display: flex;
      justify-content: space-evenly;
      svg {
        margin: 0 1rem;
        color: #414141;
        opacity: 0.8;
        cursor: pointer;
        &:hover {
          color: #35bffe;
        }
      }
    }
  }
  .footer-note {
    grid-area: 4/1/4/3;
    grid-area: 4/1/4/3;
    background-color: black;
    border-top: 2px solid rgba(150, 150, 150, 0.2);
    padding: 1.2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    a {
      color: #aa9a07;
    }
  }
`;
const StyledBanner = styled.div`
  grid-area: 1/1/2/3;
  background-image: url(${footerBg});
  background-color: #a879a4;
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  width: 100%;
  z-index: -1;
  overflow: hidden;
  @media (min-width: 992px) {
    background-position-y: 50%;
    height: 400px;
    grid-area: 2/1/2/3;
  }
`;

export default Footer;
