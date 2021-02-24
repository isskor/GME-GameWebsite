import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// actions
import {
  clearAllFilters,
  resetPageNumber,
  clearQueryString,
} from '../actions/searchAction.js';
// styling
import styled from 'styled-components';

const ClearFiltersButton = () => {
  // component state and initial hooks
  const history = useHistory();
  const dispatch = useDispatch();
  const { platforms, genres, stores } = useSelector((state) => state.f);

  // Handlers
  const clearActiveHandler = () => {
    dispatch(clearAllFilters({ genres, platforms, stores }));
    // reset to page 1
    dispatch(resetPageNumber(1));
    dispatch(clearQueryString());
    history.push('/browse');
  };
  return (
    <div>
      <StyledButton onClick={clearActiveHandler}>Clear All</StyledButton>
    </div>
  );
};
const StyledButton = styled.button`
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #35bffe;
  opacity: 0.5;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 5px 30px #35bffe;
    opacity: 1;
    color: #eee;
  }
`;

export default ClearFiltersButton;
