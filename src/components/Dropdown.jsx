import { useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
const Dropdown = ({
  options,
  setActiveOption,
  openList,
  index,
  setOpenList,
}) => {
  const node = useRef();

  const handleClickOutside = useCallback(
    (e) => {
      if (node && node.current && node.current.contains(e.target)) {
        // inside click
        return;
      }
      setOpenList(false);
      console.log('outside click');
    },
    [setOpenList]
  );
  const handleInsideClick = (value) => {
    setActiveOption(value);
    setOpenList(false);
  };
  useEffect(() => {
    if (openList === index) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openList, index, handleClickOutside]);

  return (
    <div ref={node}>
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
