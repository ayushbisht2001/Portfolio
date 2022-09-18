import { darkTheme, lightTheme } from "../../utility/styled_components/theme";

export const initial_state = {

  curTheme : darkTheme,
  themes : {
    "light" : lightTheme,
    "dark" : darkTheme,
  },
  type : "dark"

}


export const themeReducer = (state = initial_state, action) => {

    const {type, payload} = action;

    switch(type){

        case "TOGGLE_THEME":
            return{
                ...state,
                curTheme : state.themes[payload],
                type : payload
                }

        case "CHANGE_TEXT_PALETTE":
            return{
                ...state,

                curTheme : {
                    ...state.curTheme,
                    palette : {
                        ...state.curTheme.palette,
                        text : { 
                            ...state.curTheme.palette.text, 
                            ...payload
                                } 
                    }
               
                
                        }

                  }
        case "CHANGE_SHAPE_PALETTE":
            //console.log("MOVE_SLIDER_BG", payload)    
            return{
                ...state,
                curTheme : {
                    ...state.curTheme,
                    palette : {
                        ...state.curTheme.palette,
                        shape : { 
                            ...state.curTheme.palette.shape, 
                            ...payload
                                } 
                    }
               
                
                        }


                }
        case "CHANGE_PALETTE":
            return{
                ...state,
                curTheme : {
                    ...state.curTheme,
                    palette : {
                        ...state.curTheme.palette,
                        ...payload
                                } 
                    }
                 
                        


            }
        default :
        return state
    }

}