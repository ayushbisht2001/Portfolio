import React from "react";
import {
  ContainerFluid,
  Container,
} from "../utility/styled_components/container";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../utility/styled_components/theme";
import AniHeading from "../components/reusable_components/heading";
import { Col, Row, Box } from "../utility/styled_components/box";
import {
  Circle,
  Ring,
  CurlyRing,
  ULines,
  Triangle,
  Square,
  ORing,
} from "../components/animations/shapes/shapes";
import AnimateText from "../animate_custom_lib/AnimateText";

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <ContainerFluid h="100vh" overflowX="hidden" position="relative">
        {/* <Circle type = 'p' left ="20%" bottom="20%"  /> */}
        <Triangle
          right="1%"
          bottom="12%"
          tf="rotate(45deg) scale(2.5)"
          type="p"
        />
        <Square left="-5%" bottom="-3%" tf="rotate(30deg) scale(1.2) " />
        <ORing left="0%" bottom="0%" type="s"  tf = "scale(0.7)"   isLive ={true} scale = {0.7} />

        <Ring type="s" right="2%" bottom="5%"  tf = "scale(0.5)" isLive ={true}  scale = {0.5}/>
        <Circle left="0%" top="0%" tf="scale(0.8)" />
        <ULines right="-80px" top="-120px" tf="scale(0.4) " fo="0.4" type="s" />
        

        <Ring type="t" right="-10px" bottom="-40px" tf = "scale(0.3)"  isLive = {true} scale = {0.3}  />

        <Box pos="absolute" top="33%" left="10%">
          <AniHeading
            title={"Namaste, my name is"}
             weight = "200"
            sx={{ fontSize: "25px", display: "block" }}
            type="t"
          />
          {/* <AniHeading
                title={"AYUSH BISHT"}
                sx={{ fontSize: "60px", display: "block" }}
              /> */}
          <AnimateText
            width={600}
            height={110}
            title="AYUSH BISHT"
            primary="#E63946"
            secondary="#F1FAEE"
          />
  {/* <AnimateText
            width={600}
            height={110}
            title="AYUSH BISHT"
            primary="#03071e"
            secondary="#457B9D"
          /> */}
          <AniHeading
            title={"I'm a Software Developer"}
            sx={{ fontSize: "40px", display: "block" }}
            type="t"
          />
        </Box>

        <CurlyRing left="55%" top="50%" tf="scale(1.3)" type="p" />

        {/* <Triangle
          left="22%"
          top="20%"
          tf="rotate(30deg) scale(0.8) "
          type="s"
        /> */}
        {/* <Triangle left="10%" top="30%" tf="rotate(30deg) scale(0.5)" type="t" /> */}
        <Triangle left="7%" top="5%"   type="s" isLive ={true} scale = {0.6}  tf = "scale(0.6)" />
      </ContainerFluid>
    </ThemeProvider>
  );
}
