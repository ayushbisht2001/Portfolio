import React, {useContext, useEffect, createRef, useRef} from 'react'
import { Container, ContainerFluid } from '../../utility/styled_components/container'
import { Box } from '../../utility/styled_components/box'
import { Triangle,  Rectangle, Circle } from '../animations/shapes/shapes';
import { sliderItemDownTransition, sliderItemUpTransition } from '../../utility/styled_components/keyframes';
import { css } from 'styled-components';
import { SlideContext } from '../../store/slider_store';
import gsap from 'gsap';
import { handleSliderShapes } from '../../utility';



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
        slide_id = 0,
        vs
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


    function handleAnimation(e){

      if(vs){
        vs.has_animated()
      }


    }

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

        & div{

          animation : ${direction === "down" ? css`${sliderItemUpTransition} 1s linear forwards `: css`${sliderItemDownTransition} 1s linear forwards`};
          transition : 1s all ease;
        }

    
    `}
  >

  
    
    

  </Container>
  )
}
