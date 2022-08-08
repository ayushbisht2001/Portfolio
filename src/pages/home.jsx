import React, { useRef, useEffect, useState } from "react";
import Intro from "../components/home/intro";
import {
  Container,
  ContainerFluid,
} from "../utility/styled_components/container";
import NavBar from "../components/navigation/NavBar";
import Slider from "./slider";
import { SlideContextProvider } from "../store/slider_store";
import SlideWrapper from "../components/reusable_components/SlideWrapper";
 
function Home(props) {
 

  return (
    <ContainerFluid h="100vh"  
    of = "hidden"
    >
      <NavBar />
      <SlideContextProvider>
        
        <Slider />

      </SlideContextProvider>
   
    </ContainerFluid>
  );
}

export default Home;
