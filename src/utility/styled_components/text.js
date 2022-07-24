import styled, { css } from "styled-components";
import { styles } from "./global";
import { ptextColor,pHColor1, pHColor2  } from "./colors";




// 'Anton', sans-serif
// 'Fredoka One', cursive
// 'Lora', serif
// 'Mulish', sans-serif
// 'Paytone One', sans-serif
// 'Press Start 2P', cursive
// 'Russo One', sans-serif
// 'Shadows Into Light', cursive
// 'Titan One', cursive

export const Text = styled.p`

  font-size: ${(props) => props.size || "1rem"};
  font-family: ${(props) => props.family || "'Comfortaa', cursive"};
  font-weight: ${(props) => props.weight || "normal"};
  margin : ${(props) => props.m || "0px"};
  padding : ${(props) => props.p || "5px"};
  color : ${(props) => props.color || (  props.type == "s" ? props.theme.palette.text.secondary : props.type == "t" ? props.theme.palette.text.ternary : props.theme.palette.text.primary  )};
  
  ${(props) =>
    css`
      ${props.sx}
    `}


`;

export const PText = styled(Text)`

  ${(props) =>
    css`
      ${props.sx}
    `}
`;

export const SText = styled(Text)`
  color : ${(props) => props.color ||  props.theme.palette.text.ternary};
  font-size : 1rem;
  
  &:hover { 
    color : ${props => props.hcolor ? props.hcolor : ( props.link ? props.theme.palette.text.secondary : "" ) };
  }

  ${(props) =>
    css`
      ${props.sx}
    `}
`;


export const HeadingMain = styled.h1`
  font-size: ${(props) => props.size || "25px"};
  font-family: ${(props) => props.family || "'Fredoka One', cursive"};
  font-weight: ${(props) => props.weight || "bold"};
  color : ${(props) => props.color || (  props.type == "s" ? props.theme.palette.text.secondary : props.type == "t" ? props.theme.palette.text.ternary : props.theme.palette.text.primary  )};
  z-index : 10;

  ${(props) =>
    css`
      ${props.sx}
    `}

`;

export const Heading1 = styled(HeadingMain)`
  color : ${(props) => props.theme.h1.color};

  ${(props) =>
    css`
      ${props.sx}
    `}
`;

export const Heading2 = styled(HeadingMain)`

  font-size: ${(props) => props.size || "20px"};
  color : ${(props) => props.theme.h2.color};

  ${(props) =>
    css`
      ${props.sx}
    `}
`;



export const Span = styled.span`
  font-size: ${(props) => props.size || "inherit"};
  font-family: ${(props) => props.family || "inherit"};
  font-weight: ${(props) => props.weight || "inherit"};
  color : ${(props) => props.color || (  props.type == "s" ? props.theme.palette.text.secondary : props.type == "t" ? props.theme.palette.text.ternary : props.theme.palette.text.secondary  )};
  margin : ${(props) => props.m || "5px"};
  padding : ${(props) => props.p || "5px"};
  ${(props) =>
    css`
      ${props.sx}
    `}

`;


export const AniSpan = styled.span`
  font-size: ${(props) => props.size || "inherit"};
  display : inline-block;
  font-family : inherit;
  ${(props) =>
    css`
      ${props.sx}
    `}

`;
