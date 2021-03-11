import { useEffect } from 'react';

export const useLocal = (citas) => {
  const ls = localStorage;
  let initialCitas = JSON.parse(ls.getItem('citas'));
  if (!initialCitas) initialCitas = [];
  useEffect(() => {
    if (initialCitas) ls.getItem('citas', JSON.stringify(citas));
    else ls.setItem('citas', JSON.stringify([]));
  }, [citas]);

  return { initialCitas };
};
