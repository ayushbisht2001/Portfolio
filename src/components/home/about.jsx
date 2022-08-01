import React, {useState, useEffect, useRef} from 'react'
import { Section } from '../../utility/styled_components/container'
import { Row, Col } from '../../utility/styled_components/box'
import { Button } from '../../utility/styled_components/button';
import { getElementXY } from '../../utility';


export default function AboutSlide(props) {

    const [state, setState] = useState({
        direction : 0,
        vis : "hidden"
    });

    const [ dir, setDir] = useState(0)
    
    const ref = useRef()

  

    const {
        movement, 
        visible = false
    } = props

   
    useEffect(() => {
        

        if(movement === "up")
        setDir(-1)
        else
        if(movement == "down")
        setDir(1)
        else
        setDir(0)

     console.table(props)
     console.table(dir)

     
    }, [visible, movement])

  return (
   <Section ref = {ref}  h ="100vh" w = "100%" of ="hidden"   >
 
    <Row
        align = "center"
        m = "auto"
        cols = "40% 50%"
        rows = "500px"
        h = "100vh"
        justify = "center"
        w = "100%"
        pos = "relative"
    >
        <Col
        bg = "red"
        tf = {`translateY(${dir*600}px)`}
        trans = "all 1s ease"
        >
            Hello bitches
        </Col>
        <Col
        bg = "red"
        
        >
        </Col>

    </Row>
   </Section>
    )
}
