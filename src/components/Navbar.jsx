import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion';
const Navbar = () => {
  const [searchBar, setSearchBar] = useState('');
  const submitSearchHandler = (e) => {
    e.preventDefault();
    setSearchBar(searchBar);
    console.log(searchBar);
  };
  const searchInputHandler = (e) => {
    setSearchBar(e.target.value);
  };
  return (
    <AnimateSharedLayout type='crossfade'>
      <StyledNavbar>
        <div className='logo'>
          <Link to='/game'>GME</Link>
        </div>
        <AnimatePresence>
          {
            <form onSubmit={submitSearchHandler} className='searchContainer'>
              <StyledSearchBar
                layoutId='search'
                type='text'
                placeholder='search'
                onChange={searchInputHandler}
              />
            </form>
          }
        </AnimatePresence>
        <ul>
          <li>
            <Link to='/search'>Search</Link>
          </li>
          <li>
            <Link to='/browse'>Browse Games</Link>
          </li>
          <li>
            <a href='#'>Game Developers</a>
          </li>
          <li>
            <a href='#'>Best by Year</a>
          </li>
        </ul>
      </StyledNavbar>
    </AnimateSharedLayout>
  );
};

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2rem 5rem;

  ul {
    display: flex;
    list-style: none;
    align-items: center;
    li {
      margin-right: 3rem;
      a {
        color: #b4b4b4;
      }
    }
  }
  .searchContainer {
    margin-left: 10%;
  }
`;

const StyledSearchBar = styled(motion.input)`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 0.75rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  &::placeholder {
    color: #b4b4b4a2;
  }
`;

export default Navbar;
