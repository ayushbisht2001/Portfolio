import { darkTheme } from "../../utility/styled_components/theme";

export const initial_state = {

  theme : darkTheme

}


export const themeReducer = (state = initial_state, action) => {

    const {type, payload} = action;

    switch(type){

        case "CHANGE_TEXT_PALETTE":
            return{

                theme : {
                    ...state.theme,
                    palette : {
                        ...state.theme.palette,
                        text : { 
                            ...state.theme.palette.text, 
                            ...payload
                                } 
                    }
               
                
                        }

                  }
        case "CHANGE_SHAPE_PALETTE":
            //console.log("MOVE_SLIDER_BG", payload)    
            return{
                theme : {
                    ...state.theme,
                    palette : {
                        ...state.theme.palette,
                        shape : { 
                            ...state.theme.palette.shape, 
                            ...payload
                                } 
                    }
               
                
                        }


                }
        case "CHANGE_PALETTE":
            return{
                theme : {
                    ...state.theme,
                    palette : {
                        ...state.theme.palette,
                        ...payload
                                } 
                    }
                 
                        


            }
        default :
        return state
    }

}