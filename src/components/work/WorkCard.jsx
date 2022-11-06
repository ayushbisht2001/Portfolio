import React, { useRef, useEffect, createRef, useState } from "react";
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
import { Row, Col } from "../../utility/styled_components/box";
import { TbLivePhoto } from "react-icons/tb";
import { PArray } from "../reusable_components";
import { NativeLink } from "../../utility/styled_components/button";

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
    setScreen,
    type = "",
    role
  } = props;

  const tref = useRef();
  const [state, setState] = useState(null);

  useEffect(() => {
    if (state) setRef((prev) => [...prev, state]);
  }, [state]);

  useEffect(() => {
    if (tref.current) {
      setState(tref.current);
    }
  }, []);

  return (
    <CardBox w="100%" h="auto" bg="transparent" ref={tref} of="hidden">
      <Box
        d="flex"
        h="auto"
        w="100%"
        m="20px 0px"
        wrap="wrap"
        direction="column"
        pos="relative"
        of="hidden"
        onClick={() =>
          setScreen((prev) => (prev === "forward" ? "reverse" : "forward"))
        }
      >
        <Span size="2rem"  pos="relative">
          {"{"}
        </Span>

        <Row
          w="80%"
          h="auto"
          cols="100%"
          rows="auto"
          of="hidden"
          p="0px 40px"

          sx = {
            `
            &  >  div {
              display: grid ;
              grid-template-rows : 100%;
              grid-template-columns : calc( max( 15% , 70px ) ) auto;
              gap : 2px;
              align-items : center;

            }
            `
          }
          sm={`
          width : 90%;
          padding : 0px 0px 0px 5px;
        
        `}
        >
          <Col>
          <Span family="Comfortaa" type="t" size="1.3rem">
            {"title  : "}
          </Span>
          <AniHeading title={title + " ,"} type="p" size={"3rem"} />
          </Col>
          <Col>
          <Span family="Comfortaa" type="t" size="1.3rem">
            time :
          </Span>
          <Span type="t" size="20px">
            {" "}
            " {time} "<Span>{","}</Span>
          </Span>
          </Col>
          <Col>
            {type == "work" ? (
            <>
              <Span family="Comfortaa" type="t" size="1.3rem">
                role :
              </Span>
              <Span type="t" size="20px">
                {" "}
                " {role} "<Span>{","}</Span>
              </Span>
            </>
          ) : (
            ""
          )}
          </Col>
          <Col>
          <Span type="t" size="1.3rem" family="Comfortaa">
            context :
          </Span>
          <PText size="1.2rem"  type="s" m="10px 10px" weight="0" family="Comfortaa" 
            sx = {`
            & ul{
              padding : 0px 0px 0px 25px;
            }
            & ul  li{
              font-family : inherit;
            }

            `}
          >
           <Span type = "t">"</Span>  {desc}<Span type = "t">"</Span> <Span>{","}</Span>
          </PText>
          </Col>
            <Col>
          <Span type="t" size="1.3rem" family="Comfortaa">
            stack :
          </Span>
          <PArray data={stack}>
            <Span>{","}</Span>
          </PArray>
          </Col>
            <Col>
          { links ? 
            <>
             <Span type="t" size="1.3rem" family="Comfortaa">
            files :
          </Span>
          <PArray
            data={[
              <NativeLink
                href={links.source}
                size="2rem"
                m="0"
                p="0"
                title="source code"
                type="s"
                target="_blank"
              >
                <AiFillGithub style={{ margin: "0px" }} />
              </NativeLink>,
              <NativeLink
                href={links.demo}
                m="0"
                p="0"
                size="2rem"
                title="live"
                type="s"
                target="_blank"
              >
                <TbLivePhoto style={{ margin: "0px" }} />
              </NativeLink>,
            ]}
          >
            <Span>{","}</Span>
          </PArray>
          
            </> : ""
        }
            </Col>

        </Row>
        <Span size="2rem"  pos="relative">
          {" } , "}
        </Span>
      </Box>
    </CardBox>
  );
};

export default function WorkCard(props) {
  const { setCardCoord, setScreen, data = [], type = "" } = props;

  return (
    <Wrapper
      pos="relative"
      h="auto"
      of="hidden"
      sx={` perspective : 200px; perspective-origin : 100% 30%; z-index : 1;`}
    >
      
      {data.length &&
        data.map((project, ind) => (
          <Card
            {...project}
            setRef={setCardCoord}
            key={`card-${ind}`}
            setScreen={setScreen}
            type={type}
          />
        ))}
    </Wrapper>
  );
}

const Wrapper = styled(Box)`
  perspective: 900px;
  perspective-origin: 50% 50vh;
  overflow: hidden;
`;

const CardBox = styled(Box)`
  background: ${(props) => props.bg || props.theme.palette.bg};
  transform: ${(props) => props.tf || ""};
`;
