const mouse = {
  x: null,
  y: null,
  radius: 180,
};

window.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
});

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 5;
    this.baseX = x; // initial position of particle w.r.t to x-coord
    this.baseY = y;
    this.color = "blue";
    this.type = "circle";
    this.density = Math.random() * 20;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    if (this.type == "circle") {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    } else if (this.type == "triangle") {
       
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x + this.size, this.y);
      ctx.lineTo(this.x , this.y - this.size);
      ctx.lineTo(this.x  , this.y );
      ctx.stroke();
      ctx.closePath();
    }
  }

  update() {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy); // pythagorus formula
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;
    let maxDistance = mouse.radius;
    let force = (maxDistance - distance) / maxDistance;
    let directionX = forceDirectionX * force * this.density;
    let directionY = forceDirectionY * force * this.density;

    if (distance < mouse.radius) {
      this.x -= directionX;
      this.y -= directionY;
      this.color = "red";
    } else {
      this.color = "blue";

      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy;
      }
    }
  }
}

export default Particle;
