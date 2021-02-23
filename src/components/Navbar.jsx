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
        <div className='link'>
          <Link to='/browse'>Browse Games</Link>
        </div>
      </StyledNavbar>
    </AnimateSharedLayout>
  );
};

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  /* padding: 1rem 5rem; */
  width: 80%;
  margin: 0 auto;
  .logo {
    align-self: center;
    flex-basis: 20%;
    padding: 1rem 0;
    border-right: 1px solid gray;
    font-size: 1.2rem;
  }
  .link {
    padding: 1rem 0;
    border-left: 1px solid gray;
    flex-basis: 20%;
    align-self: center;
    text-align: end;
    height: 100%;
  }
  a {
    color: #b4b4b4;
    transition: all 0.3s ease;
    &:hover {
      color: #35bffe;
    }
  }
  .searchContainer {
    flex-basis: 50%;
    padding: 1rem;
  }
`;

const StyledSearchBar = styled(motion.input)`
  padding: 0.5rem 1rem;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 0.75rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #262247;
  &::placeholder {
    color: #b4b4b4a2;
  }
`;

export default Navbar;
