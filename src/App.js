import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

function App() {
  return (
    <div>
      <Quote category="math" />
      <Calculator />
    </div>
  );
}

export default App;
