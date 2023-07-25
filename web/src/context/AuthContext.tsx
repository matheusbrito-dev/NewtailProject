import React, { createContext } from 'react';
import useAuth from './hooks/useAuth';


type LoginBody = {
  username: string,
  password: string
};

const Context = createContext({
  loading: false,
  authenticated: false,
  handleLogin: (body: LoginBody) => Promise.resolve(false),
  handleLogout: () => { }
});

function AuthProvider({ children }) {
  const { authenticated, loading, handleLogin, handleLogout } = useAuth();

  return (
    <Context.Provider value={{ loading, authenticated, handleLogin, handleLogout }}>
      {children}
    </Context.Provider >
  );
}

export { Context, AuthProvider }