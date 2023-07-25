import React from 'react';

import './assets/styles/global.css';

import { AuthProvider } from './context/AuthContext';
import Routes from './Routes/routes';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
