import React, {useEffect, useRef, useState} from 'react';
import { mouse } from '../utility';




function drawCT(ctx, startX , startY , height , angle  , p, q){
    if( p ==0 || q == 0 || p == q){
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(startX, startY, 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
        return;
    }

    console.log(p, q)

    ctx.beginPath();
    ctx.save();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "yellow";
    ctx.translate(startX, startY);
    ctx.rotate( angle * Math.PI/180);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, height);
    ctx.stroke();

    console.log("hello")

    drawCT(ctx, 0, height, height*0.8, angle+6,  p - 1, q - 1 ) ;
    drawCT(ctx, 0, height, height*0.8, angle-6,  p - 1, q  );

 ctx.restore();

 return;
}


export class FractalTree{

    constructor(ctx, startX = 500, startY = 500,  height = 100,bWidth = 1, angle = 0, left = 0.8, right = 0.8, colors = {branch : "rgb(56, 56, 56)", leaf : "#E63946"}){
        this.startX = startX;
        this.startY = startY;
        this.bWidth = bWidth;
        this.height = height;
        this.bColor = colors.branch;
        this.lColor = colors.leaf;
        this.diversion = angle;
        this.ctx = ctx;
        this.lFactor = left;
        this.rFactor = right;
    }


    draw(startX = this.startX, startY = this.startY, height = this.height, angle = this.diversion ){

        this.ctx.beginPath();
        this.ctx.save();
        this.ctx.strokeStyle = this.bColor;
        this.ctx.fillStyle = this.bColor;
        this.ctx.translate(startX, startY);
        this.ctx.rotate( angle * Math.PI/180);
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(0, height);
        this.ctx.stroke();

        if(height < 20){

            this.ctx.fillStyle = this.lColor;
            this.ctx.beginPath();
            this.ctx.arc(startX, startY, 2, 0, Math.PI * 2);
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.restore();
            return;
        }

        this.draw(0, height, height*this.lFactor, angle+6, this.bWidth * 0.2);
        this.draw(0, height, height*this.rFactor, angle-6, this.bWidth * 0.2);

        this.ctx.restore();

    }

    drawCombinatorialTree(startX = this.startX, startY = this.startY, height = this.height, angle = this.diversion ,p = 10 , q = 9 )
    {

        
        drawCT(this.ctx, this.startX, this.startY, this.height, this.diversion, p, q);

    }

 
    update(){

        let moveX = 25*(mouse.x - this.startX)/100;

        moveX = (moveX < -25 )? -25 :( moveX > 25 )? 25 : moveX;
        let moveY = Math.min( 0.83,  ( mouse.y - this.startY)*0.8/500);        
        this.rFactor = moveY
        this.lFactor = moveY
        // this.diversion = moveX;

    }
}




const AnimatedTree = () => {

    
    const ref = useRef();
    const [state, setState] = useState([]);

    const animate =  () => {
        
    if(ref.current){

        const canvas = ref.current;
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if(state.length){
        
            // console.table(state);
            let  tree = state[0];
            tree.update();
            tree.drawCombinatorialTree(10, 5);
            window.requestAnimationFrame(animate);
        }
          
   
    }


    }



    useEffect(() => {

        if(ref.current){

            const canvas = ref.current;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            canvas.style.background = "black";
            const ctx = canvas.getContext('2d');
            
            let tree = new FractalTree(ctx, 500, 100, 100, 1);
            // tree.drawCombinatorialTree();
            tree.draw()
            setState([tree]);
            // animate();
        }

    }, [])
    // window.requestAnimationFrame(animate);


    return (
        <canvas ref = {ref}>
        </canvas>
    );
}

export default AnimatedTree;
