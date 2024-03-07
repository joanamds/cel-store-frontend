import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [role, setRole] = useState('client'); // default role

  return (
    <UserContext.Provider value={{ role, setRole }}>
      {children}
    </UserContext.Provider>
  );
}