import React from 'react'
import { Container, ContainerFluid } from '../../utility/styled_components/container'
import { Box } from '../../utility/styled_components/box'
import { Triangle,  Rectangle, Circle } from '../animations/shapes/shapes';
import { sliderItemDownTransition, sliderItemUpTransition } from '../../utility/styled_components/keyframes';
import { css } from 'styled-components';

const slideOptionMapper = {
    0 :"triangle",
    1 : "cirlce",
    2 : "square"
}


const Items = (props) =>{

const{
         itype = "circle"

} = props;


return (
    itype === "triangle" ? 
    <Triangle {...props} isLive = {true}   /> : 
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


  return (
  <Container pos = "absolute" h = "100vh" w = "100%" of = "hidden"  
    sx = {css`

        & svg{

            animation : ${direction === "down" ? css`${sliderItemUpTransition} 1s linear forwards `: css`${sliderItemDownTransition} 1s linear forwards`};

        }

    
    `}
  
  
  >
    <Items 
     left="7%"
     top="20%"
     type="p"
     
     direction={-1}
     trans = "all 1s ease-out"
     itype = {slideOptionMapper[slide_id]}

    />
    <Items
     left="27%"
     top="30%"
     type="p"
          itype = {slideOptionMapper[slide_id]}

     
     direction={-1}
     trans = "all 0.6s ease-out"
     
    />
    <Items
     left="47%"
     top="20%"
     type="p"
    itype = {slideOptionMapper[slide_id]}
 
     direction={1}
     trans = "all 1.2s ease-out"
     
    />
    <Items
     left="77%"
     top="60%"
     type="p"
   
     direction={-1}
     trans = "all 0.7s ease-out"
     
     itype = {slideOptionMapper[slide_id]}
    
    />
    <Items
     right="5%"
     top="40%"
     type="p"
     itype = {slideOptionMapper[slide_id]}
 
     direction={1}
     trans = "all 1s ease-out"
     
    
    />
  
  </Container>
  )
}
