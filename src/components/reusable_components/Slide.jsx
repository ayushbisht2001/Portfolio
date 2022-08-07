import React from 'react';
import { Box } from '../../utility/styled_components/box';


export const SlideLeft = (props) => {


    return(

        <Box>

            
        </Box>

    )


}

export const SlideRight  = (props) => {

    return (

        <Box>

        </Box>

    )
}

export const Slide = () => {
    return (
       <Box 
               
       >
        <SlideLeft  {...props} />
        <SlideRight  {...props} />
       </Box>
    );
}
 
