import { useState } from 'react';

import React from 'react';

const usePageAnim = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  console.log(page);
  return [page, direction, setPage];
};

export default usePageAnim;
