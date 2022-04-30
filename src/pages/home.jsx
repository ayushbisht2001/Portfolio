import React from 'react'
import { ContainerFluid,Container } from '../utility/styled_components/container'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '../utility/styled_components/theme'


export default function Home() {
    return (
        <ThemeProvider theme={darkTheme} >

        <ContainerFluid h= "500px" >

        </ContainerFluid>
        </ThemeProvider>


    )
}
