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
  