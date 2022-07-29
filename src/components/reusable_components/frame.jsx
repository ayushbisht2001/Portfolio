import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import { Box } from "../../utility/styled_components/box";
import { ProjectList } from "../../utility/data/projects";
import {
  frameAnimate,
  frameAnimateReverse,
  scrollProject,
} from "../../utility/styled_components/keyframes";
import { Container } from "../../utility/styled_components/container";

const URL = process.env.PUBLIC_URL;

const option = ProjectList;

const INITIAL_STATE = [
  {
    bg: `${URL}/assets/images/projects/${option[0].image}`,
    offset: "100%",
  },
  {
    bg: `${URL}/assets/images/projects/${option[1].image}`,
    offset: "0%",
  },
];

function FrameHOC(children, type, coords) {


  return type === "xl" ? (
    <XLFrame  top = {`calc(${coords.y - 250}px )`}   >{children}</XLFrame>
  ) : type === "md" ? (
    ""
  ) : (
    <SMFrame top = {`calc( ${coords.y - 200 }px)`} >{children}</SMFrame>
  );
}

const FrameContainer = (props) => {
  const { card_coord, screen } = props;
  const [projectFrame, setProjectFrame] = useState(INITIAL_STATE);

  const[ coord_list, setCoords] = useState([])


  const handleCoord = (e) => {

        if(e)
    {   e.preventDefault();
        e.stopPropagation()
    }

    const array = card_coord.map( (cord) => {
      return ({
        y : parseInt(cord.getBoundingClientRect().top*1.3 ),
        x : parseInt(cord.getBoundingClientRect().left / 3)
      })
    })

    setCoords([...array])
  }

  
  useEffect(()=>{

    const array = ProjectList.map( (cord) =>  ({
        y : 0,
        x : 0
      })
    )
    setCoords(array)

    window.addEventListener('scroll', handleCoord, { passive: true });

    return ()=> {
      window.removeEventListener('scroll', handleCoord, { passive: true })
    }

  }, [ card_coord ])



  useEffect(()=>{

    handleCoord()
 
  }, [ card_coord ])




  return (
    <Container
      of="hidden"
      pos="absolute"
      h="90vh"
      w="50vw"
      right="0px"
      bottom="0px"
      tf = " rotateY(-4deg)"
      md = {`
        width : 90vw;
      `}
    >
      <Container
      of="hidden"
      pos="relative"
      h="100%"
      w="100%"
      right="0px"
      bottom="0px"
      >
        {coord_list.length > 0  ? ProjectList.map((project, ind) => {
           return project.frame.length &&
              project.frame.map((fm, index) => {
                return FrameHOC(
                  <Box
                    bg={`url(${URL}/assets/images/projects/${fm.src})`}
                    w= "100%"
                    h="100%"

                    animate = {css` ${scrollProject} 14s linear infinite`}
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
  transform : ${props => props.tf || "translateY(0)"};
  transition : all 0.5s ease;
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
