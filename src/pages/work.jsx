import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  ContainerFluid,
} from "../utility/styled_components/container";
import { Chips, Row, Box } from "../utility/styled_components/box";
import WorkCard from "../components/work/WorkCard";
import AnimateText from "../animate_custom_lib/AnimateText";
import styled from "styled-components";
import { Pulse, Spine } from "../components/animations";
import { Span } from "../utility/styled_components/text";
import Wrapper from "../components/reusable_components/wrapper";
import { iuri } from "../utility/styled_components/colors";
import DeviceFrame from "../components/reusable_components/frame";
import NavBar from "../components/navigation/NavBar";

const Work = () => {
  const [card_coord, setCardCoord] = useState([]);
  const [coord, setCoord] = useState([]);
  const [screen, setScreen] = useState("reverse");

  useEffect(() => {
    console.table("work", card_coord);
    setCoord(card_coord);
  }, [card_coord]);

  return (
    <Wrapper spine={true} 
      
    >
      <NavBar />

      <Container
        pos="fixed"
        w="100vw"
        h="100vh"
        top="0px"
        of="hidden"
        sm={`
              display : none;
            `}
      >
        <DeviceFrame card_coord={[...coord]} screen={screen} />
      </Container>

      <Container
        pos="relative"
        h="auto"
        zi="1"
        bg="transparent"
        mt="25vh"
        of="hidden"
      >
        <AnimateText
          width={800}
          height={195}
          title="Work"
          scale={5}
          primary={iuri}
          secondary="#F1FAEE"
          sx={{
            top: "50px",
            background: "transparent",
          }}
          sm = {`
          position : relative;
          padding :  0px 10% ;
          
          `}
          size = "4rem"
        />
        <CardContainer
          pos="relative"
          h="auto"
          zi="1"
          bg="transparent"
          of="hidden"
        >
          <WorkCard setCardCoord={setCardCoord} setScreen={setScreen} />
        </CardContainer>
      </Container>

      <Box w="100vw" h="150px"></Box>
    </Wrapper>
  );
};

export default Work;

const CardContainer = styled(Container)`
  & .line {
  }
`;
