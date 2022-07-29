import React , {useState, useEffect} from "react";
import { Row, Col } from "../../utility/styled_components/box";
import { Container } from "../../utility/styled_components/container";
import { Span } from "../../utility/styled_components/text";
import { LinkIcon } from "../../utility/styled_components/button";
import { GoMarkGithub } from "react-icons/go";
import { FaTwitterSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import styled from "styled-components";
import { Box } from "../../utility/styled_components/box";



const NavBar = () => {


    const [y, setY] = useState(0);

    
    const handleScroll = (e) =>{
        
        const val = window.pageYOffset*0.9 / 700;
        setY(val)
    }

    useEffect(() => {

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }

    }, [])

  return (
    <Container  h ="8rem" w = "100%" zi="100" pos = "fixed"  of = "hidden" bg="transparent" >
        <NavBg o = {y}>
        </NavBg>

        <Container of = "hidden" p = "1rem 0px" h = "100px"  bg="transparent"  >

      <Row h="100%" w="100%" align="center" cols="50% 50%">
        <Col h="auto"  family = "Comfortaa"  >
          <Span  type="s" weight="10" size="1.4rem">
            Nav[<Span>"ayush"</Span>]
          </Span>
        </Col>
        <Col  family = "Comfortaa"  d= "flex" direction ="row" wrap = "no-wrap" align = "center" justify = "flex-end" >
          <Span type = "s" m = "auto 10px auto auto" >
            Nav[ "<Span p="0px">home</Span>" ]
          </Span>
          <Span type = "s" m = "auto 10px auto auto">
            Nav["<Span p ="0px">works</Span>"]
          </Span>
          <Span type = "s" m = "auto 10px auto auto">
            Nav["<Span p="0px">projects</Span>" ]          </Span>
          
          <LinkIcon to="localhost.com" size = "1.5rem"  m = "10px 1px auto 10px">
            <BsLinkedin />
          </LinkIcon>
          <LinkIcon to="localhost.com" size = "1.5rem" m = "10px 1px auto 0px">
            <GoMarkGithub />
          </LinkIcon>
        </Col>
      </Row>
      </Container>

    </Container>
  );
}

export default NavBar;


const NavBg = styled(Container)`
    position : absolute;
    height : 100%;
    width : 100%;
    top : 0px;
    bottom : 0px;
    right : 0px;
    left : 0px;
    margin :auto;
    background : ${props => props.bg || `linear-gradient(180deg,${props.theme.palette.bg}  3rem,rgba(4,18,18, 0))`};
    opacity : ${props => props.o || "0"};
    transition : opacity 0.4s ease-out;
`
