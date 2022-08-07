import styled, {css} from "styled-components";
import { styles } from "./global";



export const Container = styled.div`
  
  background: ${(props) => props.bg || props.theme.palette.bg };
  padding : ${(props) => props.p || "auto"};   
  margin : ${props => props.m || "auto"};
  width : ${props => props.w || "min( 100% , 1200px )"};
  height: ${(props) => props.h || "auto"};
  min-height : ${props => props.mh || ""};
  min-width : ${props => props.mw || ""};
  max-height : ${props => props.mxh || ""};
  max-width : ${props => props.mxw || ""};

  overflow : ${props => props.of || "auto"};
  position : ${props => props.pos || "relative"};
  top : ${props => props.top || ""};
  border-radius : ${props => props.rad || ""};
  bottom : ${props => props.bottom || ""};
  right : ${props => props.right || ""};
  left : ${props => props.left || ""};
  z-index : ${props => props.zi || ""};
  transform : ${props => props.tf || ""};
  margin-top : ${props => props.mt || ""};
  border   : ${props => props.border || ""};
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
`;

export const ContainerFluid = styled(Container)`

  width : ${props => props.w || "100%"};

  ${props => css`${props.sx}`};
 
`;



export const Section = styled.section`

background: ${(props) => props.bg || props.theme.palette.bg };
padding : ${(props) => props.p || "auto"};   
margin : ${props => props.m || "auto"};
width : ${props => props.w || "min( 100% , 900px )"};
height: ${(props) => props.h || "auto"};
min-height : ${props => props.mh || ""};
min-width : ${props => props.mw || ""};
max-height : ${props => props.mxh || ""};
max-width : ${props => props.mxw || ""};
overflow : ${props => props.of || "hidden"};
position : ${props => props.pos || "relative"};
top : ${props => props.top || ""};
border-radius : ${props => props.rad || ""};
bottom : ${props => props.bottom || ""};
right : ${props => props.right || ""};
left : ${props => props.left || ""};
z-index : ${props => props.zi || ""};
transform : ${props => props.tf || ""};
margin-top : ${props => props.mt || ""};
visibility : ${props => props.visible || ""};
border : ${props => props.border || ""};
opacity : ${props => props.o || ""};
animation : ${props => props.animate || ""};
font-family : ${props => props.family || "inherit"};
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