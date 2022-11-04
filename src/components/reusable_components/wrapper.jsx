import React from 'react';
import { ContainerFluid } from '../../utility/styled_components/container';
import { Box } from '../../utility/styled_components/global';
import styled from 'styled-components';
import { Spine, Pulse } from '../animations';
import { Chips } from '../../utility/styled_components/box';

const Wrapper = (props) => {

    const{
        spine = false,
        children
    } = props;

    return (
      
      <WrapperContainer {...props}  of= "hidden"  >

        { spine ? <Spine top = "50vh" >
                    <Pulse top = "-9px"  left = "-6px"  />
            <Chips className = "chips" rad = "50%" w = "15px" h = "15px" pos = "absolute" top = "-9px"  left = "-6px"> </Chips>
                <Chips className = "chips" bg = "yellow" rad = "50%" w = "15px" h = "15px" pos = "absolute" top = "-9px"  left = "-6px" ></Chips>
                <Chips  className = "chips" bg = "red" rad = "50%" w = "15px" h = "15px" pos = "absolute" top = "-9px"  left = "-6px" ></Chips>
                <Chips  zi = "200" className = "chips" bg = "blue" rad = "50%" w = "15px" h = "15px" pos = "absolute" top = "-9px"  left = "-6px" ></Chips>
                <Chips className = "chips" bg = "green" rad = "50%" w = "15px" h = "15px" pos = "absolute" top = "-9px"  left = "-6px" ></Chips>
        </Spine> : ""
        }
        {children}
        </WrapperContainer>
    );
}

export default Wrapper;


const WrapperContainer = styled(ContainerFluid)`

    & .chips {
        

    }
    &::before{
        content : '';
        height : calc(100% - 10rem);
        position : absolute;
        background : ${props => props.theme.palette.ternary || "white"};
        opacity : 0.3;
        width : 2px;
        z-index: 100;
        transform : translateY(100px); 
        top : 50vh;
        left : calc( 28.5vw - 10rem);
        border-radius : 100%;

        @media(max-width : 500px){

            top : 20vh;
            height : calc(100% - 20rem);
            left : calc( 34vw - 7.5rem);
        }
    }

    `
 

 
