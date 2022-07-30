import React, { useRef, useEffect, useState, memo } from "react";
import Particle from "./AnimateParticles";
import { getElementXY, mouse } from "../utility";
import AniHeading from "../components/reusable_components/heading";



const AnimateTextHOC = ( Component) => {


  return memo((props) => {


    return window.innerWidth > 700 ? (
      <Component {...props} />
    ) :
    <AniHeading 
      {...props}
      title = {props.title} 
      
      sx = {props.sm}
    />


  })

}

const AnimateText = (props) => {
  const { 
    title = "Untitled", 
    color, 
    width = 1000 ,
    height = 1000,   
    scale = 2,
    sx ,
    primary,
    secondary

  } = props;

  const wire = {
    stroke :  "red",
    width : "2",
    range : 2,
    ...props.wire
  }

  const canvRef = useRef();
  const [particles, setParticles] = useState([]);

async function connect() {
    const canvas = canvRef.current;
    let ctx = canvas.getContext("2d");
    for (let a = 0; a < particles.length; a++) {
      for (let b = a; b < particles.length; b++) {
        let dx = particles[a].x - particles[b].x;
        let dy = particles[a].y - particles[b].y;

        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < wire.range) {
          ctx.strokeStyle = wire.stroke;
          ctx.lineWidth = wire.width;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  }

  async function animate() {
    if (canvRef.current) {
 
        const canvas = canvRef.current;
        let ctx = canvas.getContext("2d");
  
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
          particles[i].draw(ctx);
          particles[i].update(canvas);
        }

      // connect();
    }
    window.requestAnimationFrame(animate);

  }

  useEffect(() => {
    if (canvRef) {
      const canvas = canvRef.current;
      canvas.width = width;
      canvas.height = height;

      let ctx = canvas.getContext("2d");
      ctx.fillStyle = color;

      ctx.font = "40px Titan One";
      ctx.fillText(title, 0, 40);
      const textCoord = ctx.getImageData(0, 0, width, height);
      // console.table(textCoord);
      let particle_array = [];
      //   for (let i = 0; i < 1000; i++) {
      //     let x = Math.random() * canvas.width;
      //     let y = Math.random() * canvas.height;
      //     particle_array.push(new Particle(x, y));
      //   }

      for (let y = 0, y2 = textCoord.height; y < y2; y++) {
        for (let x = 0, x2 = textCoord.width; x < x2; x++) {
          if (textCoord.data[((y * 4 * textCoord.width + x * 4)+ 3)] > 128) {
            let pX = x * scale;
            let pY = y * scale;
            particle_array.push(new Particle({x : pX, y : pY, primary, secondary}));
          }
        }
      }

      setParticles(particle_array);
      animate();
      
    
    }
  }, []);

  window.requestAnimationFrame(animate);

  return (
    <canvas
      ref={canvRef}
      style={{ top: "0", left: "0",
      transformOrigin : "0% 10%",
      ...sx }}
       
    ></canvas>
  );
};

export default AnimateTextHOC(AnimateText);
