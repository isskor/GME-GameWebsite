import { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion';
import SearchInput from './SearchInput';
import useOutsideClick from './useOutsideClick';
const Navbar = () => {
  const [searchBarActive, setSearchBarActive] = useState(false);
  const navSearchRef = useRef();
  const history = useHistory();
  const submitSearchHandler = (e) => {
    e.preventDefault();
    history.push('/browse');
  };

  const handleSearchClick = () => {
    console.log(searchBarActive);
    setSearchBarActive(false);
  };
  useOutsideClick(navSearchRef, handleSearchClick);
  return (
    <AnimateSharedLayout type='crossfade'>
      <StyledNavbar>
        <div className='logo'>
          <Link to='/game' className={`${searchBarActive ? 'smaller' : ''}`}>
            GME
          </Link>
        </div>
        <AnimatePresence>
          {
            <form
              ref={navSearchRef}
              onSubmit={submitSearchHandler}
              className={`searchContainer ${searchBarActive ? 'active' : ''}`}
              onClick={() => setSearchBarActive(true)}
            >
              <SearchInput />
            </form>
          }
        </AnimatePresence>
        <div className='link'>
          <Link to='/browse' className={`${searchBarActive ? 'smaller' : ''}`}>
            Browse Games
          </Link>
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
    padding: 1rem 1rem 1rem 0;
    border-right: 1px solid gray;
    font-size: 1.2rem;
  }
  .link {
    padding: 1rem 0 1rem 1rem;
    border-left: 1px solid gray;
    flex-basis: 20%;
    align-self: center;
    text-align: end;
    font-size: 1.2rem;
  }
  a {
    color: #b4b4b4;
    transition: all 0.3s ease;
    &:hover {
      color: #35bffe;
    }
  }
  form {
    transition: all 1s ease;
  }
  .searchContainer {
    flex-basis: 50%;
    padding: 1rem;
  }
  .active {
    /* position: absolute; */
    flex-basis: 100%;
    @media (min-width: 768px) {
      flex-basis: 50%;
    }
  }
  .smaller {
    font-size: 0.6rem;
    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

export default Navbar;
