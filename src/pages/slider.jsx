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

  const animateFrame = useRef()
  const prevAnimateFrame = useRef()


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

    console.log("debounce, here")

    SetTargetPos((prev) => ({
      ...prev,
      targetPosY : 0
    }))
    // TweenLite.set(bref.current, {y: 0, force3D: true})

  }
  const[newSlideTransform, setNewSlideTransform] = useState(0)

  const[flag, setFlag] = useState(0)

  let debounceBackToSlide = _.debounce(debounce, 200);

  function handleScroll(event){

    let targetModifier = event.deltaY
    
    
    SetTargetPos( (prev) => ( { 
      ...prev,
      targetPosY : prev.targetPosY + targetModifier,
      oldDeltaY : event.deltaY 
    }))

    debounceBackToSlide()

  }



  function resetWheel(){

    SetTargetPos((prev) => ({
        ...prev,
        targetPosY : 0,
        slideTransform : 0,
        oldDeltaY : 0,
        directionQueue : '',
    }))

      // gsap.to(bref.current, {y: 0, force3D: true})
  }

 function getRoundedValue(valueToRound){
  
  let roundedValue = valueToRound * 1000
      roundedValue = Math.round(roundedValue)
      roundedValue = roundedValue / 1000

      return roundedValue
  }


  function prevSlide(){
    console.log("move previous")
    // gsap.to(target.current, { y : 0, force3D : true})
  }

  function nextSlide(){
    console.log("move next")

    // gsap.to(target.current, { y : 0, force3D : true})

  }


  function wheelLoop(time){

    let newSlideTransformTemp = target_pos.slideTransform + (target_pos.targetPosY - target_pos.slideTransform) * .09
   
    newSlideTransformTemp =  getRoundedValue(newSlideTransformTemp)

    setNewSlideTransform( () => newSlideTransformTemp)

    animateFrame.current = requestAnimationFrame(wheelLoop)


  }


  useEffect(() => {

    const slideLimit = 165
    console.log("gsap update")

    gsap.to(ref.current, {y: target_pos.slideTransform, force3D: true})

    if(target_pos.slideTransform <= -slideLimit ){
      nextSlide()
      _.delay(resetWheel,500)

    }
    else if (target_pos.slideTransform >= slideLimit){
      prevSlide()
      _.delay(resetWheel,500)

    }
    else{

      animateFrame.current = requestAnimationFrame(wheelLoop)

    }

  }, [newSlideTransform])

  useEffect(() => {

    let vs = new VirtualScroll({
      el: ref.current,
      mouseMultiplier: 0.4,
      keyStep: 400,
    });

    vs.on(handleScroll);

    wheelLoop()

    return () => {
      vs.destroy();
    };


  }, []);


 


  


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
          >
      {newSlideTransform}

          </Box>

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
