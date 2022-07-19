import React, {useEffect, useRef, useState} from 'react';
import { mouse } from '../utility';



export class FractalTree{

    constructor(ctx, startX = 500, startY = 500,  height = 100,bWidth = 1, angle = 0, left = 0.8, right = 0.8, colors = {branch : "brown", leaf : "green"}){
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

            
            this.ctx.restore();
            return;
        }

        this.draw(0, height, height*this.lFactor, angle+6, this.bWidth * 0.2);
        this.draw(0, height, height*this.rFactor, angle-5, this.bWidth * 0.2);

        this.ctx.restore();

    }


    update(){

        let moveX = 40*(mouse.x - this.startX)/100;

        moveX = (moveX < -40 )? -40 :( moveX > 40 )? 40 : moveX;
        let moveY = Math.min( 0.84,  ( mouse.y - this.startY)*0.8/500);        
        this.rFactor = moveY
        this.lFactor = moveY
        this.diversion = moveX;

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
            tree.draw();
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
            tree.draw();
            setState([tree]);
            animate();
        }

    }, [])
    window.requestAnimationFrame(animate);


    return (
        <canvas ref = {ref}>
        </canvas>
    );
}

export default AnimatedTree;
