import React, { useEffect, useState, useRef, createRef } from "react";
import styled, { css } from "styled-components";
import { Box } from "../../utility/styled_components/box";
import { ProjectList } from "../../utility/data/projects";
import {
  frameAnimate,
  frameAnimateReverse,
  scrollProject,
} from "../../utility/styled_components/keyframes";
import { Container } from "../../utility/styled_components/container";
import { WorkList } from "../../utility/data/works";
import _ from "lodash"
import { TweenLite } from "gsap/gsap-core";
import { gsap } from "gsap";

const URL = process.env.PUBLIC_URL;


const SM = (props) => {

  const ref = useRef()

  const{
    coords,
    children
  } = props;

  useEffect(() => {
  TweenLite.set(ref.current, { y : coords.y*1.2, force3D: true })
 

  }, [coords])

  return (
    <SMFrame      
    ref = {ref}
  // top = {`calc(${coords.y*1.6 - 100}px )`}  
   >{children}</SMFrame>
  )
}
const XL = (props) => {

  const ref = useRef()

  const{
    coords,
    children
  } = props;

  useEffect(() => {
  TweenLite.set(ref.current, { y : coords.y, force3D: true })
 

  }, [coords])

  return (
    <XLFrame 
    ref = {ref}
    // top = {`calc( ${coords.y*1.8 - 10 }px)`} 
    >{children}</XLFrame>
  )
}

function FrameHOC(children, type, coords) {

  const ref = createRef()

  

  return type === "xl" ? (
     
    <XL    
      ref = {ref}
      coords = {coords}
    // top = {`calc(${coords.y*1.6 - 100}px )`}  
     >{children}</XL>
  ) : type === "md" ? (
    ""
  ) : (
    <SM 
    ref = {ref}
    coords= {coords}
    // top = {`calc( ${coords.y*1.8 - 10 }px)`} 
    >{children}</SM>
  );
}

const FrameContainer = (props) => {
  const { card_coord, screen, data = [] } = props;

  const[ coord_list, setCoords] = useState([])

  const ref = useRef([])

  const handleCoord = (e) => {
    const array = card_coord.map( (cord) => {
      return ({
        y :  parseInt(cord.getBoundingClientRect().top),
        x : parseInt(cord.getBoundingClientRect().left / 3)
      })
    })

    setCoords([...array])
  }

  
  useEffect(()=>{

    const array = data.map( (cord) =>  ({
        y : 0,
        x : 0
      })
    )
    setCoords(array)

    window.addEventListener('scroll', handleCoord, { passive: true });
    handleCoord()

    return ()=> {
      window.removeEventListener('scroll', handleCoord, { passive: true })
    }

  }, [ card_coord ])


 




  return (
    <Container
      of="hidden"
      pos="absolute"
      h="100vh"
      w="50vw"
      right="0px"
      bottom="0px"
      sx = { ` perspective : 200px; perspective-origin : 100% 30%; z-index : 1;`} 
      md = {`
      width : 90vw;
      perspective : none; 
      `}
    >
      <Container
      of="hidden"
      pos="relative"
      h="100%"
      w="100%"
      right="0px"
      bottom="0px"
      tf = " rotateY(-4deg)"
      >
        {coord_list.length > 0  ? data.map((project, ind) => {
           return project.frame.length &&
              project.frame.map((fm, index) => {
                return FrameHOC(
                  <Box
                    key = {"frame-" + index}
                    bg={`url(${URL}/assets/images/projects/${fm.src})`}
                    w= "100%"
                    h="100%"
                    
                    animate = { fm.isAnimate && css` ${scrollProject} 14s linear infinite`}
                  ></Box>,
                  fm.type,
                  coord_list[ind]
                );
              });
          })
        : " "} 

      </Container>
     
    </Container>
  );
};



export default FrameContainer;


const Scree = styled(Box)`

animation : ${props => props.animate || ""};
background-repeat : no-repeat;
background-size : 100% 400px;
`


const Frame = styled(Box)`
  background: ${(props) => props.bg || props.theme.palette.bg};
  border-radius: 15px;
  border: solid 0.4rem ${(props) => props.border || props.theme.palette.ternary};
  transform-style: preserver-3d;
  position : absolute;
  transform : ${props => props.tf || "translateY(400px)"};
  opacity : 0.35;
  & div {
    background-size: cover;
    position: absolute;
    right: 0px;
    border-radius: 15px;

    &::before {
      content: " ";
      height: 100%;
      width: 100%;
      position: absolute;
      background: ${(props) => props.bg || props.theme.palette.primary};
      opacity: 0;
    }
  }

 
`;



const XLFrame = styled(Frame)`
  width: ${(props) => props.w || "calc(100% / 2 + 2rem )"};
  height: ${(props) => props.h || "calc(100% / 3 + 2rem )"};
  right : 10%;

  @media (max-width: 800px) {
    & {
  width: ${(props) => props.w || "calc(100% / 2 )"};
  height: ${(props) => props.h || "calc(100% / 5 )"};
    }
  }
  `;

  const MDFrame = styled(Frame)`
  width: ${(props) => props.w || "calc(20vw )"};
  height: ${(props) => props.h || "calc(20vw / 2)"};
  right : 15%;

  @media (max-width: 800px) {
    & {
     width: ${(props) => props.w || "calc(100% / 2 + 2rem )"};
  height: ${(props) => props.h || "calc(100% / 3 + 2rem )"};
    }
  }
  `;

const SMFrame = styled(Frame)`
  width: ${(props) => props.w || "calc(10vw + 2rem)"};
  height: ${(props) => props.h || "calc(10vw * 1.8)"};
  left : 5%;

  @media (max-width: 800px) {
    & {
    width: ${(props) => props.w || "calc(15vw + 2rem)"};
    height: ${(props) => props.h || "calc(20vw * 1.8)"};
    }
  }

`;
