import React, {useEffect} from "react";
import { handleLiveShape } from "../../../utility";
import { BsConeStriped } from "react-icons/bs";
import { Circle, Square, Triangle } from "./shapes";
import { Box } from "../../../utility/styled_components/box";

const LiveShape = (props) => {
  const {  scale = 1, shapeTransitionHandler } = props;
  const ref = useRef();

  useEffect(()=>{    
    
    if(isLive)
    window.addEventListener("mousemove", (e) => shapeTransitionHandler ? shapeTransitionHandler(e, ref, props) : handleLiveShape(e, ref, props));

    return () =>{
      window.removeEventListener('mousemove', (e) => shapeTransitionHandler ? shapeTransitionHandler(e, ref, props) :  handleLiveShape(e, ref, props) );
    };
  },[]);
  return(

    type == "cirlce" ? <Circle ref = {ref} {...props} />
    : (type == "triagle" ? <Triangle ref= {ref} {...props} />
    : ( type == "square" ? <Square ref={ref} {...props} /> 
      : <Box ref = {ref} {...props}  />
    )
    )
  );
};

export default LiveShape;
