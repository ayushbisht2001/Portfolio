import React from 'react';
import { ContainerFluid } from '../../utility/styled_components/container';
import { Box } from '../../utility/styled_components/global';
import styled from 'styled-components';

const Wrapper = (props) => {

    const{
        spine = true
    } = props;

    return (
        <WrapperContainer {...props}  >


        </WrapperContainer>
    );
}

export default Wrapper;


const WrapperContainer = styled(ContainerFluid)`

 
    &::before{
        content : '';
        height : calc(100% - 20rem);
        position : absolute;
        background : ${props => props.theme.palette.ternary || "white"};
        opacity : 0.3;
        width : 2px;
        z-index: 100;
        transform : translateY(100px); 
        top : 28vh;
        left : calc( 18vw - 4rem );
    
        border-radius : 100%;
    }

    `
 

 
