import { useState, useEffect } from 'react';
// components
import Dropdown from './Dropdown';
// styling
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
const SelectInput = ({
  options,
  activeOption,
  setActiveOption,
  index,
  label,
}) => {
  const [openOptions, setOpenOptions] = useState(false);

  useEffect(() => {
    setActiveOption(options[0]);
  }, [setActiveOption, options]);
  return (
    <StyledSelect className='form-group '>
      <label>{label}</label>

      <div
        className='select-header'
        onClick={() => setOpenOptions(openOptions === index ? false : index)}
      >
        <span>{activeOption.name}</span>
        <FontAwesomeIcon icon={openOptions ? faAngleUp : faAngleDown} />
      </div>
      <Dropdown
        options={options}
        setActiveOption={setActiveOption}
        openList={openOptions}
        index={index}
        setOpenList={setOpenOptions}
      />
    </StyledSelect>
  );
};
const StyledSelect = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  label {
    font-size: 12px;
    color: gray;
  }

  position: relative;

  cursor: pointer;
  .select-header {
    background-color: #262247;
    font-size: 14px;
    padding: 1rem;
    /* padding-right: 0.5rem; */
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
  }
  svg {
    margin-left: 1rem;
  }
`;
export default SelectInput;
