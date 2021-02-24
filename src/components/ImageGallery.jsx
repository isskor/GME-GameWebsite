import { useState } from 'react';
import { resizeImg } from '../util';
import styled from 'styled-components';
import { motion } from 'framer-motion';
const ImageGallery = ({ imageList, currentGame }) => {
  const [mainImg, setMainImg] = useState('');
  return (
    <Media className='media'>
      <motion.img
        className='mainImg'
        src={mainImg.image || currentGame.background_image}
        alt={currentGame.name}
      />

      <Gallery className='gallery'>
        {imageList.map((screen) => (
          <img
            src={resizeImg(screen.image, 1280)}
            alt={currentGame.name}
            loading='lazy'
            key={screen.id}
            onClick={() => setMainImg(screen)}
          />
        ))}
      </Gallery>
    </Media>
  );
};
const Media = styled(motion.div)`
  img {
    width: 100%;
    /* height: 500px; */
    object-fit: cover;
  }
  .mainImg {
    height: 300px;
    @media (min-width: 768px) {
      height: 400px;
    }
    @media (min-width: 992px) {
      height: 500px;
    }
  }
`;
const Gallery = styled.div`
  margin-top: 0.5rem;
  /* grid-area: 3/1; */

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  img {
    cursor: pointer;
    /* width: 100%; */
    height: 120px;
  }
`;
export default ImageGallery;
