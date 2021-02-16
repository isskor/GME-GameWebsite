import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Styling and Animation
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';
// utils
import { resizeImg } from '../util';

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  const { screen, game, isLoading } = useSelector((state) => state.gameDetail);

  const exitGameHandler = (e) => {
    const el = e.target;
    if (el.classList.contains('card-shadow')) {
      document.body.style.overflow = 'auto';
      history.goBack();
    }
  };
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
  const screens = screen.results.map((s) => s);
  const bg = {
    image: game.background_image,
    id: 1,
  };
  const images = [bg, ...screens];
  const [mainImg, setMainImg] = useState('');
  console.log(game.publishers);
  return (
    <>
      {!isLoading && (
        <CardShadow onClick={exitGameHandler} className='card-shadow'>
          <Detail layoutId={game.id} className='detail'>
            <Media className='media'>
              <motion.img
                src={mainImg.image || game.background_image}
                alt={game.name}
              />

              <Gallery className='gallery'>
                {images.map((screen) => (
                  <img
                    src={resizeImg(screen.image, 1280)}
                    alt={game.name}
                    loading='lazy'
                    key={screen.id}
                    onClick={() => setMainImg(screen)}
                  />
                ))}
              </Gallery>
            </Media>

            <Stats className='stats'>
              <h2 className='game-title'>{game.name}</h2>
              <h3 className='game-publishers'>{game.publishers[0].name}</h3>
              <p className='game-released'>
                Released: <span>{game.released}</span>
              </p>
              <div className='rating'>
                <p>Rating: {game.rating}</p>
                <p>{getStars()}</p>
              </div>
              <Info className='info'>
                <div className='website'>
                  <p>Website:</p>
                  <a href={game.website}>{game.website}</a>
                </div>
                <h4>Platforms</h4>
                <Platforms className='platforms'>
                  {game.platforms.map((data) => (
                    <p key={data.platform.id}>{data.platform.name}</p>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Description className='description'>
              <h3 className='description-header'>Description</h3>
              <p
                dangerouslySetInnerHTML={{ __html: `${game.description}` }}
              ></p>
            </Description>
          </Detail>
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
  z-index: 5;
`;

const Detail = styled(motion.div)`
  width: 90%;
  height: 90%;
  top: 5%;
  border-radius: 0.25rem;
  padding: 5rem;
  background: #06021b;
  position: absolute;
  left: 5%;
  overflow: scroll;
  color: black;
  z-index: 10;
  display: grid;
  grid-template-columns: 3fr 2fr;
  box-shadow: 10px 10px 60px rgba(97, 97, 97, 0.1),
    -20px -20px 60px rgba(0, 0, 0, 0.4);
  &::-webkit-scrollbar {
    width: 0.6rem;
    background: transparent;
    height: 50%;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #34ffff;
    border-radius: 1rem;
    border-color: transparent;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  img {
    width: 100%;
  }
  .game-title {
    font-size: 2.5rem;
    color: #eeeeee;
    margin: 0 0 1rem;
    padding: 0;
  }
  .game-publishers {
    font-size: 1.5rem;
    color: #a3a2a2;
    margin: 0;
    padding: 0;
  }
  .game-released {
    margin-bottom: 2rem;
  }
`;

const Stats = styled(motion.div)`
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 3rem;

  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
  .rating {
    display: flex;
    justify-content: space-between;

    p {
      color: #eeeeee;
      font-size: 1.5rem;
    }
  }
`;

const Info = styled(motion.div)`
  margin-top: 1rem;
  font-size: 1.5rem;
  color: #eee;
  .website{
    
    justify-content: space-between;
    margin-bottom: 2rem;
    p{
      font-size: 1.5rem;
    }
    a{
      font-size: 1.2rem;
    }

  }
  }
`;

const Platforms = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;

  p {
    color: #eee;
    margin-right: 1rem;
  }
  img {
    margin-left: 3rem;
    width: 5rem;
  }
`;

const Media = styled(motion.div)`
  img {
    width: 100%;
    height: 100%:
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
    color: #eeeeee;
    margin-top: 0;
    padding-top: 0;
    margin-bottom: 2rem;
  }
`;

const Gallery = styled.div`
  margin-top: 0.5rem;
  grid-area: 3/1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default GameDetail;
