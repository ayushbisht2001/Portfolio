import React, { useState, useEffect, memo } from "react";
import { Row, Col, LinkBox } from "../../utility/styled_components/box";
import { Container } from "../../utility/styled_components/container";
import { Span } from "../../utility/styled_components/text";
import { LinkIcon } from "../../utility/styled_components/button";
import { GoMarkGithub } from "react-icons/go";
import { FaTwitterSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import styled, { css } from "styled-components";
import { Box } from "../../utility/styled_components/box";
import { Link } from "react-router-dom";
import { Shape, Square } from "../animations/shapes/shapes";
import {
  bgReverseTransition,
  bgTransition,
  navAnimate,
  navReverseAnimate,
  navReverseRightMotion,
  navRightMotion,
} from "../../utility/styled_components/keyframes";

export const NavIcon = (props) => {
  const [animate, setAnimate] = useState("square");

  const { setNav } = props;

  const handleClick = () => {
    if (animate == "square") {
      setAnimate("triangle");
      setNav("open");
    } else {
      setNav("hide");
      setAnimate("square");
    }
  };

  return (
    <Shape
      type="s"
      width="100"
      height="100"
      strokeW="5"
      tf="scale(0.3)"
      tforigin="top"
      pfill="none"
      pos="fixed"
      onClick={handleClick}
      sx={`
      right : 0px;
      z-index : 6;
      `}
    >
      <path
        d={
          animate == "triangle"
            ? "M 50,5 95,97.5 5,97.5 Z"
            : "M 10 10 H 90 V 90 H 10 L 10 10"
        }
      ></path>
    </Shape>
  );
};

export const MobNavBar = () => {
  const [y, setY] = useState(0);
  const [nav, setNav] = useState("hide");
  const [nav_state, setNavState] = useState("hide");

  const handleScroll = (e) => {
    const val = (window.pageYOffset * 0.9) / 700;
    setY(val);
  };

  const [attrs, setAttr] = useState({
    x: "0",
    opacity: "0",
  });

  const handleAnimation = () => {
    if (nav == "open") {
      setAttr({
        x: "0",
        opacity: "1",
      });
    } else {
      setAttr({
        x: "400px",
        opacity: "0",
      });
    }
  };

  useEffect(() => {
    handleAnimation();
  }, [nav]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      h="8rem"
      w="100%"
      zi="100"
      pos="fixed"
      of="hidden"
      bg="transparent"
    >
      <NavBg o={y}></NavBg>

      <Container p="1rem 0px" h="auto" bg="transparent" pos="relative">
        <NavIcon setNav={setNav} />
      </Container>

      {true ? (
        <Box w="100%" h="100vh" pos="fixed" top="0px" zi="5">
          <MobNavBg
            d={nav === "open" ? "block" : "none"}
            o={attrs.opacity}
          ></MobNavBg>

          <Box
            sx="float : right;"
            top="22rem"
            pos="relative"
            d="flex"
            direction="column"
            w="auto"
            p="10px 20px"
            h="auto"
            align="center"
            justify="center"
            family="Comfortaa"
            gap="1rem"
            tf={` translateX(${attrs.x})`}
            trans="all 1s ease-out"
          >
            <Span size="4rem" type="s">
              <Span p="0px" type="s">
                <LinkIcon type="s" to="/">
                  home(&nbsp;&nbsp;)
                </LinkIcon>
              </Span>
            </Span>
            <Span size="4rem" type="s">
              <Span p="0px" type="s">
                <LinkIcon type="s" to="/works">
                  works(&nbsp;&nbsp;)
                </LinkIcon>
              </Span>
            </Span>
            <Span size="4rem" type="s">
              <Span p="0px">
                <LinkIcon type="s" to="/projects">
                  projects(&nbsp;&nbsp;)
                </LinkIcon>
              </Span>
            </Span>
            <LinkBox>
              <LinkIcon to="localhost.com" size="3rem" m="8px 0px 0px 5px">
                <BsLinkedin />
              </LinkIcon>
              <LinkIcon to="localhost.com" size="3rem" m="8px 0px 0px 5px">
                <GoMarkGithub />
              </LinkIcon>
            </LinkBox>
          </Box>
        </Box>
      ) : (
        ""
      )}
    </Container>
  );
};

const XLNavbar = () => {
  const [y, setY] = useState(0);

  const handleScroll = (e) => {
    const val = (window.pageYOffset * 0.9) / 700;
    setY(val);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      h="8rem"
      w="100%"
      zi="100"
      pos="fixed"
      of="hidden"
      bg="transparent"
    >
      <NavBg o={y}></NavBg>

      <Container of="hidden" p="1rem 0px" h="100px" bg="transparent">
        <Row h="100%" w="100%" align="center" cols="50% 50%">
          <Col h="auto"  >
            {/* <Span type="s" weight="10" size="1.2rem">
              Nav[<Span>"ayush"</Span>]
            </Span> */}
          </Col>
          <Col
            family="Comfortaa"
            d="flex"
            direction="row"
            wrap="no-wrap"
            align="center"
            justify="flex-end"
             
          >
            <Span size="1rem" type="s" m="auto 5px auto 3px">
              <Span p="0px">
                <LinkIcon p="0" m="0" to="/" type = "s" >
                  home(&nbsp;&nbsp; )
                </LinkIcon>
              </Span>
            </Span>
            <Span size="1rem" type="s" m="auto 5px auto 3px">
              <Span p="0px">
                <LinkIcon p="0" m="0" type = "s" to="/works">
                  works(&nbsp;&nbsp;)
                </LinkIcon>
              </Span>
            
            </Span>
            <Span size="1rem" type="s" m="auto 5px auto 3px">
              
              <Span p="0px">
                <LinkIcon p="0" m="0" type = "s" to="/projects">
                  projects(&nbsp;&nbsp;)
                </LinkIcon>
              </Span>
            </Span>

            <LinkIcon to="localhost.com" size="1.5rem" m="8px 0px 0px 5px">
              <BsLinkedin />
            </LinkIcon>
            <LinkIcon to="localhost.com" size="1.5rem" m="8px 0px 0px 5px">
              <GoMarkGithub />
            </LinkIcon>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

const NavBar = () => {

const [state, setState] = useState(window.innerWidth);
 
useEffect(() => {
    window.addEventListener("resize", () => setState(window.innerWidth))
    return () => {
      window.removeEventListener("resize", () => setState(window.innerWidth))
    }
  },[] )

  return state > 1000 ? <XLNavbar /> : <MobNavBar />

};

export default NavBar;

const NavBg = styled(Container)`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  margin: auto;
  background: ${(props) =>
    props.bg ||
    `linear-gradient(180deg,${props.theme.palette.bg}  3rem,rgba(4,18,18, 0))`};
  opacity: ${(props) => props.o || "0"};
  transition: opacity 0.4s ease-out;
`;

const MobNavBg = styled(Box)`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  animation: ${(props) => props.animate || bgTransition} 1s linear forwards;
  margin: auto;
  background: ${(props) =>
    props.bg ||
    `linear-gradient(122.05deg, rgba(233, 227, 227, 0.16) 1.71%, rgba(23, 22, 22, 0.61) 36.61%, rgba(0, 0, 0, 1.4) 66.34%, rgba(0, 0, 0, 0.37) 89.6%)`};
  opacity: ${(props) => props.o || "0"};
  transition: all 1s ease-out;
`;
