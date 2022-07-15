import React, { useRef, useEffect, useState } from "react";
import Particle from "./AnimateParticles";

const AnimateText = (props) => {
  const { text, color } = props;

  const canvRef = useRef();
  const [particles, setParticles] = useState([]);


  function connect(){

    const canvas = canvRef.current;
    let ctx = canvas.getContext("2d");
    for(let a=0; a < particles.length; a++){
        for(let b =a;b<particles.length; b++){
            let dx = particles[a].x - particles[b].x;
            let dy = particles[a].y - particles[b].y;

            let distance = Math.sqrt(dx*dx + dy*dy);
            if(distance < 40){
                ctx.strokeStyle = 'red';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }

  }

  function animate() {
    if (canvRef.current) {
      const canvas = canvRef.current;
      let ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw(ctx);
        particles[i].update();
      }
    
      connect()
    }

    window.requestAnimationFrame(animate);

  }

  useEffect(() => {
    if (canvRef) {
      const canvas = canvRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      let ctx = canvas.getContext("2d");
      ctx.fillStyle = "green";

      ctx.font = '30px Verdana';
      ctx.fillText('AYUSH BISHT', 0, 30);
      const textCoord = ctx.getImageData(0, 0, 100, 100);
        console.table(textCoord);
      let particle_array = [];
    //   for (let i = 0; i < 1000; i++) {
    //     let x = Math.random() * canvas.width;
    //     let y = Math.random() * canvas.height;
    //     particle_array.push(new Particle(x, y));
    //   }

    for(let y=0, y2 = textCoord.height; y<y2; y++){
        for(let x=0, x2 = textCoord.width; x<x2; x++){

            if(textCoord.data[(y*4*textCoord.width)+ (x*4) + 3] > 128)
        {        let pX = x*20;
                let pY = y*20;
                particle_array.push(new Particle(pX, pY));
        }
        }
    }

      setParticles(particle_array);


      animate()
    }
} , []);

window.requestAnimationFrame(animate);


  

  return (
    <canvas
      ref={canvRef}
      style={{ top : "0", left : "0", position: "absolute" }}
    ></canvas>
  );
};

export default AnimateText;
