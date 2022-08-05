export const initial_state = {

    targets : [],
    rotateX : "",
    rotateY : "",
    transform : "",
    moveY : 0,
    moveX  : 0,
    animation_id: 0,
    direction : "up"

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
            return{
                ...state,
                ...payload
            }
        default :
        return state
    }

}