import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import { Box } from "../../utility/styled_components/box";
import {ProjectList} from "../../utility/data/projects";
import { frameAnimate, frameAnimateReverse } from "../../utility/styled_components/keyframes";


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

const DeviceFrame = (props) => {
  const { card_coord, screen } = props;
  const [projectFrame, setProjectFrame] = useState(INITIAL_STATE);
  const [state, setState] = useState([]);
  const ref = useRef();
  const [frameProp, setFrameProp] = useState({
   animate : "reverse"
  });

  function handleScroll(e) {
    const scrollCurrent = window.innerHeight - 300;

    for (let i = 0; i < state.length; i++) {
      const card_ele = state[i];
      const c_y = card_ele.getBoundingClientRect().top;

      if (scrollCurrent > c_y && scrollCurrent < c_y + 300) {
        const oX = (scrollCurrent - c_y) / 6;

        const NEW_STATE = [
          {
            bg: `${URL}/assets/images/projects/${option[i].image}`,
            offset: `${100}%`,
            zi: "1",
          },
          {
            bg: `${URL}/assets/images/projects/${
              option[( option.length + i - 1 ) % option.length].image
            }`,
            offset: "0%",
            zi: "1",
          },
        ];

        setProjectFrame(NEW_STATE);
      }
    }
  }

  useEffect(() => {
    setState([...card_coord]);
  }, [card_coord]);

  useEffect(() => {

    if (screen == "forward") {
      setFrameProp({
        animate : css`${frameAnimate} 1s linear forwards`
      });
    } else
    if(screen == "reverse")
    {
      setFrameProp({
        animate : css`${frameAnimateReverse} 0.6s linear forwards`
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
    <Frame o = "0.25"  w=  "100vw"  h = "100vh" ref={ref} {...frameProp}>
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
  border-radius: 15px;
  position: fixed;
  border: solid 1.3rem ${(props) => props.bg || props.theme.palette.ternary};
  top: 0px;
  left: 0px;
  bottom: 0px;
  margin: auto;
  z-index: 3;
  transform-style: preserver-3d;

  transform: ${(props) => props.tf || "translate3d(50vw, 15vh, -100px)"};
  transition: 0.2s all ease 0.2s;

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
      opacity: 0;

    }
  }

  @media (max-width : 600px){
    &{
    height : 60vh;
    }
  }
`;

const LaptopFrame = styled(Frame)`

  width : ${props => props.w || "calc(40vh / 3)" };
  height : ${props => props.h || "calc(40vh)"}; 
  


`;
