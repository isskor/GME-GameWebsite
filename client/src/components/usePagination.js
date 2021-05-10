import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { pageNumber } from '../actions/searchAction';
const usePagination = (list) => {
  const lastPage = Math.ceil(list.count / 10 > 100 ? 100 : list.count / 10); // set max pages = 100
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);

  const dispatch = useDispatch();
  function doPaging(curPage, totalPages = 20) {
    let min, pageLength;
    min = 1; // start page
    pageLength = 5; // display page length
    let paging = [];
    if (pageLength > totalPages) pageLength = totalPages;

    // find start position
    let start = curPage - Math.floor(pageLength / 2);
    start = Math.max(start, min);
    start = Math.min(start, min + totalPages - pageLength);
    //  return array from start position to start + length
    for (let i = start; i <= start + pageLength - 1; i++) {
      paging.push(i);
    }
    return paging;
  }

  useEffect(() => {
    setPages(doPaging(currentPage, lastPage));
    dispatch(pageNumber(currentPage));
  }, [currentPage, list, lastPage, dispatch]);

  return { pages, currentPage, setCurrentPage, lastPage };
};

export default usePagination;
