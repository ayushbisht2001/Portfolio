import React, {useEffect, useRef} from "react";
import { handleLiveShape } from "../../../utility";
import { BsConeStriped } from "react-icons/bs";
import { Circle, CurlyRing, Ring, Square, Triangle } from "./shapes";
import { Box } from "../../../utility/styled_components/box";

const LiveShape = (props) => {
  const {  scale = 1, shapeTransitionHandler, isLive, stype, tref } = props;
  const ref =  useRef();

  useEffect(()=>{    
    
    if(isLive)
    window.addEventListener("mousemove", (e) => shapeTransitionHandler ? shapeTransitionHandler(e, ref, props) : handleLiveShape(e, ref, props));

    return () =>{
      window.removeEventListener('mousemove', (e) => shapeTransitionHandler ? shapeTransitionHandler(e, ref, props) :  handleLiveShape(e, ref, props) );
    };
  },[]);
  return(

    stype === "circle" ? <Circle tref = {ref} {...props} />
    : (stype === "triangle" ? <Triangle tref= {ref} {...props} />
    : ( stype === "square" ? <Square tref={ref} {...props} /> 
      : ( stype === "ring" ? <Ring tref = {ref} {...props} /> 
        : (stype =="cring" ? <CurlyRing tref = {ref} {...props} /> 
        :  <Box ref = {ref} {...props}  />)  )  
    )
    )
  );
};

export default LiveShape;
