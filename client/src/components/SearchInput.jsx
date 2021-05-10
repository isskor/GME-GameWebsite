import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchInput } from '../actions/searchAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
const SearchInput = ({ label }) => {
  const dispatch = useDispatch();
  const { searchTextInput } = useSelector((state) => state.filters);
  //   const [textInput, setTextInput] = useState('');

  const inputHandler = (e) => {
    dispatch(searchInput(e.target.value));
  };

  const clearTextHandler = (e) => {
    dispatch(searchInput(''));
  };

  return (
    <StyledSearchInput className='form-group'>
      {label && (
        <label>{searchTextInput ? 'Press Enter To Search' : 'Search'}</label>
      )}
      <div className=' searchInput'>
        <input
          type='text'
          placeholder='search games'
          onChange={inputHandler}
          value={searchTextInput}
        />
        {label && (
          <figure onClick={() => clearTextHandler()}>
            <FontAwesomeIcon
              icon={searchTextInput ? faTimesCircle : faSearch}
            ></FontAwesomeIcon>
          </figure>
        )}
      </div>
    </StyledSearchInput>
  );
};

const StyledSearchInput = styled.div`
  .searchInput {
    display: flex;
    background-color: #262247;
    border-radius: 4px;
    overflow: hidden;
  }
  input {
    width: 100%;
    margin: 0;
    /* border-radius: 4px; */
    padding: 1rem;
    /* margin: 0 1rem; */
    outline: none;
    border: none;
    background-color: #262247;
    color: white;
  }
  figure {
    padding: 1rem;
    background-color: transparent;
    border: none;
    outline: none;
    color: #35bffe;
    cursor: pointer;
    &:hover {
      color: rgba(252, 28, 103, 0.7);
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #262247 inset !important;
    -webkit-text-fill-color: #eee !important;
  }
  label {
    margin-left: 0.5rem;
    font-size: 12px;
    color: gray;
  }
`;

export default SearchInput;
