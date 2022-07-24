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
  darkColor6,
  darkGray,
  blue2,
  darkColor5,
} from "./colors";

export const darkTheme = {
  palette: {
    bg: darkColor6,
    frame: comColor1,
    primary: comColor1,
    secondary: lightColor1,
    ternary: darkGray,
    text: {
      primary: comColor1,
      secondary: lightColor1,
      ternary: darkGray,
    },

    shape: {
      primary: darkColor4,
      secondary: comColor1,
      ternary: lightColor1,
    },

    button: {
      primary: {},
      secondary: {},
    },
  },
};

export const lightTheme = {
  palette: {
    bg: lightColor1,
    frame: comColor1,

    text: {
      primary: darkColor5,
      secondary: comColor1,
      ternary: lightColor2,
    },

    shape: {
      primary: blue2,
      secondary: darkColor5,
      ternary: lightColor2,
    },

    button: {
      primary: {},
      secondary: {},
    },
  },
};
