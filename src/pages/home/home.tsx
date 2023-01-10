import { ReactElement } from "react";
import { Box, useTheme } from "@mui/system";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';

import { ShowBox } from "../components/show-box";

import styled from "@emotion/styled";

const StyledPage = styled(Box)({
  margin: '15px 30px',
  padding: '15px',
});

const Home = (): ReactElement => {
  const theme = useTheme();

  return (
    <StyledPage>
      <Grid container spacing={1.5} sx={{ height: '68vh' }}>
        <Grid item xs={9} sx={{ fontSize: '2vw' }}>
          <ShowBox></ShowBox>
        </Grid>
        <Grid item xs={3} sx={{ fontSize: '1vw', display: { xs: 'none', md: 'block' } }}>
          <Stack direction="column" spacing={1.5}>
            <ShowBox></ShowBox>
            <ShowBox></ShowBox>
            <ShowBox></ShowBox>
          </Stack>
        </Grid>
      </Grid>
    </StyledPage>
  )
}

export default Home;