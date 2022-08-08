import React, { useState, useEffect, useRef, useContext } from "react";
import { Section } from "../../utility/styled_components/container";
import { Row, Col, Box } from "../../utility/styled_components/box";
import { Button } from "../../utility/styled_components/button";
import { getElementXY } from "../../utility";
import _ from "lodash";
import { TweenLite } from "gsap/gsap-core";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import AniHeading from "../reusable_components/heading";
import { PText, Span } from "../../utility/styled_components/text";
import { Strips } from "../animations/shapes/shapes";
import { SlideContext } from "../../store/slider_store";
import SliderBg from "../reusable_components/SliderBg";
import Wrapper from "../reusable_components/wrapper";



gsap.registerPlugin(MotionPathPlugin);

export default function AboutSlide(props) {
  const {
    state: { moveY },
    slideContextDispatch,
  } = useContext(SlideContext);

  const [dir, setDir] = useState(0);

  const ref = useRef();

  const ani_ref = useRef();

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
      } else TweenLite.to(ani_ref.current, { y: 600, onComplete: changeSlide });

      //console.log("about gsap", slide.slide_id);
    }
  }, [slide.slide_id]);

  useEffect(() => {
    if (visible && slide.cur_slide === slide.slide_id) {
      TweenLite.to(ani_ref.current, { y: 0 });
    }
  }, [slide.cur_slide]);

  return (
    <Section
      ref={ref}
      h="100%"
      pos="absolute"
      visible={visible ? "inherit" : "hidden"}
    >
      <SliderBg
        {...slide}
        vs={vs}
        slide={slide}
        visible={visible}
        itype="circle"
      />

    
      <Box
        d="flex"
        direction="columns"
        w="100%"
        h="100%"
        align="center"
      >
        <Box ref={ani_ref} w="auto" h="auto" tf="translate(0, 600px)"
          maxW = "600px"
        >
          <AniHeading type="p" title="About Me" size="5rem" />
          <PText type="s" size = "1rem" >
          Hey, my name is Ayush Bisht , a self-taught passionate Full stack developer from India, currently I'm pursing 
          Computer Science and Engineering.
          
          </PText>
          <br></br>
          <PText type="s" size = "1rem">
          I have been doing coding stuff since 9th standard and had build numerous projects for the web.
          I worked with various startups as a Full-stack developer. I'm good at React Js and Python for frontend and backend respectively.

          </PText> 
               
          </Box>
        <Box w="100px" h="100px">
          
        </Box>
      </Box>
     
    </Section>
  );
}
