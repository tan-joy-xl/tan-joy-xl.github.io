import { useTheme } from '@mui/material/styles';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

import {
  StyledContainer,
} from './styles';
import './App.css';

import HomePage from './pages/home-page/HomePage';



const App = () => {
  const theme: any = useTheme();

  return (
    <StyledContainer>
      <HomePage />

      {/* TODO  SpeedDial  */}
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        color={theme?.RlightColor}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction tooltipTitle="Back Top" />
      </SpeedDial>
    </StyledContainer >
  )
};

export default App;
