import styled, { css } from "styled-components";
import { styles } from "./global";
import { ptextColor,pHColor1, pHColor2  } from "./colors";






export const Text = styled.p`
  ${styles(props)};

  font-size: ${(props) => props.size || "18px"};
  font-family: ${(props) => props.family || "Montserrat, sans-serif"};
  font-weight: ${(props) => props.weight || "normal"};
  margin : ${(props) => props.p || "5px"};
  padding : ${(props) => props.p || "5px"};
  ${(props) =>
    css`
      ${props.sx}
    `}


`;

export const PText = styled(Text)`
  ${styles(props)};
  color : ${(props) => props.theme.ptext.color};

  ${(props) =>
    css`
      ${props.sx}
    `}
`;

export const SText = styled(Text)`
  ${styles(props)};
  color : ${(props) => props.theme.ptext.color};

  ${(props) =>
    css`
      ${props.sx}
    `}
`;


export const HeadingMain = styled.h1`
  ${styles(props)};
  font-size: ${(props) => props.size || "25px"};
  font-family: ${(props) => props.family || "Montserrat, sans-serif"};
  font-weight: ${(props) => props.weight || "bold"};

  ${(props) =>
    css`
      ${props.sx}
    `}

`;

export const Heading1 = styled(HeadingMain)`
  ${styles(props)};
  color : ${(props) => props.theme.h1.color};

  ${(props) =>
    css`
      ${props.sx}
    `}
`;

export const Heading2 = styled(HeadingMain)`

  ${styles(props)};
  font-size: ${(props) => props.size || "20px"};
  color : ${(props) => props.theme.h2.color};

  ${(props) =>
    css`
      ${props.sx}
    `}
`;
