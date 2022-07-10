import React from "react";
import {
  ContainerFluid,
  Container,
} from "../utility/styled_components/container";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../utility/styled_components/theme";
import AniHeading from "../components/reusable_components/heading";
import { Col, Row, Box } from "../utility/styled_components/box";
import { Circle, Ring, ShapeBox, CurlyRing, Strips, ULines, DotWave } from "../components/animations/shapes/shapes";
import { Shape } from "../components/animations/shapes/shapes";


export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <ContainerFluid h="100vh" overflow = "hidden">

        {/* <Circle type = 'p' left ="20%" bottom="20%"  /> */}
        <Ring type = 'p' right ="2%" bottom="5%" tf = "scale(0.5)" />
        <Circle   left ="0%" top="0%" />
        <Ring type = 't' left ="5%" top="0%" tf = "scale(0.3)"   />
        <ULines  right = "-80px" top = "-120px" tf = "scale(0.4)" fo = "0.4" type = "p" />
        <DotWave   left ="-65px" bottom="10%" tf = "scale(0.9)" type = "p"  />

        <Row cols = "50% 45%" >
          <Col h = "500px" d = "flex" align = "center" justify = "flex-end" >
            <Box>
            <AniHeading
              title={"Namaste, my name is"}
              sx={{ fontSize: "25px", display : "block" }}
              type = "s"
            />
            <AniHeading title={"Ayush Bisht"} sx={{ fontSize: "80px", display : "block" }} />
            <AniHeading title={"God of Creativity"} sx={{ fontSize: "60px", display : "block" }}  type = "t" />
       
            </Box>
             </Col>
          <Col position = "relative">
          <CurlyRing left = "55%"    top = "40%" tf = "scale(1.5)"  type = "t"  />
          </Col>
        </Row>
   

      </ContainerFluid>
    </ThemeProvider>
  );
}
