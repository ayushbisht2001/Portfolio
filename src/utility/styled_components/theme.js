import { useContext } from "react";
import { ThemeContext } from "styled-components";
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
  iuri,
} from "./colors";

export const darkTheme = {
  palette: {
    bg: darkColor6,
    frame: comColor1,
    primary: iuri,
    secondary: lightColor1,
    ternary: darkGray,
    text: {
      primary: iuri,
      secondary: lightColor1,
      ternary: darkGray,
    },

    shape: {
      primary: darkColor4,
      secondary: iuri,
      ternary: lightColor1,
      c1 : "#E63946",
      c2 : "#457B9D",
      c3 : "#F1FAEE",
      c4 : "#682ae9",

    },

    button: {
      primary: {},
      secondary: {},
    },
    border : {
      dark : "#000"
    }
  },
};
export const lightTheme = {
  palette: {
    bg: lightColor1,
    frame: comColor1,
    primary: iuri,
    secondary: "gray",
    ternary: darkGray,
    text: {
      primary: iuri,
      secondary: darkGray,
      ternary: darkGray,
    },

    shape: {
      primary: "gray",
      secondary: iuri,
      ternary: "gray",
      c1 : "#E63946",
      c2 : "#457B9D",
      c3 : "#F1FAEE",
      c4 : "#682ae9",

    },

    button: {
      primary: {},
      secondary: {},
    },
    border : {
      dark : "#000"
    }
  },
};

export const comTheme = {
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



export const  useTheme = () => {

  const{ state : {curTheme}} = useContext(ThemeContext);

  return curTheme;

}