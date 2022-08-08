export const initial_state = {

    targets : [],
    rotateX : "",
    rotateY : "",
    transform : "",
    moveY : 0,
    moveX  : 0,
    animation_id: 0,
    direction : "next",
    cur_slide_id : 0,
    slide_length : 3

}


export const slideReducer = (state = initial_state, action) => {

    const {type, payload} = action;

    switch(type){

        case "ROTATE_SLIDER_BG":
            return{
                ...state,
                ...payload
            }
        case "MOVE_SLIDER_BG":
            //console.log("MOVE_SLIDER_BG", payload)    
            return{
                ...state,
                ...payload
            }
        case "UPDATE":
            return{
                ...state,
                ...payload
            }
        default :
        return state
    }

}