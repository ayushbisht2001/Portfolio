import React from 'react'
import styled from 'styled-components'
import AnimateText from '../../animate_custom_lib/AnimateText'
import { Box } from '../../utility/styled_components/box'
import { PText, Span } from '../../utility/styled_components/text'
import { Triangle } from '../animations/shapes/shapes'
import AniHeading from '../reusable_components/heading'

const URL = process.env.PUBLIC_URL;

const Card = (props) =>{

  return(
    <CardBox w = "100%" h = "400px"   >
        <Box d = "flex" justify = "flex-start" align = "center" h = "100%" w = "100%"  >
            <ImgBox w = "300px" h = "300px"  >
              <Triangle  pfill = "none" isLive = {true} />
              <Box w = '100%' h = '100%' >
                <img src = {`${URL}/assets/images/projects/pypaint.png`} />
              </Box>
            </ImgBox>
            <Box>
              <AniHeading size = '80px' title = "PyPainter" type = 'p' />
              <Span  type = 't' size = '30px' m ='120px 0px' > // 12 July, 2021   </Span>
              <PText type = 's' m = '20px 10px' size = '20px' weight = 'semibold' > Microsoft paint clone, build with pure python.   </PText>
            </Box>
        </Box>

    </CardBox>
  )
}



export default function WorkCard() {
  return (
   <Wrapper pos = "relative" m = "auto" h = "100vh"  >
       
      <Card />
        
    </Wrapper>
  )
}


const ImgBox = styled(Box)`
  
  --border-clr : ${props => props.theme.palette.text.ternary};
  filter: drop-shadow(1px 0px 0px var(--border-clr))        
          drop-shadow(-1px 0px 0px var(--border-clr))
          drop-shadow(0px 1px 0px var(--border-clr))
          drop-shadow(0px -1px 0px var(--border-clr))
          drop-shadow(1px 1px 0px var(--border-clr))
          drop-shadow(-1px -1px 0px var(--border-clr))
          drop-shadow(-1px 1px 0px var(--border-clr))
          drop-shadow(1px -1px 0px var(--border-clr));

  &  div:nth-of-type(1){
    clip-path : polygon(50% 0%, 0% 100%, 100% 100%); 
    position : relative;
    overflow : hidden;
    background : ${(props) => props.bg || ( props.theme.palette.bg )};

  }
    
  & > div img{

    width : 200px;
    height : 200px;
    position : absolute;
    top : 100%;
    right : -40px;
    transition-delay : 0.2s;
    animation : moveproject 0.5s ease-out   forwards ;
    filter : grayscale(90%);
    border-radius : 20px;

    &:hover{
    filter : grayscale(0%);

    }
  
  }
  @keyframes  moveproject {
    to{
      top : 40%;
      right : 0%;
    }
  }


`


const Wrapper = styled(Box)`
 overflow : hidden;
 display : flex;
 flex-direction : column;
 justify-content : center;
 align-items : center;

`

const CardBox = styled(Box)`
   
    background: ${(props) => props.bg || props.theme.palette.bg};
    
`