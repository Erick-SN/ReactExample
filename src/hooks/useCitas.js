import { useState } from 'react';

export const useCitas = (initialState = []) => {
  const [cita, setCita] = useState(initialState);
  const createCita = (newCita) => {
    setCita([...cita, newCita]);
  };
  return { cita, createCita };
};
