import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PercentageCircle = ({
  percentage,
  stroke,
  emptyStroke,
  emptyStrokeOpacity = 0.25,
  duration = 0.5,
  delay = 0.5,
  size = 100,
  strokeWidth = 6,
}) => {
  const radius = 45;
  const circumference = Math.ceil(2 * Math.PI * radius);
  const fillPercentage = Math.abs(
    Math.ceil((circumference / 100) * (percentage - 100))
  );

  const transition = {
    duration: duration,
    delay: delay,
    ease: 'easeIn',
  };
  const variants = {
    hidden: {
      strokeDashoffset: circumference,
      transition,
    },
    show: {
      strokeDashoffset: fillPercentage,
      transition,
    },
  };
  return (
    <StyledCircleContainer>
      <p>{percentage}%</p>
      <svg
        viewBox='0 0 100 100'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        width={size}
        height={size}
      >
        <circle
          cx='50'
          cy='50'
          r={radius}
          className='circle'
          strokeWidth={strokeWidth}
          stroke={emptyStroke}
          strokeOpacity={emptyStrokeOpacity}
          fill='transparent'
        />
      </svg>
      <svg
        viewBox='0 0 100 100'
        width={size}
        height={size}
        style={{
          transform: 'rotate(-90deg)',
          overflow: 'visible',
        }}
      >
        <motion.circle
          cx='50'
          cy='50'
          r={radius}
          strokeWidth={strokeWidth}
          stroke={stroke}
          fill='transparent'
          strokeDashoffset={fillPercentage}
          strokeDasharray={circumference}
          variants={variants}
          initial='hidden'
          animate={'show'}
        />
      </svg>
    </StyledCircleContainer>
  );
};
const StyledCircleContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  p {
    grid-area: 1/1;
    color: white;
    font-size: 1rem;
  }
  svg {
    grid-area: 1/1;
  }
`;
export default PercentageCircle;
