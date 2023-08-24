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
  components: {
    MuiTextField: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'transparent', // Ajusta el borde del `TextField`
              },
              '&:hover fieldset': {
                borderColor: 'transparent', // Ajusta el borde cuando se pasa el mouse por encima
              },
              '&.Mui-focused fieldset': {
                borderColor: 'transparent', // Ajusta el borde cuando el `TextField` está enfocado
              },
              '& .MuiInputBase-input': {
                padding: '10px 14px',   // Ajustar el padding si es necesario
                verticalAlign: 'middle',
              },
            },
            backgroundColor: '#1A1A1A',
            borderRadius: '15px',
          }
        }
      ]
    }
  }
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: lightGradient
    }
  }
});