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
import { Row } from "../../utility/styled_components/box";

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
    <CardBox w="100%" h="auto" bg="transparent" ref = {tref} of="hidden">
      <Box
        d="flex"
        h="auto"
        w="100%"
        m="50px auto"
        wrap="wrap"
        direction = "column"
        pos ="relative"
        of = "hidden"

        onClick = { () => setScreen((prev)=> prev === "forward" ? "reverse" : "forward")}
      >
     
        <Span size = "2rem"   left = "20%" pos = "relative"  >
            {"{ "} 
          </Span>
          
        <Row 
        w="60%" h="auto"
        cols = "auto auto"
        rows = "auto"
        m = "auto"
        of = "hidden"
        p = "0px 20px"
        sm = {`
          width : 80%;
        `}
        >

        <Span family = "Comfortaa" type = "t" size = "1.3rem"    >
            {"title  : "} 
          </Span>
         <AniHeading   title={title} type="p" size = {"3rem"} />
          
          <Span family = "Comfortaa" type = "t" size = "1.3rem"    >
            time : 
          </Span>
          <Span type="t" size="20px"  >
            {" "}
             " {time}{" "} "
          </Span>
          <Span type = "t" size = "1.3rem" family = "Comfortaa">
            desc : 
          </Span>
          <PText size = "1.2rem" type="s" m="10px 10px" >
       
            {" "}
            {desc}
          </PText>
          <Span type = "t" size = "1.3rem" family = "Comfortaa">
            files : 
          </Span>
          <LinkBox>
            <LinkIcon to="github.com" size = "2rem" >
              <AiFillGithub />
            </LinkIcon>
            <LinkButton to="github.com">
              File Link
              {/* <SText link weight = "bold" ></SText> */}
            </LinkButton>
          </LinkBox>
        </Row>

        <Span  left = "20%" size = "2rem"  pos = "relative"  >
            {" } "}&nbsp; 
            {" ,"} 
         
          
          </Span>
      </Box>
    </CardBox>
  );
};

export default function WorkCard(props) {
  const { setCardCoord, setScreen  } = props;

 

  return (
    <Wrapper pos="relative" h="auto" of ="hidden">
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
  overflow : hidden;
`;

const CardBox = styled(Box)`
  background: ${(props) => props.bg || props.theme.palette.bg};
`;
