import React, { createContext } from 'react';

const Context = createContext({teste: true });

function Provider ({ children }) {
  return (
    <Context.Provider value={{teste: true }}>
      {children}
    </Context.Provider>
  );
};

export {Context, Provider};