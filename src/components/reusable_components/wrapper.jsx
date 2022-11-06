import React from 'react';
import { ContainerFluid } from '../../utility/styled_components/container';
import { Box } from '../../utility/styled_components/global';
import styled from 'styled-components';
import { Spine, Pulse } from '../animations';
import { Chips, Row } from '../../utility/styled_components/box';

const Wrapper = (props) => {

    const{
        spine = false,
        children
    } = props;

    return (
      
      <WrapperContainer {...props}      cols = "15% auto" >

        <Box className = "spine-bar"   top = "0px" h = "auto" >
        { spine ? <Spine bottom = "0px" h = "52vh" pos = "sticky" left = "100%"   >
                    <Pulse top = "-9px"  left = "-6px"  />
            <Chips sm = {` 
                width : 10px;
                height : 10px;
                left : -4px;            
            `} 
            className = "chips" rad = "50%" w = "15px" h = "15px" pos = "absolute" top = "-9px"  left = "-6px"> </Chips>
        </Spine> : ""
        }
        </Box>
        <Box zi = "0" pos = "relative" >
        {children}
        </Box>
        </WrapperContainer>
    );
}

export default Wrapper;


const WrapperContainer = styled(Row)`
    width : 100%;
    height : auto;
    min-height : 100vh;
    position : relative;
    background: ${(props) => props.bg || props.theme.palette.bg};
    & .spine-bar::before{
        content : '';
        height : calc( 100% - 48vh );
        position : absolute;
        background : ${props => props.theme.palette.ternary || "white"};
        opacity : 0.3;
        width : 0.5px;
        z-index: 100;
        bottom : 0;
        right : 0px;
        border-radius : 100%;

      
        
        @media(max-width : 500px){

            width : 0.3px;

        }
    }

    @media(max-width: 500px){
        grid-template-columns : 5% auto;
    }

    `
 

 
