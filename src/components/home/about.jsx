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
import { Span } from '../../utility/styled_components/text'
import { Strips } from '../animations/shapes/shapes'
import {SlideContext} from '../../store/slider_store'

gsap.registerPlugin(MotionPathPlugin);


 
export default function AboutSlide(props) {

    const [state, setState] = useState({
        direction : "down",
        vis : "hidden"
    });

    
  const { state : {
    moveY,
    cur_slide_id,

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

        console.log("changeslide", setSlideState)
    }



    // useEffect(() => {

     
    // if(ani_ref && visible && slide.cur_slide != slide.slide_id)
    // {    
    //     let t1 = gsap.timeline({repeat: 1, onComplete : changeSlide})

    //     if(slide.direction === "up")
    //   { 
    //     // ani_ref.current.style.transform = "translate(0, -600px)"
    //     t1.to(ani_ref.current, {y : -600})
        
    //     }
    //     else
    //     t1.to(ani_ref.current, {y : 600});
        
    //     console.log("about gsap", slide)
    // }
     
    // }, [slide])

    // useEffect(( ) => {

    //     if(visible){

    //         gsap.set(ref.current, { y : 0})
    //     }

    // }, [visible])

    // useEffect(() => {

    //     if(visible)
    //     gsap.set(ani_ref.current, {y : moveY*4})
    // }
    // , [moveY])



  return (
   <Section  ref = {ref}  h ="100%" w = "100%" pos = "absolute" 
    visible = {visible ? "inherit" : "hidden"}  
    >
        
        <Box
        d = "flex"
        direction = "columns"
        w = "100%"
        h = "100%"
        align = "center"
        justify = "center"
        gap = "20px"
        >
            <Box
                w = "100px"
                bg = "magenta"
                h = "100px"
            >

            </Box>
        <Box
        ref = {ani_ref}
        w = "auto"
        h = "auto"
        >
        <AniHeading  type = "p" title = "About Me" size = "4rem"  />
        <Span   type ="s">I'm a typical software engineer!  + { cur_slide_id}</Span>
        </Box>

        </Box>
       
    
   </Section>
    )
}
