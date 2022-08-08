import React from 'react';
import { SimpleContactForm } from './ContactForm';
import { Box } from '../../utility/styled_components/box';
import { Label, Span } from '../../utility/styled_components/text';
import { SimpleContactInput } from '../../utility/styled_components/input';



const FormInput = (props) => {
    const{
        label = "untitled",
        ph = "",
        sx,
        label_sx,
        w,
        h,

    } = props;

    return (
        <Box
            w = {w}
            h = "auto"


        >
            <Label

            >
             {label}   
            </Label>
            <SimpleContactInput 
               w = {"100%"}
               h = {h}
                sx = {sx}
                placeholder = {ph}
                >

            </SimpleContactInput>
        </Box>
        );
}

export default FormInput;


