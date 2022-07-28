import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Box } from "../../utility/styled_components/box";
const URL = process.env.PUBLIC_URL;

const option = ["scintilla.png", "pypaint.png", "kaivalaya.png", "AON.jpeg"];

const INITIAL_STATE = [
  {
    bg: `${URL}/assets/images/projects/scintilla.png`,
    offset: "100%",
  },
  {
    bg: `${URL}/assets/images/projects/pypaint.png`,
    offset: "0%",
  },
];

const DeviceFrame = (props) => {
  const { card_coord, screen } = props;
  const [projectFrame, setProjectFrame] = useState(INITIAL_STATE);
  const [state, setState] = useState([]);
  const ref = useRef();
  const [frameProp, setFrameProp] = useState({
    tf: "translateZ(20px) translateX(30vw)",
    w: "calc( 100% - 40vw)",
    h: "60vh",
  });

  function handleScroll(e) {
    const scrollCurrent = window.innerHeight - 470;

    console.log(scrollCurrent + 350);
    for (let i = 0; i < state.length; i++) {
      const card_ele = state[i];
      const c_y = card_ele.getBoundingClientRect().top;

      if (scrollCurrent > c_y && scrollCurrent < c_y + 300) {
        const oX = (scrollCurrent - c_y) / 6;
        console.log("here - ", i, "  - ", c_y);

        const NEW_STATE = [
          {
            bg: `${URL}/assets/images/projects/${option[i]}`,
            offset: `${100 - oX}%`,
            zi: "2",
          },
          {
            bg: `${URL}/assets/images/projects/${
              option[(i + 1) % option.length]
            }`,
            offset: "100%",
            zi: "1",
          },
        ];

        setProjectFrame(NEW_STATE);
      }
    }
  }

  useEffect(() => {
    setState([...card_coord]);
    console.log("frame state - ", card_coord);
  }, [card_coord]);

  useEffect(() => {
    if (screen) {
      setFrameProp({
        tf: "translateX(0px) translateZ(120px) ",
      });
    } else {
      setFrameProp({
        tf: " translateX(30vw) translateZ(20px)",
      });
    }
  }, [screen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: false });
    };
  }, [state]);

  return (
    <Frame   w=  "calc( 100% - 40vw)"  h = "60vh" ref={ref} {...frameProp}>
      <Box
        bg={`url(${projectFrame[0].bg})`}
        w={`${projectFrame[0].offset}`}
        h="100%"
        zi={projectFrame[0].zi}
      ></Box>
      <Box
        bg={`url(${projectFrame[1].bg})`}
        w={`${projectFrame[1].offset}`}
        h="100%"
        zi={projectFrame[1].zi}
      ></Box>
    </Frame>
  );
};

export default DeviceFrame;

const Frame = styled(Box)`
  background: ${(props) => props.bg || props.theme.palette.bg};
  border-radius: 20px;
  position: fixed;
  border: solid 20px ${(props) => props.bg || props.theme.palette.ternary};
  top: 0px;
  left: 0px;
  right: 2px;
  bottom: 0px;
  margin: calc(70vh - ${(props) => props.h}) auto;
  z-index: 10;
  transform-style: preserver-3d;

  transform: ${(props) => props.tf || "translateZ(20px) translateX(30vw)"};
  transition: 0.3s all ease-in 0.2s;
  opacity: 0.15;

  & div {
    background-size: cover;
    position: absolute;
    right: 0px;

    &::before {
      content: " ";
      height: 100%;
      width : 100%;
      position: absolute;
      background: ${(props) => props.bg || props.theme.palette.primary};
      opacity: 0.4;

    }
  }
`;

const LaptopFrame = styled(Box)``;
