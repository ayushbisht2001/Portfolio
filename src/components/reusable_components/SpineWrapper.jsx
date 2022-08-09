import React from 'react';
import { ContainerFluid } from '../../utility/styled_components/container';
import { Box } from '../../utility/styled_components/global';
import styled from 'styled-components';
import { Spine, Pulse } from '../animations';
import { Chips } from '../../utility/styled_components/box';

const SpineWrapper = (props) => {

    const{
        spine = false,
        children,
        slide
    } = props;

    return (
       (  <WrapperContainer {...props}  
            slide = {slide}
       >
        
        
        <Box
            pos = "relative"
            w = "100%"
            h = "100%"
            className='spine-box' 
            
        >
        {<Spine 
            pos = "fixed"
            right = "100px"
            top = "unset"
            bottom = "0px"
            left = "15rem"
            h = "calc(100vh  - 23rem)"
            md = {`
            `}
        >
            <Pulse top = "-9px"  left = "-6px" 
            
            />
            <Chips rad = "50%" w = "15px" h = "15px" pos = "absolute" top = "-9px"  left = "-6px"></Chips>
        </Spine>  
        }
        </Box>
        <Box 
            pos = "relative"
            w = "100%"
            h = "100%"
        >

        {children}
        </Box>


        </WrapperContainer>)
    );
}

export default SpineWrapper;


const WrapperContainer = styled(ContainerFluid)`
    display : grid;
    height : 100%;
    width : 100%;
    position : relative;
    grid-template-columns : max(20%, 10px) calc(100% - max(20%, 10px));
    
    & .spine-box::before{
        content : '';
        height : ${props => props.slide==0 ? "calc(100% - 18rem)" : " 100%" };
        position : absolute;
        background : ${props => props.theme.palette.ternary || "white"};
        opacity : 0.3;
        width : 2px;
        z-index: 100;
        transform : ${props => props.slide==0 ? "translateY(100px)" : "0" };
        right : 30px;
        bottom : 0;
        transition : all 0.3s ease-in;
        border-radius : 100%;
 
    }

    @media(max-width : 500px){
        grid-template-columns : max(10%, 10px) calc(100% - max(10%, 10px));

        & .spine-box::before{
        bottom : 0px;
        right : 10px;
                 
        }
    
    }

    `
 

 
