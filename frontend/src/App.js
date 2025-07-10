// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import RouterHandler from './RouterHandler';

function App() {
  return (
    <BrowserRouter>
      <RouterHandler />
    </BrowserRouter>
  );
}

export default App;
