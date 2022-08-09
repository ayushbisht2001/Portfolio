import React, {useState, useEffect, useRef, useContext} from 'react'
import { Section } from '../../utility/styled_components/container'
import { Row, Col, Box } from '../../utility/styled_components/box'
import { Button } from '../../utility/styled_components/button';
import { getElementXY } from '../../utility';
import _ from "lodash"
import { TweenLite } from "gsap/gsap-core";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import AniHeading from '../reusable_components/heading'
import { Span, PText } from '../../utility/styled_components/text'
import { Strips } from '../animations/shapes/shapes'
import {SlideContext} from '../../store/slider_store'
import SliderBg from '../reusable_components/SliderBg'
import TestimonialCard from '../reusable_components/TestimonialCard';


gsap.registerPlugin(MotionPathPlugin);


 
export default function Testimonials(props) {

    
  const { state : {
    moveY
}, slideContextDispatch }  = useContext(SlideContext) 

    const [ dir, setDir] = useState(0)
    
    const ref = useRef()

    const ani_ref = useRef()
    const ani_ref_2 = useRef()


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
        TweenLite.to(ani_ref.current, {y : -1200, onComplete : changeSlide})
        TweenLite.to(ani_ref_2.current, {y : -1200, onComplete : changeSlide})

        }
        else
      {
          TweenLite.to(ani_ref.current, {y : 1200, onComplete : changeSlide})
        TweenLite.to(ani_ref_2.current, {y : 1200, onComplete : changeSlide})

}
        
        //console.log("about gsap", slide.slide_id)
    }
     
    }, [slide.slide_id])

    useEffect(( ) => {

        if(visible && slide.cur_slide === slide.slide_id){

            TweenLite.to(ani_ref.current, { y : 0})
            TweenLite.to(ani_ref_2.current, { y : 0})

        }

    }, [slide.cur_slide])

 



  return (
   <Section  ref = {ref}  h ="100%" w = "100%" pos = "absolute" 
    visible = {visible ? "inherit" : "hidden"}  
    >
        
      <SliderBg   {...slide} vs = {vs} slide = {slide} visible = {visible} itype = "square" />
      <Box
        d="flex"
        direction="row"
        w="100%"
        h="100%"
        align = "center"
        p = "20px 10px"
        md = {`
          flex-direction : column;
          justify-content : center;
          align-items : unset;
        
        `}
        
      >
        <Box ref={ani_ref} w="auto" h="auto" p = "20px 10px" tf="translate(0, 1200px)"
          maxW = "600px"
          talign  = "left"
        >
          <AniHeading type="p"  title="Testimonials" size="4rem" />
          <Span type="t" p ="0"  m = "0" size = "1.4rem"   >
          People I've worked with have said some nice things...
        </Span>
      
          </Box>
        <Box w="auto" h="auto" ref = {ani_ref_2} >
          <TestimonialCard />
        </Box>
      </Box>
       
    
   </Section>
    )
}
