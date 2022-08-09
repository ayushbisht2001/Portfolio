import React, { useState, useEffect, useRef, useContext } from "react";
import { Section } from "../../utility/styled_components/container";
import { Row, Col, Box, LinkBox } from "../../utility/styled_components/box";
import { Button, NativeLink } from "../../utility/styled_components/button";
import { getElementXY } from "../../utility";
import _ from "lodash";
import { TweenLite } from "gsap/gsap-core";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import AniHeading from "../reusable_components/heading";
import { Span, PText } from "../../utility/styled_components/text";
import { Strips } from "../animations/shapes/shapes";
import { SlideContext } from "../../store/slider_store";
import SliderBg from "../reusable_components/SliderBg";
import { LinkIcon } from "../../utility/styled_components/button";
import { BsLinkedin } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { FaTwitterSquare } from "react-icons/fa";
import ContactForm, {
  SimpleContactForm,
} from "../reusable_components/ContactForm";

gsap.registerPlugin(MotionPathPlugin);

export default function Contact(props) {
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

    //console.log("changeslide", setSlideState)
  };

  useEffect(() => {
    if (ani_ref && visible && slide.cur_slide !== slide.slide_id) {
      if (slide.direction === "next") {
        // ani_ref.current.style.transform = "translate(0, -600px)"
        TweenLite.to(ani_ref.current, { y: -1200, onComplete: changeSlide });
      } else
        TweenLite.to(ani_ref.current, { y: 1200, onComplete: changeSlide });

      //console.log("about gsap", slide.slide_id)
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
      w="100%"
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
        wrap="wrap"
      >
        <Box
          ref={ani_ref}
          w="auto"
          h="auto"
          tf="translate(0, 1200px)"
          maxW="600px"
        >
          <AniHeading type="p" title="Let's connect" size="4rem" />
          <br></br>
          {/* <Span type="t" size="1.8rem">
            Follow me at ...
          </Span>

          <LinkBox>
            <NativeLink
              p="0"
              size="2rem"
              title="LinkedIn Profile"
              type="p"
              target="_blank"
              href="https://www.linkedin.com/in/ayush-bisht-9a5582192/"
            >
              <BsLinkedin />
            </NativeLink>
            <NativeLink
              p="0"
              size="2rem"
              title="LinkedIn Profile"
              type="p"
              target="_blank"
              href = "https://github.com/ayushbisht2001"

            >
                <GoMarkGithub />
              
            </NativeLink>
            <NativeLink></NativeLink>
            <NativeLink
              p="0"
              size="2rem"
              title="LinkedIn Profile"
              type="p"
              target="_blank"
              href="https://twitter.com/Ayu_Bisht21"
            >
              <FaTwitterSquare />
            </NativeLink>
          </LinkBox> */}
          <PText type="s" size="1.2rem">
            Interested in collaborating or investing? I’m always open to
            discussing product design work or partnership opportunities.
          </PText>
          <SimpleContactForm />
        </Box>
      </Box>
    </Section>
  );
}
