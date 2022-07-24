import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  ContainerFluid,
} from "../utility/styled_components/container";
import { Row } from "../utility/styled_components/box";
import WorkCard from "../components/work/WorkCard";
import AnimateText from "../animate_custom_lib/AnimateText";
import styled from "styled-components";

const Work = () => {
  const [scroll, setScroll] = useState({ left: 0, top: 0 });

  function handleScroll(e) {

    if(window.pageYOffset > scroll.top){
        ref.current.style.height -= 10 ;

    }else
    {
        ref.current.style.height += 10;

    }

    setScroll({ left: window.pageXOffset, top: window.pageYOffset });


  }

  const ref = useRef()

  useEffect(() => {

    // if(ref.current){
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //       window.removeEventListener("scroll", handleScroll);
    //     };
    // }
  
  }, []);


  return (
    <ContainerFluid h="auto" overflow="hidden">
      <Container pos="relative" h="auto"  >
        <AnimateText
          width={800}
          height={195}
          title="Work"
          scale={5}
          primary="#E63946"
          secondary="#F1FAEE"
          sx={{
            top: "50px",
            zIndex: 120,
          }}
        />
      <CardContainer pos="relative" h="auto" >
        <div className="line" ref = {ref} ></div>
        <WorkCard />

      </CardContainer>
      </Container>
    </ContainerFluid>
  )
};

export default Work;


const CardContainer = styled(Container)`


&::before{
    content : '';
    height : calc(100% - 100px);
    position : absolute;
    background : grey;
    width : 3px;
    z-index: 100;
    transform : translateY(100px);
    left : calc(3.7rem);
    border-radius : 100%;
}

& .line{
    width : 3px;
    height : calc(100vh - 20rem);
    position : fixed;
    background : ${props => props.theme.palette.primary || "orangered"};
    z-index : 101;
    left : calc(15.7rem);
    top : calc( 20rem);
    bottom : 0px;
    transition : 1s all ease 0.5;
}
 

`
