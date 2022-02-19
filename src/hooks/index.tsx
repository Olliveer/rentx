import React, { ReactNode } from 'react';
import { AuthProvider } from '../context/authContext';

type AuthProviderProps = {
  children: ReactNode;
};

function AppProvider({ children }: AuthProviderProps) {
  return <AuthProvider>{children}</AuthProvider>;
}

export { AppProvider };
