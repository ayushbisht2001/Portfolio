import React from 'react';
import { Container, ContainerFluid } from '../utility/styled_components/container';
import { Row } from '../utility/styled_components/box';
import WorkCard from '../components/work/WorkCard';
import AnimateText from '../animate_custom_lib/AnimateText';


const Work = () => {
    return (
        <ContainerFluid  h = "auto"   >
            <Container pos = "relative"  h ="auto">
            <AnimateText
            width={800}
            height={195}
            title="Work"
            scale = {5}
            primary="#E63946"
            secondary="#F1FAEE"
            sx = {{ 
                top : "50px",
                zIndex : 120
            }}
/>
        <WorkCard />
    
            </Container>
           

        </ContainerFluid>
        );
}

export default Work;
