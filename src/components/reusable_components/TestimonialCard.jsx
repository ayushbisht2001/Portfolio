import React, { useEffect, useState, useRef} from 'react';
import { Box } from '../../utility/styled_components/box';
import { Heading2, PText, Span } from '../../utility/styled_components/text';
import { Circle, Shape, ShapeBox, Triangle } from '../animations/shapes/shapes';
import { TestimonialList } from '../../utility/data/testinomials';
import styled from 'styled-components';

const URL = process.env.PUBLIC_URL;


const TestimonialCard = () => {

    const [state, setState] = useState(0)

    return (
        <Box
        w = "600px"
        h = "100%"
        d = "flex"
        direction = "column"
        align = "center"
        justify = "center"
 
        md = {`

        height : 400px;
        width : 100%;
        margin : 0px;

        `}
        >  
        {/* <Circle
            tf = "scale(7)"
            strokeW = "1"
        >
        </Circle> */}
        <Box
            w = "100px"
            h = "100px"
            rad = "50%"
            pos = "relative"
            sx = {`

                & img{
                    margin : auto;
                    position : relative;
                    object-fit : cover;
                    border-radius : inherit;
                    border : 4px solid grey;
                }
            `}
             
        >
            <img  width = "100px" height = "100px" src = {`${URL}/assets/images/${TestimonialList[state].img}`}  />
        </Box>
        <Box 
            h = "auto"
            minH = "100px"
            w = "max( 50%, 200px )"
            talign = "center"
        >
        <Span size = "1.1rem"> {TestimonialList[state].name} </Span>
        <PText weight="600" m = "0px" size = "0.9rem" type = "t"> {TestimonialList[state].designation} </PText> 
        <PText size = "0.8rem" type = "s" >
        {TestimonialList[state].context}
        </PText>
      
        </Box>
        <ListOption
            d = "flex"
            w = "100%"
            h = "20px"
            direction = "row"
            align = "center"
            justify = "center"
           selected = {state}
        >
            {[0,1,2].map((val) => (
            <Span
                onClick = { () => setState(val)}
                key = {val + "testi-option"}
            ></Span>

            ))
            
            }

        </ListOption>       

        </Box>
    );
}

export default TestimonialCard;


const ListOption = styled(Box)`

& span {
    display : inline-block;
    width : 30px;
    background : ${props => props.theme.palette.primary};
    cursor : pointer;

    

}

& span:nth-child(${props => props.selected + 1}){
    background : ${props => props.theme.palette.secondary};
    }

`



const TestimonialBox = (props) => {

    return( 

        <Box 
            w = "600px"
            h = "300px"
            border = "2px solid blue"
            sx = {`

                & span{
                    background : red;
                    display : block;

                }

            
            `}

        >
            <Span
                h = "1px"
                w = "10px"
                sx = {`
                `}
            ></Span>
            <Span></Span>
            <Span></Span>
            <Span></Span>


        </Box>
    )

}


// const TestimonialBox = (props) => {

//     return(

//         <Shape pos = "absolute"  width="500px" height="300px" viewBox="0 0 306 204" 
         
//             bottom = "0"
//             m = "auto"
//         >
//             <g id="testimonial-box">
//                 <path id="Vector" d="M71.8867 13.7019H3V176.082H35.0577L57.4235 200L77.5527 176.082H192.96" stroke="#9A6FFF" stroke-width="2" stroke-miterlimit="10"/>
//                 <path id="Vector_2" d="M249.769 176.082H303V13.7019H131.976" stroke="#9A6FFF" stroke-width="2" stroke-miterlimit="10"/>
//                 <path id="Vector_3" d="M303 39.0625V13.7019H195.644" stroke="#9A6FFF" stroke-width="5" stroke-miterlimit="10"/>
//                 <path id="Vector_4" d="M266.767 176.082H303V75.2404" stroke="#9A6FFF" stroke-width="5" stroke-miterlimit="10"/>
//                 <path id="Vector_5" d="M3 151.803V176.082H35.0577L57.4235 200L77.5527 176.082H155.386" stroke="#9A6FFF" stroke-width="5" stroke-miterlimit="10"/>
//                 <path id="Vector_6" d="M50.1173 13.7019H3V94.8317" stroke="#9A6FFF" stroke-width="5" stroke-miterlimit="10"/>
//                 <g id="rightQuote">
//                 <path id="Vector_7" d="M228.251 185.144C229.506 184.034 230.484 182.978 231.172 181.967C231.953 180.818 232.377 179.7 232.377 178.606V178.571L232.372 178.537C232.181 177.152 231.03 176.216 229.015 175.717L229.004 175.714L228.993 175.712C228.391 175.59 227.839 175.478 227.292 175.257L227.292 175.257L227.285 175.254C225.771 174.673 224.663 173.935 223.934 173.033C223.212 172.139 222.834 171.051 222.834 169.712C222.834 168.728 223.103 167.869 223.637 167.116L223.649 167.099L223.659 167.081C225.047 164.732 227.254 163.601 230.237 163.601C231.402 163.601 232.372 163.72 233.181 164.045L233.202 164.054L233.223 164.06C234.935 164.578 236.175 165.397 236.991 166.507C237.799 167.606 238.226 169.038 238.235 170.855C238.161 171.177 238.124 171.519 238.089 171.854C238.086 171.883 238.083 171.913 238.08 171.942C238.045 172.279 238.01 172.622 237.945 172.989C237.093 177.683 234.426 181.96 229.737 186.043L228.251 185.144ZM208.569 185.144C209.824 184.034 210.803 182.978 211.49 181.967C212.271 180.818 212.695 179.7 212.695 178.606V178.571L212.69 178.537C212.499 177.152 211.348 176.216 209.333 175.717L209.322 175.714L209.311 175.712C208.709 175.59 208.157 175.478 207.61 175.257L207.61 175.257L207.603 175.254C206.089 174.673 204.982 173.935 204.252 173.033C203.53 172.139 203.152 171.051 203.152 169.712C203.152 168.728 203.421 167.869 203.955 167.116L203.967 167.099L203.977 167.081C205.365 164.732 207.572 163.601 210.555 163.601C211.721 163.601 212.691 163.72 213.499 164.045L213.52 164.054L213.541 164.06C215.253 164.578 216.493 165.397 217.309 166.507C218.125 167.618 218.554 169.068 218.554 170.913C218.554 171.378 218.455 171.927 218.329 172.62C218.308 172.739 218.286 172.861 218.263 172.989C217.411 177.683 214.745 181.96 210.055 186.043L208.569 185.144Z" fill="#9A6FFF" stroke="#9A6FFF"/>
//                 </g>
//                 <g id="leftQuote">
//                 <path id="Vector_8" d="M84.9012 13.683L84.9013 13.683L84.9035 13.671C85.7558 8.97643 88.4222 4.69878 93.1115 0.615624L94.5979 1.51423C93.3425 2.62493 92.3644 3.68052 91.6769 4.69185C90.8963 5.84022 90.4722 6.95895 90.4722 8.05286V8.08716L90.4768 8.12114C90.6678 9.50621 91.8188 10.4422 93.8339 10.942L93.8446 10.9447L93.8555 10.9469C94.4577 11.0682 95.0096 11.1807 95.5566 11.4012L95.5566 11.4013L95.5643 11.4043C97.0776 11.9851 98.1854 12.7235 98.9145 13.6256C99.6369 14.5193 100.015 15.6073 100.015 16.9471C100.015 17.9306 99.7458 18.79 99.2124 19.5426L99.2003 19.5595L99.1898 19.5774C97.8021 21.9265 95.5947 23.0577 92.6123 23.0577C91.4464 23.0577 90.4765 22.939 89.668 22.6132L89.6472 22.6048L89.6258 22.5983C87.9135 22.0807 86.674 21.2614 85.8581 20.1515C85.0491 19.051 84.621 17.6165 84.6134 15.7947C84.6862 15.4269 84.7237 15.0635 84.7586 14.7257L84.7598 14.7149C84.7974 14.3504 84.8326 14.0148 84.9012 13.683ZM104.583 13.683L104.583 13.683L104.585 13.671C105.438 8.97643 108.104 4.69878 112.793 0.615625L114.28 1.51423C113.024 2.62493 112.046 3.68052 111.359 4.69185C110.578 5.84022 110.154 6.95895 110.154 8.05286V8.08716L110.159 8.12114C110.35 9.50621 111.501 10.4422 113.516 10.942L113.527 10.9447L113.537 10.9469C114.14 11.0682 114.691 11.1807 115.239 11.4012L115.238 11.4013L115.246 11.4043C116.759 11.9851 117.867 12.7235 118.596 13.6256C119.319 14.5193 119.697 15.6073 119.697 16.9471C119.697 17.9306 119.428 18.79 118.894 19.5426L118.882 19.5595L118.872 19.5774C117.484 21.9265 115.277 23.0577 112.294 23.0577C111.128 23.0577 110.158 22.939 109.35 22.6132L109.329 22.6048L109.308 22.5983C107.595 22.0807 106.356 21.2614 105.54 20.1515C104.724 19.0411 104.295 17.5905 104.295 15.7452C104.295 15.084 104.432 14.4135 104.583 13.683Z" fill="#9A6FFF" stroke="#9A6FFF"/>
//                 </g>
//                 </g>
//         </Shape>

//     )


// }
