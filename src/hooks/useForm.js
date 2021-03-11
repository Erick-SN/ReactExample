import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const resetState = () => setState(initialState);

  return { state, error, handleChange, resetState, setError };
};
