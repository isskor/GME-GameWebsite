import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
// Styling and Animation
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faTimesCircle,
//   faSearch,
//   faAngleUp,
//   faAngleDown,
// } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import useSearchFilter from '../components/useSearchFilter';
// fetch
import { fetchSearch } from '../actions/gamesAction';
import {
  filterSortBy,
  filterPageSize,
  resetPageNumber,
} from '../actions/searchAction';
// import Dropdown from './Dropdown';
import SearchInput from './SearchInput';
import SelectInput from './SelectInput';

const SearchForm = () => {
  const dispatch = useDispatch();
  // get filters from redux state
  const { sortByList, pageList } = useSelector((state) => state.f);
  const { searchTextInput } = useSelector((state) => state.filters);
  // internal states
  // const [textInput, setTextInput] = useState('');
  const [sortBy, setSortBy] = useState({});
  // console.log(sortByList[0].name);
  const [pages, setPages] = useState({});
  // const [openList, setOpenList] = useState(false);
  // get Current Location
  const location = useLocation();
  const params = useParams();
  // fetch search
  useSearchFilter();
  useEffect(() => {
    if (params.id) return;
    dispatch(fetchSearch(searchTextInput, location.search));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, location.search]);

  // useEffect(() => {
  //   setSortBy(sortByList[0]);
  //   setPages(pageList[0]);
  // }, []);
  // handlers
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(searchTextInput, location.search));
    dispatch(resetPageNumber());
  };

  // const inputHandler = (e) => {
  //   setTextInput(e.target.value);
  // };
  // const clearTextHandler = (e) => {
  //   setTextInput('');
  // };

  useEffect(() => {
    dispatch(filterSortBy(sortBy.value));
    dispatch(filterPageSize(pages.value));
  }, [dispatch, pages, sortBy]);

  return (
    <StyledSearchForm className='searchForm' onSubmit={submitSearch}>
      <div className='search'>
        <SearchInput />
      </div>
      {/* <div className='form-group search'>
        <label>
          {textInput.length > 0 ? 'Press Enter To Search' : 'Search'}
        </label>
        <div className=' searchInput'>
          <input
            type='text'
            id='search'
            placeholder='search games'
            onChange={inputHandler}
            value={textInput}
          />
          <figure onClick={(e) => clearTextHandler()}>
            <FontAwesomeIcon
              icon={textInput ? faTimesCircle : faSearch}
            ></FontAwesomeIcon>
          </figure>
        </div>
      </div> */}
      {/* <div className='form-group dropdown sortby'>
        <label>Sort By</label>

        <div
          className='dropdown-header'
          onClick={() => setOpenList(openList === 1 ? false : 1)}
        >
          <span>{sortBy.name}</span>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <Dropdown
          list={sortByList}
          openList={openList}
          index={1}
          setItemActive={setSortBy}
          setOpenList={setOpenList}
        />
      </div> */}
      {/* <div className='form-group dropdown pages'>
        <label>pages</label>

        <div
          className='dropdown-header'
          onClick={() => setOpenList(openList === 2 ? false : 2)}
        >
          <span>{pages.name}</span>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <Dropdown
          list={pageList}
          openList={openList}
          index={2}
          setItemActive={setPages}
          setOpenList={setOpenList}
        />
      </div> */}
      <div className='sortby'>
        <SelectInput
          options={sortByList}
          activeOption={sortBy}
          index={2}
          setActiveOption={setSortBy}
          label={'Sort By'}
        />
      </div>
      <div className='pages'>
        <SelectInput
          options={pageList}
          activeOption={pages}
          index={3}
          setActiveOption={setPages}
          label={'Pages'}
          className={'pages'}
        />
      </div>
      {/* <FilterMobileButton /> */}
    </StyledSearchForm>
  );
};

const StyledSearchForm = styled.form`
  grid-area: 1/3/1/12;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  color: white;
  align-items: center;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.2);
  background: rgba(39, 19, 75, 0.9);
  /* rgba(39, 19, 75, 0.2) */
  border-radius: 4px;
  justify-content: space-between;
  @media (min-width: 576px) {
    flex-wrap: nowrap;
    gap: 1rem;
    padding-bottom: 1rem;
  }

  .search {
    /* flex-basis: 75%; */
    flex-basis: 100%;
    margin-bottom: 1rem;
    @media (min-width: 576px) {
      flex-basis: 75%;
      margin-bottom: 0;
    }
  }
  .sortby {
    flex-basis: 50%;
    @media (min-width: 576px) {
      flex-basis: 15%;
    }
  }
  .pages {
    flex-basis: 40%;
    @media (min-width: 576px) {
      flex-basis: 10%;
    }
  }
`;
export default SearchForm;
