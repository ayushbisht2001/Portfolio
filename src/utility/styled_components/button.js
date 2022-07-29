import styled, { css } from "styled-components";
import { styles } from "./global";
import { Link } from "react-router-dom";

export const Button = styled.button`
  ${(props) =>
    css`
      ${props.sx}
    `}
`;

export const PrimaryBtn = styled(Button)`
  ${(props) =>
    css`
      ${props.sx}
    `}
`;

export const SecondaryBtn = styled(Button)`
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

export const LinkIcon = styled(Link)`
  text-decoration: none;
  width: ${(props) => props.w || "auto"};
  padding: 5px;
  margin : ${props => props.m || "0px"};
  text-align: center;
  height: ${(props) => props.h || "auto"};
  background: none;
  color: ${(props) => props.color || props.theme.palette.text.secondary};
  text-align: center;
  font-size:  ${(props) => props.size || "1.3rem"};
  & svg {
    margin: 5px 10px 5px 0px;
    transition: all 0.2s ease 0s;

    &:hover {
      color: ${(props) => props.hcolor || props.theme.palette.text.primary};
      transform: scale(1.1);
    }
  }
`;
