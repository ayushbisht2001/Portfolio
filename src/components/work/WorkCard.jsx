import React, { useRef, useEffect, createRef , useState} from "react";
import styled from "styled-components";
import AnimateText from "../../animate_custom_lib/AnimateText";
import { Box, LinkBox } from "../../utility/styled_components/box";
import { PText, Span, SText } from "../../utility/styled_components/text";
import { Triangle } from "../animations/shapes/shapes";
import AniHeading from "../reusable_components/heading";
import { ProjectList } from "../../utility/data/projects";
import { Link, NavLink } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { LinkButton, LinkIcon } from "../../utility/styled_components/button";

const URL = process.env.PUBLIC_URL;

const Card = (props) => {
  const {
    title = "Untitled",
    desc = "404",
    links = {},
    stack = [],
    time,
    image,
     setRef,
     setScreen 
  } = props;

  const tref  = useRef();
  const [state, setState] = useState(null);

  useEffect(()=>{

    if(state)
    setRef((prev)=> [...prev, state]);

  },[state])

  
  useEffect(()=>{
    if(tref.current){
      setState(tref.current)
    }
  }, [])

  return (
    <CardBox w="100%" h="auto" bg="transparent" ref = {tref}>
      <Box
        d="flex"
        justify="center"
        align="center"
        h="auto"
        w="100%"
        m="50px auto"
        wrap="wrap"
        onClick = { () => setScreen((prev)=> !prev)}
      >
        {/* <Box w="350px" h="300px" o="hidden">
          <ImgBox2 w="100px" h="100px">
            <img src={`${URL}/assets/images/projects/${image}`} />
          </ImgBox2>
        </Box> */}
        <Box w="60%" h="auto">
          <AniHeading   title={title} type="p" />
          <Span type="t" size="20px" m="120px 0px">
            {" "}
            //{time}{" "}
          </Span>
          <PText size = "1.5rem" type="s" m="10px 10px">
            {" "}
            {desc}
          </PText>
          <LinkBox>
            <LinkIcon to="github.com">
              <AiFillGithub />
            </LinkIcon>
            <LinkButton to="github.com">
              File Link
              {/* <SText link weight = "bold" ></SText> */}
            </LinkButton>
          </LinkBox>
        </Box>
      </Box>
    </CardBox>
  );
};

export default function WorkCard(props) {
  const { setCardCoord, setScreen  } = props;

 

  return (
    <Wrapper pos="relative" h="auto">
      {ProjectList.map((project, ind) => (
        <Card
          {...project}
          setRef = {setCardCoord}
          key = {`card-${ind}`}
          setScreen  = {setScreen }
        />
      ))}
    </Wrapper>
  );
}

const ImgBox2 = styled(Box)`
  --border-clr: ${(props) => props.theme.palette.bg};
  --border-clr2: ${(props) => props.theme.palette.text.primary};
  --shadow: ${(props) => props.theme.palette.ternary || "black"};
  width: 16rem;
  height: 16rem;
  background: var(--border-clr);
  border-radius: 50%;
  overflow: hidden;
  position: relative;

  & > img {
    width: 20rem;
    border-radius: 10px;
    margin: auto;
    transform-style: preserve-3d;
    transition: all 500ms ease-in;
    transform: rotateY(15deg) rotateX(50deg) rotateZ(-15deg)
      translate(20px, 100px);
    box-shadow: -40px 50px 120px -10px var(--shadow);

    &:hover {
      transform: rotateY(15deg) rotateX(50deg) rotateZ(-15deg)
        translate(20px, 100px) scale(1.3);
    }
  }
`;
const ImgBox = styled(Box)`
  --border-clr: ${(props) => props.theme.palette.text.ternary};
  filter: drop-shadow(1px 0px 0px var(--border-clr))
    drop-shadow(-1px 0px 0px var(--border-clr))
    drop-shadow(0px 1px 0px var(--border-clr))
    drop-shadow(0px -1px 0px var(--border-clr))
    drop-shadow(1px 1px 0px var(--border-clr))
    drop-shadow(-1px -1px 0px var(--border-clr))
    drop-shadow(-1px 1px 0px var(--border-clr))
    drop-shadow(1px -1px 0px var(--border-clr));

  & div:nth-of-type(1) {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    position: relative;
    overflow: hidden;
    background: ${(props) => props.bg || props.theme.palette.bg};
  }

  & > div img {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 100%;
    right: -40px;
    transition-delay: 0.2s;
    animation: moveproject 0.7s ease-out forwards;
    filter: grayscale(90%);
    border-radius: 25px;

    &:hover {
      filter: grayscale(0%);
    }
  }
  @keyframes moveproject {
    to {
      transform: translate(-40px, -170px);
    }
  }
`;

const Wrapper = styled(Box)`
  perspective: 900px;
  perspective-origin: 50% 50vh;
`;

const CardBox = styled(Box)`
  background: ${(props) => props.bg || props.theme.palette.bg};
`;
