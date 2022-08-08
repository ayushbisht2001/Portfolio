import React , {useState, useEffect, useRef, useContext} from "react";
import {
  ContainerFluid,
  Container,
} from "../../utility/styled_components/container";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../utility/styled_components/theme";
import AniHeading from "../reusable_components/heading";
import { Col, Row, Box, LinkBox } from "../../utility/styled_components/box";
import {
  Circle,
  Ring,
  CurlyRing,
  ULines,
  Triangle,
  Square,
  ORing,
  Rectangle,
} from "../animations/shapes/shapes";
import AnimateText from "../../animate_custom_lib/AnimateText";
import { LinkIcon } from "../../utility/styled_components/button";
import { BsLinkedin } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { FaTwitterSquare } from "react-icons/fa";
import { iuri } from "../../utility/styled_components/colors";
import NavBar from "../navigation/NavBar";
import _ from "lodash";
import { TweenLite } from "gsap/gsap-core";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { SlideContext } from "../../store/slider_store";
import SliderBg from "../reusable_components/SliderBg";
import Wrapper from "../reusable_components/wrapper";
import LiveShape from "../animations/shapes/LiveShapes";



export default function Intro(props) {

  const {
    state: { moveY },
    slideContextDispatch,
  } = useContext(SlideContext);

  const [dir, setDir] = useState(0);

  const ref = useRef();

  const ani_ref = useRef();
  const ani_ref_2 = useRef();


  const { slide, vs, visible, setSlideState } = props;

  const changeSlide = (e) => {
    setSlideState((prev) => ({
      ...prev,
      cur_slide: prev.slide_id,
    }));

    //console.log("changeslide", setSlideState);
  };

  useEffect(() => {
    if (ani_ref && visible && slide.cur_slide !== slide.slide_id) {
      if (slide.direction === "next") {
        // ani_ref.current.style.transform = "translate(0, -600px)"
        TweenLite.to(ani_ref.current, { y: -600, onComplete: changeSlide });
        TweenLite.to(ani_ref_2.current, { y: -600, onComplete: changeSlide });

      } else 
      {TweenLite.to(ani_ref.current, { y: 600, onComplete: changeSlide });
      TweenLite.to(ani_ref_2.current, { y: 600, onComplete: changeSlide });
      
    }
      //console.log("about gsap", slide.slide_id);
    }
  }, [slide.slide_id]);

  useEffect(() => {
    if (visible && slide.cur_slide === slide.slide_id) {
      TweenLite.to(ani_ref.current, { y: 0 });
      TweenLite.to(ani_ref_2.current, { y: 0 });

    }
  }, [slide.cur_slide]);


  
  return (
    <ContainerFluid
      mh="100vh"
      h="100vh"
      w = "100%"
      of = "hidden"
      pos="absolute"
      ref={ref}
      visible={visible ? "inherit" : "hidden"}
    >
      <Container ref = {ani_ref} pos="absolute"   zi = "1" w = "100%" h = "100%" of = "hidden">
        {/* <LiveShape
          stype = "triangle"
          right="1%"
          bottom="12%"
          tf="rotate(45deg) scale(2.4)"
          type="p"
        /> */}
        {/* <Square left="-5%" bottom="-3%" tf="rotate(30deg) scale(1.2) " />
        <ORing
          left="0%"
          bottom="0%"
          type="s"
          tf="scale(0.7)"
          isLive={true}
          direction={-1}
          scale={0.7}
        /> */}

        <LiveShape
          type="s"
          stype ="circle"
          right="2%"
          bottom="5%"
          tf="scale(0.2)"
          isLive={true}
          scale={0.2}
          pfill = "none"

        />
        {/* <Circle left="0%" top="0%" tf="scale(0.8)" /> */}
        {/* <ULines right="-80px" top="-120px" tf="scale(0.4) " fo="0.4" type="s" /> */}

        <LiveShape
          stype = "ring"
          type="t"
          right="-10px"
          bottom="-40px"
          tf="scale(0.3)"
          isLive={true}
          scale={0.3}
          direction = {-1}
          pfill = "none"
        />
        <CurlyRing left="55%" top="50%" tf="scale(1.3)" type="p" />

        {/* <LiveShape
          stype = "triangle"
    left="22%"
    top="20%"
    tf="rotate(30deg) scale(0.8) "
    type="s"
  /> */}
        {/* <LiveShape
          stype = "triangle" left="10%" top="30%" tf="rotate(30deg) scale(0.5)" type="t" /> */}
        <LiveShape
          stype = "triangle"
          left="7%"
          top="30%"
          type="s"
          isLive={true}
          scale={0.6}
          tf="scale(0.6)"
          direction={-1}
          pfill="none"

        />

        <LiveShape
          stype = "triangle"
          left="10%"
          bottom="15%"
          type="t"
          isLive={true}
          scale={0.4}
          pfill="none"
          tf="scale(0.4)"
        />
        <LiveShape
          stype = "square"
          left="55%"
          bottom="53%"
          type="s"
          isLive={true}
          scale={0.2}
          pfill="none"
          tf="scale(0.2)"
        />
        <LiveShape
          stype = "ring"
          type="t"
          left="20%"
          bottom="20%"
          tf="scale(0.2)"
          isLive={true}
          scale={0.2}
          pfill = "none"
          direction={1}
          strokeW = "0"
        />

        <LiveShape
          stype = "triangle"
          left="30%"
          bottom="5%"
          type="s"
          isLive={true}
          scale={0.4}
          pfill="none"
          tf="scale(0.4)"
        />
        <LiveShape
          stype = "square"
          left="15%"
          top="13%"
          type="s"
          isLive={true}
          scale={0.2}
          pfill="none"
          tf="scale(0.2)"
        />
      </Container>

      <Box pos="absolute" top="33%" p ="10px"   ref = {ani_ref_2}>
        <AniHeading
          title={"Namaste, my name is"}
          weight="200"
          size="1.8rem"
          sx={{ display: "block" }}
          type="t"
        />
        {/* <AnimateText
          width={1000}
          height={110}
          title={"Ayush Bisht"}
          primary={iuri}
          secondary="#F1FAEE"
          size="3rem"
        /> */}
      <AniHeading
          title={"Ayush Bisht"}
          sx={{ display: "block" }}
          size="5rem"
          type="p"
        />
        <AniHeading
          title={"I'm a Software Developer"}
          sx={{ display: "block" }}
          size="2.5rem"
          type="t"
        />

        <LinkBox>
          <LinkIcon size="2rem" to="localhost.com">
            <BsLinkedin />
          </LinkIcon>
          <LinkIcon size="2rem" to="localhost.com">
            <GoMarkGithub />
          </LinkIcon>
          <LinkIcon size="2rem" to="localhost.com">
            <FaTwitterSquare />
          </LinkIcon>
        </LinkBox>
      </Box>
    </ContainerFluid>
  );
}
