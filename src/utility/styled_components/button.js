import styled, {css} from "styled-components";
import { styles } from "./global";



export const Button = styled.button`
    ${styles(props)};




    ${props => css`${props.sx}`}
`

export const PrimaryBtn = styled(Button)`



    ${props => css`${props.sx}`}

`


export const SecondaryBtn = styled(Button)`



    ${props => css`${props.sx}`}

`

