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

const URL = process.env.PUBLIC_URL;


gsap.registerPlugin(MotionPathPlugin);

export default function AboutSlide(props) {
  const {
    state: { moveY },
    slideContextDispatch,
  } = useContext(SlideContext);

  const [dir, setDir] = useState(0);

  const ref = useRef();

  const ani_ref = useRef();
  const ani_ref2 = useRef();


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
        TweenLite.to(ani_ref.current, { y: -700, onComplete: changeSlide });
        TweenLite.to(ani_ref2.current, { y: -700, onComplete: changeSlide });

      } else {
        TweenLite.to(ani_ref.current, { y: 700, onComplete: changeSlide });
        TweenLite.to(ani_ref2.current, { y: 700, onComplete: changeSlide });

}
      //console.log("about gsap", slide.slide_id);
    }
  }, [slide.slide_id]);

  useEffect(() => {
    if (visible && slide.cur_slide === slide.slide_id) {
      TweenLite.to(ani_ref.current, { y: 0 });
      TweenLite.to(ani_ref2.current, { y: 0 });


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
        itype="square"
      />

    
      <Box
        d = "flex"
        direction = "row"
        w="100%"
        h="100%"
        align="center"
        gap = "0px 30px"
        md = {`
        gap : 40px 0px;
        flex-direction : column;
        justify-content : center;
        align-items : center;
        `}

> 
        <Box ref={ani_ref}   h="auto"    tf="translate(0, 700px)"
          maxW = "600px"
       
>
          <AniHeading type="p" title="About Me" size="5rem" />
          <PText type="s" size = "1rem" >
          Hey 👋, my name is Ayush Bisht , a self-taught passionate Full stack developer from India, based in Uttarakhand with proven technical, 
          organizational, and communication skills, working with Agile and designing software solutions.  
          Offering strong React skills and working experience with SQL, Python, Django, JavaScript frameworks, and many more.
          </PText>
          {/* <PText type="s" size = "1rem">
              I have been doing programming  since 11th standard and had build countless projects since then. 
          </PText>  */}
          </Box>
            <Box
              w = "300px"
              h = "300px"
              p = "15px"
              rad = "5px"
              border = "2px solid #414141"
              trans = "filter 0.6s ease"
              tf="translate(0, 700px)"
              sx = {`
              cursor : pointer;
              filter : grayscale(90%);

              & img{
                border-radius : inherit;
              }
              &:hover{
                filter : grayscale(0%);

              }


              `}
              ref = {ani_ref2}


            
>
              <img width = "100%" height = "100%" src = {`${URL}/assets/images/profile.jpg`} />
            </Box>
      </Box>
     
    </Section>
  );
}
