"use client"
// AuthContext.tsx
import React, { createContext, useState, Dispatch } from 'react';

// Creating a type for the context
interface AuthContextType {
  email: string;
  setEmail: Dispatch<string>;
}

// Creating the context
export const AuthContext = createContext({} as AuthContextType);

// Creating a provider component
export const AuthProvider:  React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [email, setEmail] = useState<string>('');

  return (
    <AuthContext.Provider value={{ email, setEmail }}>
      {children}
    </AuthContext.Provider>
  );
};