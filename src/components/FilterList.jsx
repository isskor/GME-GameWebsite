import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
const FilterList = ({
  list,
  listName,
  listStateSetter,
  listDispatch,
  isOpen,
  setIsOpen,
  index,
}) => {
  const dispatch = useDispatch();
  const activeHandler = (listItem) => {
    let newGenres = list.map((g) => {
      if (g === listItem) {
        g.active = !g.active;
      }
      return g;
    });
    let newPath = newGenres
      .filter((item) => item.active)
      .map((filteredItem) => filteredItem.id);

    let activeGenre = newGenres
      .filter((g) => g.active)
      .sort((a, b) => (a.name < b.name ? -1 : 1));

    let notActiveGenre = newGenres
      .filter((g) => !g.active)
      .sort((a, b) => (a.name < b.name ? -1 : 1));

    listStateSetter([...activeGenre, ...notActiveGenre]);
    dispatch(listDispatch(newPath));
  };
  const num = list.filter((item) => item.active).length;
  return (
    <StyledFilterList>
      <div
        className='list-title-container'
        onClick={() => setIsOpen(isOpen === index ? false : index)}
      >
        <div className='list-title'>
          {num > 0 && <p>{num ? num : ''}</p>}
          <h3>{listName}</h3>
        </div>
        <figure>
          <FontAwesomeIcon
            icon={faAngleRight}
            rotation={isOpen === index ? 90 : 0}
          />
        </figure>
      </div>

      {isOpen === index &&
        list.map((listItem) => (
          <li
            onClick={() => activeHandler(listItem)}
            className={listItem.active ? 'active' : ''}
            key={listItem.id}
          >
            <span>{listItem.name}</span>
          </li>
        ))}
    </StyledFilterList>
  );
};

const ActiveBorderStyle = css`
  border-left: 8px solid #35bffe;
  ::before {
    transition: all 0.3s ease;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    box-shadow: -30px 0 30px rgba(28, 207, 252, 0.521);
  }
`;

const StyledFilterList = styled(motion.div)`
  border-bottom: 1px solid rgba(129, 255, 255, 0.3);
  .list-title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 1rem;
    cursor: pointer;
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
    .list-title {
      display: flex;
      align-items: center;

      h3 {
        transition: all 0.3s ease;
        color: #35bffe;
        margin-left: 1rem;
        font-weight: normal;
        font-size: 1rem;
      }
      p {
        color: #35bffe;
        position: relative;
        font-size: 1.3rem;
        font-weight: 500;
        &::after {
          content: '';
          width: 2px;
          height: 2px;
          border-radius: 50%;
          box-shadow: 0 0 20px 05px #35bffe;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
    figure {
      color: #35bffe;
      font-size: 1.5rem;
      justify-self: flex-end;
    }
  }

  li {
    cursor: pointer;
    position: relative;
    transition: all 0.1s ease;
    ::after {
      content: '';
      position: absolute;
      width: 80%;
      left: 10%;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    &:hover {
      ${ActiveBorderStyle}
    }
    span {
      display: block;
      padding: 1rem 2rem;
      color: white;
      font-size: 14px;
    }
  }
  .active {
    ${ActiveBorderStyle}
    &:hover {
      border-left: 8px solid rgba(252, 28, 103, 0.7);

      ::before {
        box-shadow: -30px 0 30px rgba(252, 28, 103, 0.5);
      }
    }
  }
`;
export default FilterList;
