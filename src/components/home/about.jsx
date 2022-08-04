import React, {useState, useEffect, useRef} from 'react'
import { Section } from '../../utility/styled_components/container'
import { Row, Col } from '../../utility/styled_components/box'
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


gsap.registerPlugin(MotionPathPlugin);


 
export default function AboutSlide(props) {

    const [state, setState] = useState({
        direction : "down",
        vis : "hidden"
    });

    const [ dir, setDir] = useState(0)
    
    const ref = useRef()

  

    const {
        movement, 
        visible = false, 
        transformY = 0, 
        slide_id, 
        direction
    } = props

   
    useEffect(() => {

     
    if(ref)
    {    if(visible){

         setState( (prev) => ({
            ...prev, 
            vis : "inherit",
            direction : direction
         }))

        ref.current.style.opacity = 1


        }else{
            setState( (prev) => ({
                ...prev, 
                vis : "hidden",
                direction : direction

             }))
             ref.current.style.opacity = 0

        }

}
     
    }, [visible])

  return (
   <Section o = "0" trans = "opacity 1s ease-in-out"  bg ="transparent" ref = {ref}  h ="100%" w = "100%" pos = "absolute"  visible = {state.vis}  >
      <Row
        w = "100%"
        h = "500px"
        justify = "center"
        align = "center"
        rows = "auto"
        cols = "300px auto"
        p = "300px 100px"
    >
        <Col>



        </Col>
        <Col>

            <AniHeading type = "p" title = "About Me" size = "4rem"  />
            <Span type ="s">I'm a typical software engineer!</Span>

        </Col>

    </Row>
   
   </Section>
    )
}
