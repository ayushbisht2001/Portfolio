import React, { useRef, useEffect, useState, useContext } from "react";
import Intro from "../components/home/intro";
import {
  Container,
  ContainerFluid,
} from "../utility/styled_components/container";
import NavBar from "../components/navigation/NavBar";
import AboutSlide from "../components/home/about";
import Wrapper from "../components/reusable_components/wrapper";
import { getElementError } from "@testing-library/react";
import { getElementXY } from "../utility";
import { Box } from "../utility/styled_components/box";
import _ from "lodash";
import VS from "./virtualScroll";
import SliderBg from "../components/reusable_components/SliderBg";
import Testimonials from "../components/home/testimonials";
import Contact from "../components/home/contact_me";
import { SlideContext, SlideContextProvider } from "../store/slider_store";

function Slider(props) {
  const {
    state: {},
    slideContextDispatch,
  } = useContext(SlideContext);

  const [vs, setVS] = useState(null);
  const [slide, setSlideState] = useState({
    slide_id: 0,
    direction: "down",
    transformY: 0,
    prev_slide_id: 0,
    cur_slide: 0,
  });

  const [selectSlide, setSlide] = useState(0);
  const handler_ref = useRef();
  const target_ref = useRef();

  useEffect(() => {
    let vs_obj = new VS(
      handler_ref.current,
      target_ref.current,
      setSlideState,
      slideContextDispatch
    );
    setVS(vs_obj);
    return () => {
      vs_obj.destroy();
    };
  }, []);

  useEffect(() => {
    if (vs) {
      let bindWheel = vs.wheelLoop.bind(vs);
      requestAnimationFrame(bindWheel);
    }
  }, [vs]);

  useEffect(() => {
    if (vs) {
      console.log("state reset");
      // vs.resetWheel()

      setTimeout(() => {
        vs.has_animated();
      }, [1000]);
    }
  }, [slide]);
  return (
    <Wrapper spine={true} pos="auto" of="hidden" h="100vh">
      <Container h="100vh" ref={handler_ref}   of="hidden" w = "min(100%, 900px)" >
        <AboutSlide
          key={"About1"}
          visible={slide.cur_slide === 0}
          slide={slide}
          setSlideState={setSlideState}
          vs={vs}
        />
        <Contact
          key={"Contact"}
          visible={slide.cur_slide === 1}
          slide={slide}
          setSlideState={setSlideState}
          vs={vs}
        />
        <Testimonials
          key={"Testimonials"}
          visible={slide.cur_slide === 2}
          slide={slide}
          setSlideState={setSlideState}
          vs={vs}
        />
      </Container>
    </Wrapper>
  );
}

export default Slider;
