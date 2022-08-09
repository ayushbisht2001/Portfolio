import styled, { css } from "styled-components";
import { styles } from "./global";
import { Link } from "react-router-dom";

export const Button = styled.button`

  width : ${props => props.w || "auto"};
  height : ${props => props.h || "auto"};
  padding : ${props => props.p || "5px 10px"};
  margin : ${props => props.m || "5px"};
  background : ${props => props.bg || props.theme.palette.primary};
  border-radius : ${props => props.rad || "10px"};
  border : ${props => props.border || "none"};
  color : ${(props) => props.color || (  props.type == "s" ? props.theme.palette.text.secondary : props.type == "t" ? props.theme.palette.text.ternary : props.theme.palette.text.secondary  )};
  cursor : pointer;
  float : ${props => props.float || ""};
  ${(props) =>
    css`
      ${props.sx}
    `}
`;

export const PrimaryBtn = styled(Button)`

background : ${props => props.bg || props.theme.palette.primary};

  ${(props) =>
    css`
      ${props.sx}
    `}
`;

export const SecondaryBtn = styled(Button)`

background : ${props => props.bg || props.theme.palette.secondary};

  ${(props) =>
    css`
      ${props.sx}
    `}
`;

export const LinkButton = styled(Link)`
  width: ${(props) => props.w || "auto"};
  padding: 10px;
  text-align: center;
  text-decoration: none;
  height: ${(props) => props.h || "auto"};
  border-radius: 6px;
  font-family: ${(props) => props.family || "'Comfortaa', cursive"};
  background: ${(props) => props.bg || props.theme.palette.text.secondary};
  color: ${(props) => props.color || props.theme.palette.text.ternary};
  font-size: 1rem;
  font-weight : ${props => props.wght || "semibold"};
  transition: all 0.2s ease 0s;
  &:hover {
    background: ${(props) => props.hbg || props.theme.palette.text.primary};
    color: ${(props) => props.hcolor || props.theme.palette.text.secondary};
    transform: scale(1.1);
  }

  & p {
  }
`;


export const NativeLink = styled.a`

text-decoration: none;
width: ${(props) => props.w || "auto"};
padding : ${props => props.p || "5px"};

margin : ${props => props.m || "5px"};
text-align: center;
height: ${(props) => props.h || "auto"};
background: none;
color : ${(props) => props.color || (  props.type == "s" ? props.theme.palette.text.secondary : props.type == "t" ? props.theme.palette.text.ternary : props.theme.palette.text.primary  )};
text-align: center;
font-size:  ${(props) => props.size || "inherit"};
font-family : ${props => props.family || "inherit"};

&:hover {
  color : ${(props) => props.hcolor || (  props.type == "s" ? props.theme.palette.text.primary : props.type == "t" ? props.theme.palette.text.primary : props.theme.palette.text.secondary  )};
}


& svg {
  margin: 5px 10px 5px 0px;
  transition: all 0.2s ease 0s;

  &:hover {
    color : ${(props) => props.hcolor || (  props.type == "s" ? props.theme.palette.text.primary : props.type == "t" ? props.theme.palette.text.primary : props.theme.palette.text.secondary  )};

    transform: scale(1.1);
  }
}

@media (max-width : 600px){

  font-size :  ${ props => `calc( ${props.size} - ${props.size} / 5 )`};
 }

`



export const LinkIcon = styled(Link)`
  text-decoration: none;
  width: ${(props) => props.w || "auto"};
  padding : ${props => props.p || "5px"};

  margin : ${props => props.m || "5px"};
  text-align: center;
  height: ${(props) => props.h || "auto"};
  background: none;
  color : ${(props) => props.color || (  props.type == "s" ? props.theme.palette.text.secondary : props.type == "t" ? props.theme.palette.text.ternary : props.theme.palette.text.primary  )};
  text-align: center;
  font-size:  ${(props) => props.size || "inherit"};
  font-family : ${props => props.family || "inherit"};
  
  &:hover {
    color : ${(props) => props.hcolor || (  props.type == "s" ? props.theme.palette.text.primary : props.type == "t" ? props.theme.palette.text.primary : props.theme.palette.text.secondary  )};
  }


  & svg {
    margin: 5px 10px 5px 0px;
    transition: all 0.2s ease 0s;

    &:hover {
      color : ${(props) => props.hcolor || (  props.type == "s" ? props.theme.palette.text.primary : props.type == "t" ? props.theme.palette.text.primary : props.theme.palette.text.secondary  )};

      transform: scale(1.1);
    }
  }

  @media (max-width : 600px){

    font-size :  ${ props => `calc( ${props.size} - ${props.size} / 5 )`};
   }
`;
