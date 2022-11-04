import React, {
  useContext,
  useEffect,
  createRef,
  useRef,
  useState,
} from "react";
import {
  Container,
  ContainerFluid,
} from "../../utility/styled_components/container";
import { Box } from "../../utility/styled_components/box";
import { Triangle, Rectangle, Circle, Square } from "../animations/shapes/shapes";
import {
  sliderItemDownTransition,
  sliderItemUpTransition,
} from "../../utility/styled_components/keyframes";
import { css, useTheme } from "styled-components";
import { SlideContext } from "../../store/slider_store";
import gsap from "gsap";
import { handleSliderShapes } from "../../utility";
import { TweenLite } from "gsap/gsap-core";
import { memo } from "react";

const slideOptionMapper = {
  0: "triangle",
  2: "cirlce",
  1: "square",
};

const Items = (props) => {
  const { itype = "circle", tref } = props;
  useEffect(() => {
    //console.log("items props", props);
  }, []);

  return itype === "triangle" ? (
    <Triangle {...props} tref={tref}  />
  ) : (itype === "square" ? 
    <Square   {...props} tref={tref}   />
   : itype ==="circle"  ? (
    <Circle   {...props} tref={tref}    />) : 
    ( <Rectangle {...props} tref = {tref} /> ) );
};

export const  SliderBg = (props) => {

  const { direction = "up", slide_id = 0, vs, slide, visible, itype } = props;
  const theme = useTheme()

  const [ref_list, setRef] = useState([
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef(),
  ]);
  const {
    state: { moveY, moveX, rotateX, rotateY },
    slideReduceDispatch,
  } = useContext(SlideContext);

  useEffect(() => {
    if (visible && slide.cur_slide === slide.slide_id) {
      //console.log("ref", ref_list);

      ref_list.forEach((ref, index) => {
        TweenLite.to(ref.current, {
          y: (moveY * (index + 1)) / 2,
          force3D: true,
        });
      });
    }
  }, [slide.cur_slide]);

  useEffect(() => {

    if(visible && slide.cur_slide === slide.slide_id)
 {   ref_list.forEach((ref, index) => {
      TweenLite.to(ref.current, {
        y: (moveY * (index + 1)) / 2,
        force3D: true,
      });
    });}
  }, [moveY]);

  useEffect(() => {
    if(visible && slide.cur_slide === slide.slide_id){
    ref_list.forEach((ref, index) => {
      TweenLite.to(ref.current, { y: 0, force3D: true });
    }); 
  }

  //console.log("props", props)
  }, []);


  useEffect(() => {
    if (visible && slide.cur_slide !== slide.slide_id) {

    //console.log("set ref")


      if (slide.direction === "next") {
        ref_list.forEach((ref, index) => {
          TweenLite.to(ref.current, { y: -800, force3D: true });
        });
      } else
        ref_list.forEach((ref, index) => {
          TweenLite.to(ref.current, { y: 800, force3D: true });
        });
    }
  }, [slide.slide_id]);

  return (
    <Container pos="absolute" h="100vh" w="100%" of="hidden">
      <Items
        left="20%"
        top="10%"
        itype={itype}
        tref={ref_list[0]}
        tf="translate(0, 800px)  scale(0.5) rotate(230deg) "
        stroke = {theme.palette.shape.c4}
      />

      <Items
        right="10%"
        top="30%"
        itype={itype}
        tf="translate(0, 800px)  scale(2) rotate(130deg)  "
        tref={ref_list[1]}
        stroke = {theme.palette.shape.c4}

      />
      <Items
        left="15%"
        top="40%"
        itype={itype}
        tf="translate(0, 800px)  scale(2) rotate(50deg)  "
        tref={ref_list[2]}
        stroke = {theme.palette.shape.c4}

      />
      <Items
        left="10%"
        bottom="0%"
        itype={itype}
        tf="translate(0, 800px)  scale(1) rotate(230deg)  "
        tref={ref_list[3]}
        stroke = {theme.palette.shape.c4}

      />

      <Items
        right="10%"
        bottom="10%"
        itype={itype}
        tf="translate(0, 800px)  scale(1) rotate(230deg)  "
        tref={ref_list[4]}
        stroke = {theme.palette.shape.c4}

      />
      <Items
        left="50%"
        bottom="30%"
        itype={itype}
        tf="translate(0, 800px)  scale(2) rotate(230deg)  "
        tref={ref_list[5]}
        stroke = {theme.palette.shape.c4}

      />
    </Container>
  );
}

export default memo(SliderBg)