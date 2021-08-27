import { createContext, useContext } from 'react';

export const context = createContext({});

export const { Provider } = context;

export const useGlobalContext = () => {
  return useContext(context);
};

export default context;