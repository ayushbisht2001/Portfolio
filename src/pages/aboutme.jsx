import React from 'react';
import { ThemeProvider } from 'styled-components';
import AnimateText from '../animate_custom_lib/AnimateText';
import { Heading1, HeadingMain } from '../utility/styled_components/text';
import { darkTheme } from '../utility/styled_components/theme';

const AboutMe = () => {
    return (
                
        // <AnimateText title = "AYUSH BISHT"  width = {600} height = {110} />
    <ThemeProvider theme={darkTheme}>

       <h2 class="about-heading">
            Hello my name is Ayush
        </h2>
    
    </ThemeProvider>
      
    );
}

export default AboutMe;
