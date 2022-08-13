import React, {useState, useEffect, useRef, useContext} from 'react'
import { Section } from '../../utility/styled_components/container'
import { Row, Col, Box, LinkBox } from '../../utility/styled_components/box'
import { Button } from '../../utility/styled_components/button';
import { getElementXY } from '../../utility';
import _ from "lodash"
import { TweenLite } from "gsap/gsap-core";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import AniHeading from '../reusable_components/heading'
import { Span , PText} from '../../utility/styled_components/text'
import { Strips } from '../animations/shapes/shapes'
import {SlideContext} from '../../store/slider_store'
import SliderBg from '../reusable_components/SliderBg'
import { LinkIcon } from "../../utility/styled_components/button";
import { BsLinkedin } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { FaTwitterSquare } from "react-icons/fa";
import ContactForm, { SimpleContactForm } from '../reusable_components/ContactForm';
import SkillBubble from "../reusable_components/SkillBubble"


gsap.registerPlugin(MotionPathPlugin);


 
export default function Skills(props) {

    
  const { state : {
    moveY
}, slideContextDispatch }  = useContext(SlideContext) 

    const [ dir, setDir] = useState(0)
    
    const ref = useRef()

    const ani_ref = useRef()

    const {
        slide,
        vs,
        visible,
        setSlideState ,
    } = props;

    
    const changeSlide = (e) => {

        setSlideState((prev) => ({
            ...prev,
            cur_slide : prev.slide_id
        }))

        
        //console.log("changeslide", setSlideState)
    }



    useEffect(() => {

     
    if(ani_ref && visible && slide.cur_slide !== slide.slide_id)
    {    
        
        if(slide.direction === "next")
      { 
        // ani_ref.current.style.transform = "translate(0, -600px)"
        TweenLite.to(ani_ref.current, {y : -700, onComplete : changeSlide})
        }
        else
        TweenLite.to(ani_ref.current, {y : 700, onComplete : changeSlide})

        
        //console.log("about gsap", slide.slide_id)
    }
     
    }, [slide.slide_id])

    useEffect(( ) => {

        if(visible && slide.cur_slide === slide.slide_id){

            TweenLite.to(ani_ref.current, { y : 0})
        }

    }, [slide.cur_slide])

 



  return (
   <Section  ref = {ref}  h ="100%" w = "100%" pos = "absolute" 
    visible = {visible ? "inherit" : "hidden"}  
    >
        
      <SliderBg   {...slide} vs = {vs} slide = {slide} visible = {visible} itype = "triangle" />

      <Box
        d="flex"
        direction="columns"
        w="100%"
        h="100%"
        align="center"
        wrap = "wrap"
      >
        <Box ref={ani_ref} w="100%" h="auto" tf="translate(0, 700px)"
          maxW = "800px"
        >
          <AniHeading type="p" title="Skills" size="4rem" />

            <Row 
              w = "min( 100% , 800px)"
              cols = "auto auto auto"
              rows = "auto"
              family = "Comfortaa"
              gap = "5px 5px"
              sm = {`

              grid-template-columns : 50% 50%;

              `}
            >
              
              <Span size = "1.2rem" type = "s" >Python,&nbsp;&nbsp; Django, &nbsp;&nbsp;DRF</Span>
              <Span size = "1.2rem" type = "s" >Javascript, &nbsp;&nbsp;React&nbsp;JS, &nbsp;&nbsp;Jquery</Span>
              <Span size = "1.2rem" type = "s" >HTML, &nbsp;&nbsp;Canvas, &nbsp;&nbsp;SVG</Span>
              <Span size = "1.2rem" type = "s" >CSS3, &nbsp;&nbsp;SASS</Span>
              <Span size = "1.2rem" type = "s" >Bootstrap, &nbsp;&nbsp;MUI</Span>

              <Span size = "1.2rem" type = "s" > C/C++ </Span>
              <Span size = "1.2rem" type = "s" >Redux</Span>
              <Span size = "1.2rem" type = "s" >DBMS, &nbsp;&nbsp;MYSQL, &nbsp;&nbsp; Postgres</Span>
              <Span size = "1.2rem" type = "s" >Git, &nbsp;&nbsp;Git-bash</Span>




            </Row>

        </Box>

          <Box>
            {/* <SkillBubble /> */}
          </Box>
        
      </Box>
       
    
   </Section>
    )
}
