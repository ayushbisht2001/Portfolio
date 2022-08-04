import React, {useState, useRef, useEffect} from 'react'
import { Section } from '../../utility/styled_components/container'
import { Row, Col } from '../../utility/styled_components/box'
import AniHeading from '../reusable_components/heading'
import { Span } from '../../utility/styled_components/text'
import { Strips } from '../animations/shapes/shapes'


export default function Testimonials(props) {
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
    <Section n o = "0" trans = "opacity 1s ease-in-out"  bg ="transparent" ref = {ref}  h ="100%" w = "100%" pos = "absolute"  visible = {state.vis} >
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

        <Strips />

        </Col>
        <Col>

            <AniHeading type = "p" title = "Testinomials" size = "4rem"  />
            <Span type ="s">Ayush is a nice guy.</Span>

        </Col>

    </Row>
  </Section>
    )
}
