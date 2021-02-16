// import { useState } from 'react';
// // import { useHistory } from 'react-router-dom';
// // Styles and Animations
// import styled from 'styled-components';
// import { motion } from 'framer-motion';
// // Redux and Routes
// import { useDispatch } from 'react-redux';
// import { fetchSearch } from '../actions/gamesAction';

// const Nav = ({ backgroundGames }) => {
//   const dispatch = useDispatch();
//   const [textInput, setTextInput] = useState('');

//   const inputHandler = (e) => {
//     setTextInput(e.target.value);
//   };
//   const submitSearch = (e) => {
//     e.preventDefault();
//     dispatch(fetchSearch(textInput));
//     setTextInput('');
//   };
//   // const bgImages = backgroundGames.slice(0, 8);
//   // console.log(bgImages);
//   return (
//     <StyledNav>
//       <StyledBgContainer>
//         {/* {backgroundGames && (
//           <img
//             src={backgroundGames[0].background_image}
//             alt=''
//             loading='lazy'
//             key={backgroundGames.name}
//           />
//         )} */}
//       </StyledBgContainer>
//       <Logo className='logo-container'>
//         <h1>Logo</h1>
//       </Logo>
//       <form className='search'>
//         <input type='text' onChange={inputHandler} value={textInput} />
//         <button type='submit' onClick={submitSearch}>
//           Search
//         </button>
//       </form>
//     </StyledNav>
//   );
// };
// const StyledNav = styled(motion.nav)`
//   padding: 3rem 0rem;

//   text-align: center;
//   position: relative;

//   input {
//     width: 30%;
//     font-size: 1.5rem;
//     padding: 0.5rem;
//     border: none;
//     margin-top: 1rem;
//     box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
//     outline: none;
//   }
//   button {
//     font-size: 1.5rem;
//     border: none;
//     padding: 0.5rem 2rem;
//     cursor: pointer;
//     background: #ff7676;
//     color: white;
//   }
//   form {
//     margin: 3rem 1rem 6rem;
//   }
// `;

// const Logo = styled(motion.div)`
//   display: flex;
//   justify-content: center;
//   padding: 1rem;
//   margin-top: 5rem;

//   img {
//     height: 2rem;
//     width: 2rem;
//   }
// `;
// const StyledBgContainer = styled.div`
//   display: flex;
//   position: absolute;
//   z-index: -1;
//   height: 100vh;
//   width: 100%;
//   top: 0;
//   left: 0;
//   /* background: rgba(0, 0, 0, 0.6); */
//   img {
//     width: 100%;
//     object-fit: cover;
//     height: 100%;
//   }
// `;
// export default Nav;
