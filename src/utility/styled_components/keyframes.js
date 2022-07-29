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

export const frameAnimate = keyframes`

    0%{
        transform :  translate3d(50vw, 15vh, -100px);

    }

    90%{
        transform :  translate3d(10vw, 15vh, -200px) scale(0);

    }

    100%{
        transform : none ;
    }

`
export const frameAnimateReverse = keyframes`

    0%{
            transform :  translate3d(90vw, 15vh, -100px);
    }
    100%{
        transform :  translate3d(50vw, 15vh, -100px);

    }

`