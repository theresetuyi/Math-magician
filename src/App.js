import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <section className="section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote category="math" />} />
          </Routes>
        </section>
      </div>
    </>

  );
}

export default App;
