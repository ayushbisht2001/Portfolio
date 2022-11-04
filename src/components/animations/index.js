import styled, {css} from "styled-components";
import { pulse } from "../../utility/styled_components/keyframes";




export const Pulse = styled.span`
opacity : ${props => props.o || ""};
padding : ${(props) => props.p || "0px"};   
margin : ${props => props.m || "0px"};
width : ${props => props.w || "15px"};
height: ${(props) => props.h || "15px"};
background : none;
border : ${props => props.border || ` solid 1px ${props.theme.palette.primary}`};
transition : 0.5 all ease 1s;
border-radius : 50%;
position : ${props => props.pos || "absolute" };
transform : scale(1);
animation : ${pulse} 2s linear forwards;
top : ${props => props.top || ""};
bottom : ${props => props.bottom || ""};
left : ${props => props.left || ""};
right : ${props => props.right || ""};


${props => css`${props.sx}`};
`

export const Spine = styled.div`

width : 1.2px;
height : ${props => props.h || "calc(100vh - 18rem)"};
position : ${props => props.pos || "fixed" };
background : ${props => props.theme.palette.primary || "orangered"};
z-index : 101;

left : ${props => props.left || "calc( 28.5vw  - 10rem)"} ;
top : ${props => props.top || "calc( 60vh)"} ;
bottom : ${props => props.bottom || "0"} ;
right : ${props => props.right || "0"} ;

transition : 1s all ease 0.5;

@media(max-width : 500px){
    &{
        left : 1rem;
        top : calc( 33vh);
        height : calc(100vh - 15rem);
        ${props => props.md || ""};

    }
}

${props => css`${props.sx}`};


`