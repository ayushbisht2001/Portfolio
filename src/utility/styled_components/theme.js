import {
  ptextColor,
  comColor1,
  lightColor2,
  lightColor1,
  pHColor1,
  pHColor2,
  darkColor1,
  darkColor2,
} from "./colors";

export const darkTheme = {

  palette: {
    bg : darkColor1,
    frame : comColor1,

    text : {
      primary : comColor1,
      secondary : lightColor1,
      ternary : lightColor2,
  },
  
  shape : {
    primary : comColor1,
    secondary : lightColor1,
    ternary : lightColor1,
  },

  button: {
    primary: {},
    secondary: {}
  }
}

};

export const lightTheme = {

  palette: {
    bg : lightColor1,
    frame : comColor1,

    text : {
      primary : darkColor1,
      secondary : comColor1,
      ternary : lightColor2,
  },

  shape : {
    primary : comColor1,
    secondary : lightColor1,
    ternary : lightColor2,
  },

  button: {
    primary: {},
    secondary: {}
  }
}

};
