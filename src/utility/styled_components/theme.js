import {
  ptextColor,
  comColor1,
  lightColor2,
  lightColor1,
  pHColor1,
  pHColor2,
  darkColor1,
  darkColor2,
  darkColor3,
  darkColor4,
darkGray,
blue2,
darkColor5

} from "./colors";

export const darkTheme = {

  palette: {
    bg : darkColor4,
    frame : comColor1,

    text : {
      primary : lightColor1,
      secondary : lightColor1,
      ternary : darkColor5,
  },
  
  shape : {
    primary : darkGray,
    secondary : comColor1,
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
      primary : darkColor5,
      secondary : comColor1,
      ternary : lightColor2,
  },

  shape : {
    primary : blue2,
    secondary : darkColor5,
    ternary : lightColor2,
  },

  button: {
    primary: {},
    secondary: {}
  }
}

};
