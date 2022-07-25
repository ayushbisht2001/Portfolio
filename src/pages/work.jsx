import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  ContainerFluid,
} from "../utility/styled_components/container";
import { Chips, Row } from "../utility/styled_components/box";
import WorkCard from "../components/work/WorkCard";
import AnimateText from "../animate_custom_lib/AnimateText";
import styled from "styled-components";
import { Pulse, Spine } from "../components/animations";
import { Span } from "../utility/styled_components/text";
import Wrapper from "../components/reusable_components/wrapper";
import { iuri } from "../utility/styled_components/colors";

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
    <Wrapper >
      <Spine >
      <Pulse top = "-9px"  left = "-6px"  />
          <Chips rad = "50%" w = "15px" h = "15px" pos = "absolute" top = "-9px"  left = "-6px"></Chips>
      </Spine>
      <Container pos="relative" h="auto"  >
        <AnimateText
          width={800}
          height={195}
          title="Work"
          scale={5}
          primary= {iuri}
          secondary="#F1FAEE"
          sx={{
            top: "50px",
            zIndex: 120,
          }}
        />
      <CardContainer pos="relative" h="auto" >
     
        <WorkCard />

      </CardContainer>
      </Container>
    </Wrapper>
  )
};

export default Work;


const CardContainer = styled(Container)`




& .line{
 
}
 

`
