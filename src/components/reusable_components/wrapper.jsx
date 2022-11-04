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
        left : calc( 50vw - 28rem );
        border-radius : 100%;
        
        @media(max-width : 1200px){
            left : calc( 20vw - 5rem);
        }
        
        @media(max-width : 500px){

            top : 20vh;
            height : calc(100% - 20rem);
            left : 1rem;
        }
    }

    `
 

 
