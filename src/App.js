import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import News from './pages/News';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        {/* path="*" fonctionne si jamais l'url ne correspond a rien de declarer au dessus */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
