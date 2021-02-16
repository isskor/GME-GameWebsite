import React, { useState, useEffect } from 'react';
import styled, { withTheme } from 'styled-components';
import { pageNumber } from '../actions/searchAction.js';
import { useDispatch } from 'react-redux';
import usePagination from './usePagination';

const Pagination = ({ list }) => {
  const dispatch = useDispatch();
  const { setCurrentPage, currentPage, pages, lastPage } = usePagination(list);
  const currentPageHandler = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    console.log('change from pagi');
  }, [pages]);
  return (
    <StyledPageButtons>
      <div className='btn-container'>
        <button
          disabled={currentPage === 1}
          onClick={() => currentPageHandler(currentPage - 1)}
        >
          Prev
        </button>
      </div>
      {pages.map((page) => (
        <div
          className={`btn-container ${page == currentPage ? 'current' : ''}`}
        >
          <button onClick={() => currentPageHandler(page)}>{page}</button>
        </div>
      ))}

      <div className='btn-container'>
        <button
          disabled={currentPage === lastPage}
          onClick={() => currentPageHandler(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </StyledPageButtons>
  );
};
const StyledPageButtons = styled.div`
  color: white;
  grid-column: 3/11;
  justify-self: center;
  padding: 3rem;
  display: flex;

  justify-content: center;
  align-items: center;
  .btn-container {
    display: flex;
    margin: 1rem;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border: 2px solid#35bffe;
    border-radius: 50%;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.2);
      background-color: #35bffe;
      button {
        color: white;
        width: 100%;
        height: 100%;
      }
    }
  }
  .current {
    background-color: #35bffe;
    transform: scale(1.2);
    box-shadow: 0 20px 50px rgba(7, 28, 216, 0.6);
    button {
      color: white;
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
  }
`;
export default Pagination;
