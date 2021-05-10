import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/gameDetailAction';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
// utils
import { resizeImg } from '../util';

const Game = ({ name, released, id, image }) => {
  const history = useHistory();
  // Load details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
    document.body.style.overflow = 'hidden';
  };
  window.onpopstate = () => {
    document.body.style.overflow = 'auto';
  };
  const curPath = history.location.pathname.slice(1);

  return (
    <StyledGame layoutId={id} onClick={loadDetailHandler}>
      <Link to={`/${curPath}/${id}`}>
        <motion.div className='card-container'>
          <motion.img
            layoutId={`${id}+image`}
            loading='lazy'
            src={resizeImg(image, 420)}
            alt={name}
          />
          <h3>{name}</h3>
        </motion.div>
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  height: 35vh;
  box-shadow: 10px 10px 60px rgba(170, 170, 170, 0.1),
    -20px -20px 60px rgba(0, 0, 0, 0.4);
  text-align: center;
  border-radius: 4px;
  overflow: hidden;
  .card-container {
    display: grid;
    /* height: 40vh; */
    cursor: pointer;
    img {
      grid-area: 1/1;
      width: 100%;
      height: 35vh;
      object-fit: cover;
    }
    h3 {
      grid-area: 1/1;
      align-self: flex-end;
      padding-bottom: 2rem;
      background-color: rgba(0, 0, 0, 0.562);
      color: #ebebeb;
    }
  }
`;
export default Game;
