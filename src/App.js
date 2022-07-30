import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import AboutMe from './pages/aboutme';
import Home from './pages/home'
import Work from './pages/works';
import Project from './pages/projects';


function App() {
  return (
      <BrowserRouter>

        <Routes>         
          <Route  path="/" element={<Home />} />    
          <Route  path="/aboutme" element={<AboutMe />} />         
          <Route  path="/works" element={<Work />} />         
          <Route  path="/projects" element={<Project />} />         
        </Routes>

      </BrowserRouter>

  );
}

export default App;
