import { useRef } from 'react';
// components
import useOutsideClick from './useOutsideClick';
// styling
import styled from 'styled-components';
import { motion } from 'framer-motion';
const Dropdown = ({
  options,
  setActiveOption,
  openList,
  index,
  setOpenList,
}) => {
  // components state and initial hooks
  const optionRef = useRef();

  // handlers
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
