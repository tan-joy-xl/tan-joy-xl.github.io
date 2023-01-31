import { ReactElement } from "react";
import { Box, useTheme } from "@mui/system";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';

import { ShowBox } from "../components/show-box";
import { GridBox } from "./components/grid-box";
import { HorizScrollBox } from "./components/horizonta-scroll-box";

import styled from "@emotion/styled";

const StyledPage = styled(Box)({
  margin: '15px 0',
});

const Home = (): ReactElement => {
  const theme = useTheme();

  return (
    <StyledPage>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <GridBox />
      </Box>

      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <HorizScrollBox />
      </Box>
    </StyledPage>
  )
}

export default Home;