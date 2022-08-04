import React, { useRef, useEffect, useState } from "react";
import Intro from "../components/home/intro";
import {
  Container,
  ContainerFluid,
} from "../utility/styled_components/container";
import NavBar from "../components/navigation/NavBar";
import AboutSlide from "../components/home/about";
import Wrapper from "../components/reusable_components/wrapper";
import { getElementError } from "@testing-library/react";
import { getElementXY } from "../utility";
import { Box } from "../utility/styled_components/box";
import _ from "lodash";
import VS from "./virtualScroll"
import SliderBg from "../components/reusable_components/SliderBg";
import Testimonials from "../components/home/testimonials";
import Contact from "../components/home/contact_me";

function Slider(props) {


  const[vs, setVS] = useState(null)
  const[slide, setSlideState]  = useState({

    slide_id : 0,
    direction : "down",
    transformY : 0

  })

  const[selectSlide, setSlide] = useState(0)
  const handler_ref = useRef()
  const target_ref = useRef()

  const handleScroll = (event) =>{
   
    let targetModifier = event.deltaY
    vs.state.targetPosY += targetModifier
    vs.state.oldDeltaY = event.deltaY
    vs.debouncedBackToSlide()
    console.log("handle scroll babes")
  }

  useEffect(() => {
    
    let vs_obj =  new VS(handler_ref.current, target_ref.current, setSlideState)
    setVS(vs_obj)


    return () => {
      vs_obj.destroy();
    };


  }, []);


  useEffect(() => {

    if(vs){
    
    let bindWheel = vs.wheelLoop.bind(vs);
    requestAnimationFrame(bindWheel)

    }

  }, [vs])
  

useEffect(() => {

  if(vs){

    console.log("state reset")
    // vs.resetWheel()
    
    setTimeout(() => {

      setSlide(slide.slide_id)
    }, 200)
    setTimeout(() =>{
      vs.sliderIsAnimating = false;

    }, [1000])
  }
}, [slide])
  return (
    <ContainerFluid    pos = "auto"  of = "hidden" bg = "transparent" > 
      <SliderBg   {...slide} />

       <Container h="100vh" ref={handler_ref} w="100%"  of = "hidden"
        bg = "linear-gradient(142.47deg, rgba(233, 227, 227, 0.08) 30.57%, rgba(104, 42, 233, 0.24) 65.26%, rgba(104, 42, 233, 0.29) 81.64%, rgba(104, 42, 233, 0.37) 94.68%)"
       >          
        <AboutSlide visible = {selectSlide === 0} {...slide} ref = {target_ref}  />
        <Testimonials visible = {selectSlide === 1} {...slide} ref = {target_ref} />
        <Contact visible = {selectSlide === 2} {...slide} ref = {target_ref}  />

      </Container>
    </ContainerFluid>
  );
}

export default Slider;
