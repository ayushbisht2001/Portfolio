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
        <WrapperContainer {...props}  >

        { spine ? <Spine >
                    <Pulse top = "-9px"  left = "-6px"  />
            <Chips rad = "50%" w = "15px" h = "15px" pos = "absolute" top = "-9px"  left = "-6px"></Chips>
        </Spine> : ""
        }
        {children}
        </WrapperContainer>
    );
}

export default Wrapper;


const WrapperContainer = styled(ContainerFluid)`
    &::before{
        content : '';
        height : calc(100% - 30rem);
        position : absolute;
        background : ${props => props.theme.palette.ternary || "white"};
        opacity : 0.3;
        width : 2px;
        z-index: 100;
        transform : translateY(100px); 
        top : 50vh;
        left : calc( 34vw - 10rem);
        border-radius : 100%;

        @media(max-width : 500px){

            top : 40vh;
            left : calc( 34vw - 5rem);
        }
    }

    `
 

 
