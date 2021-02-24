import { useEffect } from 'react';

const useOutsideClick = (ref, callback) => {
  const handleClickOutside = (e) => {
    if (ref && ref.current && !ref.current.contains(e.target)) {
      // inside click
      callback();
      return;
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};

export default useOutsideClick;
