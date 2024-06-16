import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#E3D026',
      light: '#cb9765',
      dark: '#A29415',
      contrastText: '#242105',
    },
    navbar: '#252422',
    bg1:"#252422",
    bg2:"#cc955f",
    text1: "#cc955f",
    text2:"#252422"

  },

  typography: {
    "fontFamily": `"vazir", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  }
});
