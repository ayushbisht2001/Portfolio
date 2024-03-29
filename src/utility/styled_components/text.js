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
  font-family: ${(props) => props.family || "Comfortaa , cursive"};
  font-weight: ${(props) => props.weight || "0"};
  margin : ${(props) => props.m || "0px"};
  padding : ${(props) => props.p || "5px"};
  color : ${(props) => props.color || (  props.type == "s" ? props.theme.palette.text.secondary : (props.type == "t" ? props.theme.palette.text.ternary : props.theme.palette.text.primary  ))};
  line-height : ${props => props.lh || "1.6"};
  


  @media (max-width: 1000px) {   
    font-size : ${(props) => props.md || "0.4rem"};
  }

  @media (max-width: 500px) {   
    font-size : ${(props) => props.sm || "0.3"};
  }

  @media (max-width: 300px) {   
    font-size : ${(props) => props.xs || "0.2"};
  }
  ${(props) =>  css`
      ${props.sx}
    `}



`;

export const PText = styled(Text)`

${(props) =>  css`
${props.sx}
`}
@media (max-width: 1000px) {   
  font-size : ${(props) => props.md || `calc( ${props.size} - ${props.size} / 4 )`};
}

@media (max-width: 500px) {   
  font-size : ${(props) => props.sm ||  `calc( ${props.size} - ${props.size} / 3)`};
}

@media (max-width: 300px) {   
  font-size : ${(props) => props.xs ||  `calc( ${props.size} - ${props.size} / 2.5 )`};
}

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

  @media (max-width: 1200px) {   
    font-size : ${(props) => props.xl || "1rem"};
  }


  @media (max-width: 1000px) {   
    font-size : ${(props) => props.md || "0.6"};
  }

  @media (max-width: 500px) {   
    font-size : ${(props) => props.sm || "0.4"};
  }

  @media (max-width: 300px) {   
    font-size : ${(props) => props.xs || "0.3"};
  }
  ${(props) =>
    css`
      ${props.sx}
    `}
`;


export const HeadingMain = styled.h1`
  font-size: ${(props) => props.size || "3rem"};
  font-family: ${(props) => props.family || "'Fredoka One', cursive"};
  font-weight: ${(props) => props.weight || "bold"};
  color : ${(props) => props.color || (  props.type == "s" ? props.theme.palette.text.secondary : props.type == "t" ? props.theme.palette.text.ternary : props.theme.palette.text.primary  )};
  z-index : 10;

  @media (max-width: 1200px) {   
    font-size : ${(props) =>  `calc( ${props.size}  )`};
  }


  @media (max-width: 1000px) {   
    font-size : ${(props) =>  `calc( ${props.size} - ${props.sfactor || 1 } * ${props.size} / 5)`};
  }

  @media (max-width: 500px) {   
    font-size : ${(props) =>  `calc( ${props.size} - ${props.sfactor || 1 } * ${props.size} / 3)`};
    ${props => props.sm}
  }

  @media (max-width: 380px) {   
    font-size : ${(props) =>  `calc( ${props.size} - ${props.sfactor || 1 } * ${props.size} / 2.5 )`};
  }
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

  font-size: ${(props) => props.size || "3rem"};
  color : ${(props) => props.theme.palette.text.primary};

  @media (max-width: 1200px) {   
    font-size : ${(props) => props.xl || "20px"};
  }


  @media (max-width: 1000px) {   
    font-size : ${(props) => props.md || "15px"};
  }

  @media (max-width: 500px) {   
    font-size : ${(props) => props.sm || "12px"};
  }

  @media (max-width: 300px) {   
    font-size : ${(props) => props.xs || "10px"};
  }
  ${(props) =>
    css`
      ${props.sx}
    `}
`;



export const Span = styled.span`
  height : ${props => props.h || ""};
  width : ${props => props.w || ""};
  display : ${props => props.d  ||""};
  font-size: ${(props) => props.size || "inherit"};
  font-family: ${(props) => props.family || "inherit"};
  font-weight: ${(props) => props.weight || "inherit"};
  color : ${(props) => props.color || (  props.type == "s" ? props.theme.palette.text.secondary : props.type == "t" ? props.theme.palette.text.ternary : props.theme.palette.text.primary  )};
  margin : ${(props) => props.m || "5px"};
  padding : ${(props) => props.p || "5px"};
  position : ${props => props.pos || ""};
  background : ${(props) => props.bg || (  props.bgtype == "p" ? props.theme.palette.primary : props.bgtype == "t" ? props.theme.palette.ternary : "unset" )};

  @media (max-width: 1200px) {   
    font-size : ${(props) => props.xl || "inherit"};
  }


  @media (max-width: 1000px) {   
    font-size : ${(props) => props.md || `calc( ${props.size} - ${props.size} / 3 )`};
  }

  @media (max-width: 500px) {   
    font-size : ${(props) => props.sm ||  `calc( ${props.size} - ${props.size} / 3 )`};
  }

  @media (max-width: 350px) {   
    font-size : ${(props) => props.xs ||  `calc( ${props.size} - ${props.size} / 2.3 )`};
  }
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


export const Label = styled.label`


font-size: ${(props) => props.size || "1rem"};
font-family: ${(props) => props.family || "'Fredoka One', cursive"};
font-weight: ${(props) => props.weight || "0"};
margin : ${(props) => props.m || "0px"};
padding : ${(props) => props.p || "5px"};
color : ${(props) => props.color || (  props.type == "s" ? props.theme.palette.text.secondary : (props.type == "t" ? props.theme.palette.text.ternary : props.theme.palette.text.primary  ))};
line-height : ${props => props.lh || "1.6"};




@media (max-width: 1200px) {   
  font-size : ${(props) => props.xl || "inherit"};
}


@media (max-width: 1000px) {   
  font-size : ${(props) => props.md || `calc( ${props.size} - ${props.size} / 5 )`};
}

@media (max-width: 500px) {   
  font-size : ${(props) => props.sm ||  `calc( ${props.size} - ${props.size} / 2 )`};
}

@media (max-width: 300px) {   
  font-size : ${(props) => props.xs ||  `calc( ${props.size} - ${props.size} / 2 )`};
}
${(props) =>  css`
    ${props.sx}
  `}


`