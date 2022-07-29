import styled, {css} from "styled-components";



export const Box = styled.div`
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
overflow : ${props => props.overflow || ""};
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
${props => css`${props.sx}`};

`;

export const Row = styled(Box)`
  display : grid;
  grid-template-columns: ${(props) => props.cols || "100%"};
  grid-template-rows: ${(props) => props.rows || "100%"};
  grid-column-gap: ${(props) => props.cgap || "5px"};
  width : ${props => props.w || "100%"};
  
  ${props => css`${props.sx}`};
 
`;

export const Col = styled(Box)`

display : ${(props) => props.d || "block"};
align-items: ${(props) => props.align || "left"};
justify-content: ${(props) => props.justify || "flex-start"};
flex-direction : ${(props) => props.direction || "row"};
flex-wrap : ${(props) => props.wrap || "wrap"};
font-family : ${props => props.family || "inherit"};
${props => css`${props.sx}`};

`

export const LinkBox = styled(Box)`

  min-width : 50px;
  max-height : 100px;
  padding : 10px 5px;
  margin : 5px;
  display : flex;
  flex-direction : row;
  justify-content : flex-start;
  align-items : center;


`

export const Chips = styled.span`

  width : ${props => props.w || "100px"};
  height: ${(props) => props.h || "50px"};
  background: ${(props) => props.bg || props.theme.palette.primary};
  color: ${(props) => props.color || ""};   
  margin : ${(props) => props.m || ""};
  padding : ${(props) => props.p || ""};   
  border-radius : ${props => props.rad || "10px"};
  position : ${props => props.pos || "relative" };
  top : ${props => props.top || ""};
  bottom : ${props => props.bottom || ""};
  left : ${props => props.left || ""};
  right : ${props => props.right || ""};

`
