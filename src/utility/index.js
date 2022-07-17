export const getElementXY = (ele) =>{

    let box = ele.getBoundingClientRect();

    return {
        left : box.left,
        right : box.right,
        top : box.top,
        bottom : box.bottom
    }

}