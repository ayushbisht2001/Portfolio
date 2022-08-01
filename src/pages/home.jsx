import React, { useRef, useEffect, useState } from "react";
import Intro from "../components/home/intro";
import {
  Container,
  ContainerFluid,
} from "../utility/styled_components/container";
import NavBar from "../components/navigation/NavBar";
import Slider from "./slider";
 
function Home(props) {
 

  return (
    <ContainerFluid h="100vh" bg="white" of="hidden">
      <NavBar />
      <Intro />
      {/* <Slider /> */}
   
    </ContainerFluid>
  );
}

export default Home;
