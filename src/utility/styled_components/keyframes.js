import { keyframes, Keyframes } from "styled-components";



export const pulse = keyframes`

    from{
        transform : scale(0);
        
    }
    to{
        border-color : transparent;
        transform : scale(3);
    }

`
