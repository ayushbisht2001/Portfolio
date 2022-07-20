import React from 'react';
import { Container, ContainerFluid } from '../utility/styled_components/container';
import { Row } from '../utility/styled_components/box';
import WorkCard from '../components/work/WorkCard';


const Work = () => {
    return (
        <ContainerFluid  h = "100vh"   >
            <Container  >
                <WorkCard />
            </Container>
           

        </ContainerFluid>
        );
}

export default Work;
