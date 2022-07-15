import React, { useRef, useEffect, useState } from "react";
import Particle from "./AnimateParticles";

const AnimateText = (props) => {
  const { text, color } = props;

  const canvRef = useRef();
  const [particles, setParticles] = useState([]);

  function animate() {
    if (canvRef.current) {
      const canvas = canvRef.current;
      let ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw(ctx);
        particles[i].update();
      }
    
    }

    window.requestAnimationFrame(animate);

  }

  useEffect(() => {
    if (canvRef) {
      const canvas = canvRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      let ctx = canvas.getContext("2d");
      let particle_array = [];
      for (let i = 0; i < 1000; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particle_array.push(new Particle(x, y));
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
