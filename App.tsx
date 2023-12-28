import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/routes';

const App = () => {
  return (
    <>
      <Routes />
      <StatusBar style="auto" />
    </>
  );
}

export default App