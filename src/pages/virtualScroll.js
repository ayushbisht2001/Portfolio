import virtualscroll from "virtual-scroll";
import _ from "lodash";

export class VS{


    constructor(ele, p){
        
        this.vs = new virtualscroll(
        {    el : ele,
            mouseMultiplier : .4,
            keyStep : 400
        }
        );

        this.debouncedBackToSlide = _.debounce(this.backToSlide, 200);
        this.x = p;
        
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

    backToSlide(){


    }



}