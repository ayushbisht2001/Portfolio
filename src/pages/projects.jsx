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
import NavBar, { MobNavBar } from "../components/navigation/NavBar";
import { ProjectList } from "../utility/data/projects";
import AniHeading from "../components/reusable_components/heading";

const Project = () => {
  const [card_coord, setCardCoord] = useState([]);
  const [coord, setCoord] = useState([]);
  const [screen, setScreen] = useState("reverse");

  useEffect(() => {
    console.table("work", card_coord);
    setCoord(card_coord);
  }, [card_coord]);

  return (
<>
    <NavBar />

    <Wrapper spine={true} >

      <Container
        pos="fixed"
        w="80%"
        h="100vh"
        top="0px"
        of="hidden"
        bg = "tranparent"
        sm={`
              display : none;
            `}
      >
        <DeviceFrame card_coord={[...coord]} screen={screen} data = {ProjectList} />
      </Container>

      <Container
        pos="relative"
        h="auto"
        zi="1"
        bg="transparent"
        mt="35vh"
        of="hidden"
      >
        {/* <AnimateText
          width={800}
          height={200}
          title="Projects"
          scale={4}
          primary={iuri}
          secondary="#F1FAEE"
          sx={{
            position : "relative",
            top: "20px",
            background: "transparent",
            left : "10%"
          }}
          sm = {`
          position : relative;
          padding :  0px 10% ;
          
          `}
          size = "4rem"
        /> */}


      <AniHeading
          title="Projects"
          sx={{
            position : "relative",
            background: "transparent",
          }}
          sm = {`
          bottom : 0px;          
          `}
          size = "5rem"
          sfactor = {1}
          type="p"

        />
        <CardContainer
          pos="relative"
          h="auto"
          zi="1"
          bg="transparent"
          of="hidden"
        >
          <WorkCard data = {ProjectList} setCardCoord={setCardCoord} setScreen={setScreen} />
        </CardContainer>
      </Container>

    </Wrapper>
    </>
  );
};

export default Project;

const CardContainer = styled(Container)`
 
`;
