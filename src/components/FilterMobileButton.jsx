import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SelectInput from './SelectInput';
import Sidebar from './Sidebar2';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

const FilterMobileButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <StyledFiltersAndSort>
      <AnimateSharedLayout type='crossfade'>
        <StyledFilterButton
          layoutId={'sidebar'}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Close ' : 'More Options'}
        </StyledFilterButton>
        {isOpen && (
          <AnimatePresence>
            <Sidebar open={isOpen} />
          </AnimatePresence>
        )}
      </AnimateSharedLayout>
    </StyledFiltersAndSort>
  );
};
const StyledFiltersAndSort = styled.div`
  background-color: #262247;
  margin: 1rem 0.5rem;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  .select-group {
    display: flex;
    justify-content: flex-end;
  }
`;
const StyledFilterButton = styled(motion.div)`
  padding: 1rem 2rem;
  background-color: #262247;
  text-align: center;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  font-size: 1rem;
`;
export default FilterMobileButton;
