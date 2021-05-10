import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import usePagination from './usePagination';

const Pagination = ({ list }) => {
  const { currentPage: cp } = useSelector((state) => state.filters);
  const { setCurrentPage, currentPage, pages, lastPage } = usePagination(list);
  const currentPageHandler = useCallback(
    (page) => {
      setCurrentPage(page);
    },
    [setCurrentPage]
  );
  useEffect(() => {
    if (cp === '&page=1') currentPageHandler(1);
  }, [cp, currentPageHandler]);

  return (
    <AnimateSharedLayout type='switch'>
      <StyledPageButtons>
        <motion.div className='btn-nextPrev'>
          <motion.button
            disabled={currentPage === 1}
            onClick={() => currentPageHandler(currentPage - 1)}
          >
            Prev
          </motion.button>
        </motion.div>
        <div className='btn-nextPrev'>
          <button
            disabled={currentPage === lastPage}
            onClick={() => currentPageHandler(currentPage + 1)}
          >
            Next
          </button>
        </div>
        <div className='pageNumbers'>
          {pages.map((page) => {
            return (
              <motion.div
                layout
                key={page}
                className={`btn-container ${
                  page === currentPage ? 'current' : ''
                }`}
              >
                <button onClick={() => currentPageHandler(page)}>{page}</button>
              </motion.div>
            );
          })}
        </div>
      </StyledPageButtons>
    </AnimateSharedLayout>
  );
};
const StyledPageButtons = styled.div`
  color: white;
  grid-column: 3/12;
  justify-self: center;
  /* padding: 3rem; */
  padding: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 576px) {
    justify-content: space-around;
    width: 100%;
  }
  .btn-container {
    display: flex;
    margin: 1rem;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 30px;
    height: 30px;
    /* border: 2px solid#35bffe; */
    border-radius: 50%;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.2);
      background-color: #35bffe;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        height: 40px;
        width: 40px;
        background-color: #35bffe;
      }
    }
  }
  .current {
    /* transform: scale(1.2); */
    box-shadow: 0 20px 50px rgba(7, 28, 216, 0.6);
    button {
      color: white;
    }
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      height: 40px;
      width: 40px;
      background-color: #35bffe;
    }
  }
  button {
    font-size: 1.2rem;
    background-color: transparent;
    border: none;
    color: #35bffe;
    position: relative;
    cursor: pointer;
    outline: none;
    transition: all 0.3s ease;
    width: 100%;
    height: 100%;
    &:hover {
      color: white;
    }
  }
  .pageNumbers {
    margin-top: 1rem;
    flex-basis: 100%;
    display: flex;
    flex-wrap: wrap;
    align-self: center;
    justify-content: center;
  }
`;
export default Pagination;
