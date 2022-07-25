import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import AboutMe from './pages/aboutme';
import Home from './pages/home'
import Work from './pages/work';

function App() {
  return (
      <BrowserRouter>

        <Routes>         
          <Route  path="/" element={<Home />} />    
          <Route  path="/aboutme" element={<AboutMe />} />         
          <Route  path="/work" element={<Work />} />         

        </Routes>

      </BrowserRouter>

  );
}

export default App;
