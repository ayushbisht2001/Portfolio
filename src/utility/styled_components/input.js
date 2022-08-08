import styled, { css } from "styled-components";
import { ptextColor,pHColor1, pHColor2  } from "./colors";




export const Form = styled.form`
align-items: ${(props) => props.align || ""};
justify-content: ${(props) => props.justify || ""};
flex-direction : ${(props) => props.direction || ""};
flex-wrap : ${(props) => props.wrap || ""};
background: ${(props) => props.bg || ""};
color: ${(props) => props.color || ""};   
margin : ${(props) => props.m || ""};
padding : ${(props) => props.p || ""};   
min-width : ${(props) => props.minW || ""};
max-width : ${(props)=> props.maxW || ""};
min-height : ${(props) => props.minH || ""};
max-height : ${(props) => props.maxH || ""};
position : ${props => props.pos || "" };
top : ${props => props.top || ""};
border-radius : ${props => props.rad || ""};
bottom : ${props => props.bottom || ""};
right : ${props => props.right || ""};
left : ${props => props.left || ""};
z-index : ${props => props.zi || ""};
overflow : ${props => props.of || ""};
class : ${props => props.cName || ""};
border : ${props => props.border || ""};
opacity : ${props => props.o || ""};
padding : ${(props) => props.p || "0px"};   
margin : ${props => props.m || "0px"};
width : ${props => props.w || "auto"};
height: ${(props) => props.h || "auto"};
display : ${(props) => props.d || "block"};
z-index : ${(props) => props.zi || "1"};
animation : ${props => props.animate || ""};
transform : ${props => props.tf || ""};
font-family : ${props => props.family || "inherit"};
gap : ${props => props.gap || ""};
transition : ${props => props.trans || ""};
${props => css`${props.sx}`};


@media (max-width: 1400px) {   
  ${(props) => props.xl || "none"};
}

@media (max-width: 1100px) {   
  ${(props) => props.lg || "none"};
}

@media (max-width: 800px) {   
  ${(props) => props.md || "none"};
}

@media (max-width: 500px) {   
  ${(props) => props.sm || "none"};
}

@media (max-width: 300px) {   
  ${(props) => props.xs || "none"};
}


`

export const Input = styled.textarea`

    width : ${props => props.w || "100px"};
    height : ${props => props.h || "20px"};
    resize : none;
    border-radius : 10px;
    margin  : ${props => props.m || "0px"};
    padding  : ${props => props.p || "10px"};
    color : ${(props) => props.color || (  props.type == "s" ? props.theme.palette.text.secondary : props.type == "t" ? props.theme.palette.text.ternary : props.theme.palette.text.ternary  )};



`


export const ContactInput = styled(Input)`

    width : ${props => props.w || "100px"};
    height : ${props => props.h || "20px"};

`

export const SimpleContactInput = styled(Input)`

    width : ${props => props.w || "100%"};
    height : ${props => props.h || "2.5rem"};
    background : none;
    transition : all 0.6s ease-out;

    &:is(:focus, :focus-within){
        outline : red;
        border-color : ${props => props.theme.palette.primary};

    }


`