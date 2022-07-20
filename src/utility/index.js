export const getElementXY = (ele) =>{

    let box = ele.getBoundingClientRect();

    return {
        left : box.left,
        right : box.right,
        top : box.top,
        bottom : box.bottom
    }

}
export const mouse = {
    x: null,
    y: null,
    radius: 40,
  };
  
  window.addEventListener("mousemove", function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
  });
  


  export const handleLiveShape = (e, ref, props) => {
    const{
      scale = 1
    } = props
    let x = e.x;
    let y = e.y;
    let moveX = 30*x/1000;
    let moveY = 30*y/1000;
    /* 
    matrix3d(
      scaleX, skewY, rotateY, d1, 
      skewX, scaleY, c2, d2, 
      rotateY, b3, scaleZ, d3, 
      moveX, moveY, moveZ, perspective)
    
    */
      ref.current.style.transform = `
      matrix3d(${scale}, 0, 0.06, 0,
               0,${scale}, 0, 0, 
               -0.03 ,0, 1, 0, 
               ${moveX}, ${moveY}, 0, 1)`;  


  }