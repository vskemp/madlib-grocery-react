import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grocery from './Grocery'; 

function App() {
  return (
    <div>
      <h1>Grocery List</h1>
      <Grocery item="pasta" />
      <Grocery item="soup" />
      <Grocery item="cereal" />
    </div>
  );
}

export default App;
