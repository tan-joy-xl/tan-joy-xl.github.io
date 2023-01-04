import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: purple,
  },
});

export default createTheme(theme, {
  fontColor: '#ffffff',
  subColor: 'rgb(168, 168, 168)',
});
