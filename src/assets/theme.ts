import { createTheme } from "@mui/material";

const darkGradient = "linear-gradient(0deg, rgba(10, 10, 10, 0.20) 0%, rgba(10, 10, 10, 0.20) 100%), linear-gradient(155deg, #1B1B1B 0%, #14151F 100%)";
export const lightGradient = "linear-gradient(0deg, rgba(230, 230, 245, 0.7) 0%, rgba(255, 255, 255, 0.9) 100%), linear-gradient(155deg, #E4E6FF 0%, #D1D4FF 100%)";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: darkGradient
    }
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: lightGradient
    }
  }
});