import { useState } from 'react';
import styled from 'styled-components';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <ArrowUp>
      <FontAwesomeIcon
        className='scrollTop'
        icon={faArrowCircleUp}
        onClick={scrollTop}
        color={'#35bffe'}
        size={'2x'}
        style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
      />
    </ArrowUp>
  );
};
const ArrowUp = styled.div`
  position: fixed;
  right: 20px;
  bottom: 60px;

  height: 20px;

  z-index: 1000;
  cursor: pointer;

  transition: opacity 0.4s;
  opacity: 0.5;
`;
export default ScrollTop;
