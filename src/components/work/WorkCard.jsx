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
        onClick = { () => setScreen((prev)=> prev === "forward" ? "reverse" : "forward")}
      >
     
        <Box w="60%" h="auto">
         <AniHeading braces = {true}  title={title} type="p" size = {"3rem"} />
          <Span type="t" size="20px" m="120px 0px">
            {" "}
            //{time}{" "}
          </Span>
          <PText size = "1.2rem" type="s" m="10px 10px" >
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

 

const Wrapper = styled(Box)`
  perspective: 900px;
  perspective-origin: 50% 50vh;
`;

const CardBox = styled(Box)`
  background: ${(props) => props.bg || props.theme.palette.bg};
`;
