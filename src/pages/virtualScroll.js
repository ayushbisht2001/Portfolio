import _ from "lodash";
import VirtualScroll from "virtual-scroll";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { TweenLite } from "gsap/gsap-core";

gsap.registerPlugin(MotionPathPlugin);

export class VS{


    constructor(ele, target, setState){
        
        this.vs = new VirtualScroll(
        {    el : ele,
            mouseMultiplier : .4,
            keyStep : 400
        }
        );

        this.debouncedBackToSlide = _.debounce(this.backToSlide, 200);
        this.target = target;
        this.handleState = setState
        
    }

    
  debounce(e){

    console.log("debounce, here")

    this.targetPosY = 0;
    // TweenLite.set(bref.current, {y: 0, force3D: true})

  }
  
    print(){
        console.log(this.vs)
    }

    events(handleState){

        this.vs.on(this.scroll)
        console.log(handleState)
    }

    scroll(el){

        // this.handleState( prev => ({ ...prev, el}))
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
          console.log("move previous")
          // gsap.to(target.current, { y : 0, force3D : true})
        }
      
         nextSlide(){
          console.log("move next")
      
          // gsap.to(target.current, { y : 0, force3D : true})
      
        }

    resetWheel(){

                this.targetPosY = 0;
                this.slideTransform = 0;
                this.oldDeltaY = 0;
                this.directionQueue = '';
        
              gsap.to(this.target, {y: 0, force3D: true})
          }

    wheelLoop(){
    let newSlideTransformTemp = this.slideTransform + (this.targetPosY - this.slideTransform) * .09
    newSlideTransformTemp =  getRoundedValue(newSlideTransformTemp)
    gsap.to(ref.current, {y: this.slideTransform, force3D: true})

    if(this.slideTransform <= -slideLimit ){
      nextSlide()
      _.delay(resetWheel,500)

    }
    else if (this.slideTransform >= slideLimit){
      prevSlide()
      _.delay(resetWheel,500)

    }
    else{

      requestAnimationFrame(wheelLoop)

    }

    }

    backToSlide(){


    }



}