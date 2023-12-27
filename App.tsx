import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './src/screens/Home';

const App = () => {
  return (
    <>
      <Home />
      <StatusBar style="auto" />
    </>
  );
}

export default App