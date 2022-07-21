import styled, {css} from "styled-components";
import { styles } from "./global";



export const Container = styled.div`
  
  background: ${(props) => props.bg || props.theme.palette.bg };
  padding : ${(props) => props.p || "auto"};   
  margin : ${props => props.m || "auto"};
  width : ${props => props.w || "min( 100% , 1200px )"};
  height: ${(props) => props.h || "auto"};
  overflow : ${props => props.of || "auto"};
  position : ${props => props.pos || "relative"};
  ${props => ({...props})};
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