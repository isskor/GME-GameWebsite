import { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
// components
import SearchInput from './SearchInput';
import useOutsideClick from './useOutsideClick';
// styling
import styled from 'styled-components';
const Navbar = () => {
  const [searchBarActive, setSearchBarActive] = useState(false);
  const navSearchRef = useRef();
  const history = useHistory();
  const submitSearchHandler = (e) => {
    e.preventDefault();
    history.push('/browse');
  };

  const handleSearchClick = () => {
    setSearchBarActive(false);
  };
  useOutsideClick(navSearchRef, handleSearchClick);
  return (
    <StyledNavbar>
      <div className='logo'>
        <Link to='/game' className={`${searchBarActive ? 'smaller' : ''}`}>
          GME
        </Link>
      </div>

      <div className='link'>
        <Link to='/browse' className={`${searchBarActive ? 'smaller' : ''}`}>
          Browse Games
        </Link>
      </div>
      <form
        ref={navSearchRef}
        onSubmit={submitSearchHandler}
        className={`searchContainer ${searchBarActive ? 'active' : ''}`}
        onClick={() => setSearchBarActive(true)}
      >
        <SearchInput />
      </form>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  display: flex;
  width: 80%;
  margin: 0 auto;
  gap: 1rem;
  @media (min-width: 576px) {
    gap: 3rem;
  }

  .logo,
  .link {
    align-self: center;
    font-size: 0.9rem;
    padding: 1rem;
    @media (min-width: 576px) {
      font-size: 1.2rem;
    }
  }
  a {
    color: #b4b4b4;
    transition: all 0.3s ease;
    font-family: 'Rubik', sans-serif;

    &:hover {
      color: #35bffe;
    }
  }
  form {
    transition: all 1s ease;
  }
  .searchContainer {
    /* flex-basis: 50%; */
    flex: 1;
    padding: 1rem;
    display: none;
    @media (min-width: 576px) {
      display: inline-block;
    }
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
