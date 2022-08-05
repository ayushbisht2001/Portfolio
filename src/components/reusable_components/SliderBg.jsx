import React, {useContext, useEffect, createRef, useRef} from 'react'
import { Container, ContainerFluid } from '../../utility/styled_components/container'
import { Box } from '../../utility/styled_components/box'
import { Triangle,  Rectangle, Circle } from '../animations/shapes/shapes';
import { sliderItemDownTransition, sliderItemUpTransition } from '../../utility/styled_components/keyframes';
import { css } from 'styled-components';
import { SlideContext } from '../../store/slider_store';
import gsap from 'gsap';



const slideOptionMapper = {
    0 :"triangle",
    1 : "cirlce",
    2 : "square"
}


const Items = (props) =>{

const{
         itype = "circle",
         ref

} = props;


return (
    itype === "triangle" ? 
    <Box  {...props} ref = {ref}  w = "100px" h = "100px" bg = "red" pos = "absolute"  /> : 
    ( itype ==="square" ? 
    <Rectangle    {...props}   isLive = {true}  /> :
    <Circle {...props}  isLive = {true} />
    )
)
}



export default function SliderBg(props) {

    const{
        direction = "up",
        slide_id = 0
    } = props;

    const {
      state : {
        moveY,
        moveX,
        rotateX,
        rotateY
      }, slideReduceDispatch
    } = useContext(SlideContext)

    const ref_list =  [createRef(),createRef(),createRef(),createRef(),createRef()]

    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()



    useEffect(() => {

      // ref_list.forEach((ref, index) => {
      //   console.log("ref", ref)
      //   gsap.to(ref.current, {y: moveY*(index+1)/2, force3D: true})
      // })

      if(ref1.current)
    {  gsap.to(ref1.current, {y: moveY*2, force3D: true})
      gsap.to(ref2.current, {y: moveY*1.2, force3D: true})
      gsap.to(ref3.current, {y: moveY*0.9, force3D: true})
}

    }, [moveY])

  return (
  <Container pos = "absolute" h = "100vh" w = "100%" of = "hidden"  
    sx = {css`

        & svg{

            animation : ${direction === "down" ? css`${sliderItemUpTransition} 1s linear forwards `: css`${sliderItemDownTransition} 1s linear forwards`};

        }

    
    `}
  
  
  >
    <Box 
     left="7%"
     top="20%"
     type="p"
     ref = {ref1}
     direction={-1}
 bg = "red"

     trans = "all 1s ease-out"
     itype = {slideOptionMapper[slide_id]}
      pos = "absolute"
      w = "100px"
      h = "100px"
    />
    <Box
     left="27%"
     top="30%"
     type="p"
    itype = {slideOptionMapper[slide_id]}
    ref = {ref2}
    pos = "absolute"
    w = "100px"
    h = "100px"
    direction={-1}
     trans = "all 0.6s ease-out"
    bg = "red"
     
    />
    <Box
     left="47%"
     top="20%"
     type="p"
    itype = {slideOptionMapper[slide_id]}
    ref = {ref3}
    pos = "absolute"
    w = "100px"
    h = "100px"
 bg = "red"
     direction={1}
     trans = "all 1.2s ease-out"
     
    />
    <Box
     left="77%"
     top="60%"
     type="p"
     pos = "absolute"
     w = "100px"
     h = "100px"
     direction={-1}
     trans = "all 0.7s ease-out"
 bg = "red"
     
     itype = {slideOptionMapper[slide_id]}
    
    />
    <Box
     right="5%"
     top="40%"
     type="p"
     itype = {slideOptionMapper[slide_id]}
     pos = "absolute"
     w = "100px"
     h = "100px"
     direction={1}
     trans = "all 1s ease-out"
     
 bg = "red"
    
    />
  
  </Container>
  )
}
