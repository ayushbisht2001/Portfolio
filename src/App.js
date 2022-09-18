import React, {useContext} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import AboutMe from './pages/aboutme';
import Home from './pages/home'
import Work from './pages/works';
import Project from './pages/projects';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './store/theme_store';


function App() {
  const { state  : {
    curTheme
  }, themeContextDispath} = useContext(ThemeContext)

  return (
      <ThemeProvider theme = {curTheme} >
      <BrowserRouter>
        <Routes>         
          <Route  path="/" element={<Home />} />    
          <Route  path="/aboutme" element={<AboutMe />} />         
          <Route  path="/works" element={<Work />} />         
          <Route  path="/projects" element={<Project />} />         
        </Routes>

      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
