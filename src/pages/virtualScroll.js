import _ from "lodash";
import VirtualScroll from "virtual-scroll";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { TweenLite } from "gsap/gsap-core";

gsap.registerPlugin(MotionPathPlugin);

export default  class VS{


    constructor(ele, target, stateCallback){
        
        this.vs = new VirtualScroll(
        {    el : ele,
            mouseMultiplier : .4,
            keyStep : 400
        }
        );
        this.debouncedBackToSlide = _.debounce(this.backToSlide, 200);
        this.target = target;
        this.handler = ele;
        this.targetPosY= 0;
        this.handleState = stateCallback
        this.slideTransform= 0;
        this.oldSlideTransform= 0;
        this.oldDeltaY= 0;
        this.leave= false;
        this.direction= '';

        this.events()
       


    }


    destroy(){
        this.vs.destroy()
    }
 

    print(){
        console.log(this.vs)
    }

    events(){
        
        let bindWheel = this.wheel.bind(this)
        this.vs.on(bindWheel)
        let bindWheelLoop =  this.wheelLoop.bind(this)
        requestAnimationFrame(bindWheelLoop)

    }

    wheel(event){
        let targetModifier = event.deltaY
        this.targetPosY += targetModifier
        this.oldDeltaY = event.deltaY
        console.log("wheel events", this.targetPosY)
        this.debouncedBackToSlide()
    }

    scroll(el){

        // this.handl( prev => ({ ...prev, el}))
        // console.log(this.x)
        console.table(this)

    }

     getRoundedValue(valueToRound){
  
        let roundedValue = valueToRound * 1000
            roundedValue = Math.round(roundedValue)
            roundedValue = roundedValue / 1000
      
            return roundedValue
        }
      
      
        prevSlide(){

        console.log("move previous", this)

        // gsap.to(this.handler, { y : 0, force3D : true})
        this.handleState((prev) => ({
            ...prev,
            slide_id : (prev.slide_id + 1)%3,
            transformY : 400,
            direction : "down"
        }))
      

    }
      
        nextSlide(){
          console.log("move next", this)
        //   gsap.to(this.handler, { y : 400, force3D : true})
        this.handleState((prev) => ({
            ...prev,
            slide_id : (3 + prev.slide_id  - 1)%3,
            transformY : -400,
            direction : "up"
        }))
       

        }

    resetWheel(){

                this.targetPosY = 0;
                this.slideTransform = 0;
                this.oldDeltaY = 0;
                this.oldSlideTransform = 0
                console.log("reset whee", this)
                gsap.to(this.handler, {y: 0, force3D: true})
                requestAnimationFrame(this.wheelLoop.bind(this))
                
          }

    wheelLoop(){
    let slideLimit = 120;
    let newSlideTransformTemp = this.slideTransform + (this.targetPosY - this.slideTransform) * .09
    newSlideTransformTemp =  this.getRoundedValue(newSlideTransformTemp)
    console.log("wheel loop", this.slideTransform)

    if(true)
    {    this.oldSlideTransform = this.slideTransform;
        this.slideTransform = newSlideTransformTemp;

        gsap.to(this.handler, {y: this.slideTransform, force3D: true})
    }

    if(this.slideTransform <= -slideLimit ){
      this.nextSlide()
      _.delay(this.resetWheel.bind(this),1000)

    }
    else if (this.slideTransform >= slideLimit){
      this.prevSlide()
      _.delay(this.resetWheel.bind(this),1000)

    }
    else{
    let bindWheel = this.wheelLoop.bind(this)
      requestAnimationFrame(bindWheel)

    }

    }

    backToSlide(){


    console.log("debounce, here", this)
    this.targetPosY = 0;

    }



}