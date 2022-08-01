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
import VirtualScroll from "virtual-scroll";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

import { TweenLite } from "gsap/gsap-core";

gsap.registerPlugin(MotionPathPlugin);

function Slider(props) {

  const ref = useRef();
  const bref  = useRef();
  const target= useRef()
  const [target_pos, SetTargetPos] = useState({

    targetPosY: 0,
    slideTransform: 0,
    oldSlideTransform: 0,
    oldDeltaY: 0,
    leave: false,
    directionQueue: '',
    mousemoveIsActive: false,
    rotationX: 0,
    rotationY: 0,


  });

  function debounce(e){
    console.log("here")
    SetTargetPos((prev) => ({
      ...prev,
      targetPosY : 0
    }))
    gsap.to(bref.current, {y: 0, force3D: true})

    setFlag((prev) => prev  + 1)
  }

  const[flag, setFlag] = useState(0)

  let debounceBackToSlide = _.debounce(debounce, 200);

  function handleScroll(event){

    let targetModifier = event.deltaY

    console.log(targetModifier)

    SetTargetPos( (prev) => ( { 
      ...prev,
      targetPosY : prev.targetPosY + targetModifier,
      oldDeltaY : event.deltaY 
    }))

    setFlag(flag => flag+1)
    debounceBackToSlide()

  }

  const obj = {
 
    debounceBackToSlide: function (){
      _.debounce(this.backToSlide, 200);
    },
    backToSlide: function () {
      console.log("this", this);
    }

  }


  const [state, setState] = useState(obj);

  function resetWheel(){

    SetTargetPos((prev) => ({
        ...prev,
        targetPosY : 0,
        slideTransform : 0,
        oldDeltaY : 0,
        directionQueue : '',
    }))

      gsap.to(bref.current, {y: 0, force3D: true})
  }

 function getRoundedValue(valueToRound){
    let roundedValue = valueToRound * 1000
      roundedValue = Math.round(roundedValue)
      roundedValue = roundedValue / 1000

      return roundedValue
  }


  function prevSlide(){
    console.log("move previous")
    gsap.to(target.current, { y : "-100", force3D : true})
  }

  function nextSlide(){
    console.log("move next")

    gsap.to(target.current, { y : "+100", force3D : true})

  }


  function wheelLoop(){

    let slideLimit = 60
    let newSlideTransform = target_pos.slideTransform + (target_pos.targetPosY - target_pos.slideTransform) * .09
        newSlideTransform =  getRoundedValue(newSlideTransform)

  
    if(newSlideTransform !== target_pos.oldSlideTransform)
      {
        SetTargetPos((prev) => ({
        ...prev,
        oldSlideTransform : prev.slideTransform,
        slideTransform : newSlideTransform

      }))         
      gsap.to(bref.current, {y: target_pos.slideTransform, force3D: true})
    }
    console.log("wheel loop - ", target_pos.slideTransform)

    if(target_pos.slideTransform <= -slideLimit ){
      nextSlide()
      _.delay(resetWheel,500)

    }
    else if (target_pos.slideTransform >= slideLimit){
      prevSlide()
      _.delay(resetWheel,500)

    }else {
      // requestAnimationFrame(wheelLoop)
    }

  }

  useEffect(() => {
    const handleState = setState;

    let vs = new VirtualScroll({
      el: ref.current,
      mouseMultiplier: 0.4,
      keyStep: 400,
    });

    vs.on(handleScroll);

    return () => {
      vs.destroy();
    };
  }, []);


  useEffect(() =>{

    wheelLoop()
    
  }, [flag, bref])
  

  return (
    <ContainerFluid h="100vh" bg="white" of="hidden">
      {/* <NavBar /> */}
      {/* <Intro /> */}

      <Container ref={ref} h="100vh" w="100%" bg="black">
        <Box
          w="100px"
          h="100px"
          bg="red"
          pos="absolute"
          trans="all 0.5s ease"
          ref = {bref}
          ></Box>

        <Box
          w = "100px"
          h = "100px"
          bg = "blue"
          pos = "absolute"
          left = "40%"
          top = "40%"
          ref = {target}
        >

        </Box>
          
      </Container>
    </ContainerFluid>
  );
}

export default Slider;
