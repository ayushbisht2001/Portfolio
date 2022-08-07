import React, { useRef, useEffect, useState } from "react";
import Intro from "../components/home/intro";
import {
  Container,
  ContainerFluid,
} from "../utility/styled_components/container";
import NavBar from "../components/navigation/NavBar";
import Slider from "./slider";
import { SlideContextProvider } from "../store/slider_store";
 
function Home(props) {
 

  return (
    <ContainerFluid h="100vh"  
    bg = "linear-gradient(142.47deg, rgba(233, 227, 227, 0.08) 30.57%, rgba(104, 42, 233, 0.24) 65.26%, rgba(104, 42, 233, 0.29) 81.64%, rgba(104, 42, 233, 0.37) 94.68%)"
    
    
    >
      {/* <NavBar /> */}
      {/* <Intro /> */}
      <SlideContextProvider>
          <Slider />
      </SlideContextProvider>
   
    </ContainerFluid>
  );
}

export default Home;
