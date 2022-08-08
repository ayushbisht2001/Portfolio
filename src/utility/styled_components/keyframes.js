import styled, { keyframes, Keyframes } from "styled-components";



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


export const navAnimate = keyframes`

0%{
    d : path("M 10 10 H 90 V 90 H 10 L 10 10");

}
    100%{
        d : path("M 50,5 95,97.5 5,97.5 Z");
    }

`
export const navReverseAnimate = keyframes`
0%{
    d : path("M 50,5 95,97.5 5,97.5 Z");

}
100%{
        d : path("M 10 10 H 90 V 90 H 10 L 10 10");
    }

`

export const navRightMotion = keyframes`
    from{

        transform : translateX(0px);

    }

    to{
        transform : translateX(500px);

    }

    `

    export const navReverseRightMotion = keyframes`
    from{
        transform : translateX(500px);
    }

    to{
        transform : translateX(0px);
        
    }

    `


export  const bgTransition = keyframes`
    
    from{
        opacity : 0;
    }
    to{
        opacity : 1;
        
    }

`


export  const bgReverseTransition = keyframes`
    
    from{
        opacity : 1;
    }
    
    to{
        opacity : 0;
    }

`




export const moveUp = keyframes`

    from{

        transform : translateY(0px);
    }

    to{
        transform : translateY(-400px);

    }

`

export const moveDown = keyframes`

    from{

        transform : translateY(0px);
    }

    to{
        transform : translateY(400px);

    }

`



export const sliderItemUpTransition = keyframes`

from{
    top : -1000px;
}
to{
    
}

`

export const sliderItemDownTransition = keyframes`

from{
    top :1000px;
}
to{
   
}

`