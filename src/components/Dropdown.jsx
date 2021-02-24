import { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useOutsideClick from './useOutsideClick';
const Dropdown = ({
  options,
  setActiveOption,
  openList,
  index,
  setOpenList,
}) => {
  const optionRef = useRef();

  // const handleClickOutside = useCallback(
  //   (e) => {
  //     if (node && node.current && !node.current.contains(e.target)) {
  //       // inside click
  //       setOpenList(false);
  //       return;
  //     }
  //     console.log('outside click');
  //   },
  //   [setOpenList]
  // );
  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // });
  const handleOutsideClick = () => {
    setOpenList(false);
  };

  useOutsideClick(optionRef, handleOutsideClick);
  const handleInsideClick = (value) => {
    setActiveOption(value);
    setOpenList(false);
  };

  return (
    <div ref={optionRef}>
      {openList === index && (
        <StyledDropdown>
          <ul>
            {options.map((item) => (
              <li key={item.name} onClick={() => handleInsideClick(item)}>
                {item.name}
              </li>
            ))}
          </ul>
        </StyledDropdown>
      )}
    </div>
  );
};
const StyledDropdown = styled(motion.div)`
  position: absolute;

  width: 100%;
  ul {
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    background-color: #262247;
    list-style: none;
    li {
      padding: 1rem;
    }
  }
`;
export default Dropdown;
