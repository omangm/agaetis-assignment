// src/context/AppwriteContext.js
import { createContext, useContext } from 'react';
import { account, databases, storage } from '../utils/appwrite';

const AppwriteContext = createContext();

export const useAppwrite = () => {
  return useContext(AppwriteContext);
};

export const AppwriteProvider = ({ children }) => {
  return (
    <AppwriteContext.Provider value={{ account, databases, storage }}>
      {children}
    </AppwriteContext.Provider>
  );
};
