
import Home from './pages/home/home';
import ResponsiveAppBar from './pages/components/app-bar/AppBar';
import { Box } from '@mui/material';
import styled from '@emotion/styled';

import './App.css';

const StyledContainer = styled(Box)({
  with: '100vw',
  height: '100vh',
});

function App() {
  return (
    <StyledContainer>
      <ResponsiveAppBar />
      <Home />
    </StyledContainer>
  )
}

export default App
