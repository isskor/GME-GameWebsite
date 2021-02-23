import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState('');
  const isOpen = title === toggle;

  console.log(toggle);
  return (
    <motion.div
      layout
      className='question'
      onClick={() => setToggle(toggle === title ? false : title)}
    >
      <motion.h4 layout>
        {title}
        {toggle}
      </motion.h4>
      {toggle ? children : ''}
      <div className='faq-line'></div>
    </motion.div>
  );
};

export default Toggle;
