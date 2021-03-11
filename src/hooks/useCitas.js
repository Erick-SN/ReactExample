import { useState } from 'react';

export const useCitas = (initialState = []) => {
  const [cita, setCita] = useState(initialState);
  const createCita = (newCita) => {
    setCita([...cita, newCita]);
  };
  const deleteCita = (id) => {
    const citas = cita.filter((cita) => cita.id !== id);
    setCita(citas);
  };

  return { cita, createCita, deleteCita };
};
