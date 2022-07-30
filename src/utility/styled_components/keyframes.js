import { keyframes, Keyframes } from "styled-components";



export const pulse = keyframes`

    from{
        transform : scale(0);
        border-width : 0px;
        
    }
    to{
        border-color : transparent;
        border-width : 5px;
        transform : scale(3.5);
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

export const scrollProject = keyframes`

0%{
    background-position : 100% 400px;
}

95%{
    background-position : 100% 100%;
}



`