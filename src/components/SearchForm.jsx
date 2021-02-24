import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
// components
import SearchInput from './SearchInput';
import SelectInput from './SelectInput';
// Styling and Animation
import styled from 'styled-components';
import useSearchFilter from '../components/useSearchFilter';
// actions
import { fetchSearch } from '../actions/gamesAction';
import {
  filterSortBy,
  filterPageSize,
  resetPageNumber,
} from '../actions/searchAction';

const SearchForm = () => {
  const dispatch = useDispatch();
  // get filters from redux state
  const { sortByList, pageList } = useSelector((state) => state.f);
  const { searchTextInput } = useSelector((state) => state.filters);
  // internal states

  const [sortBy, setSortBy] = useState({});

  const [pages, setPages] = useState({});

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

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(searchTextInput, location.search));
    dispatch(resetPageNumber());
  };

  useEffect(() => {
    dispatch(filterSortBy(sortBy.value));
    dispatch(filterPageSize(pages.value));
  }, [dispatch, pages, sortBy]);

  return (
    <StyledSearchForm className='searchForm' onSubmit={submitSearch}>
      <div className='search'>
        <SearchInput label={true} />
      </div>

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
