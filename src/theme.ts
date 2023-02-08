import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: purple,
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 60,
        },
      },
    },
  },
});

export default createTheme(theme, {
  fontColor: '#ffffff',
  subColor: 'rgb(168, 168, 168)',
  footerFontColor: 'hsla(0,0%,100%,.8)',
  tagBgColor: 'rgb(5, 112, 193)',
});
