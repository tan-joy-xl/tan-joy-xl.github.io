import { ReactElement } from "react";
import { Box, useTheme } from "@mui/system";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import styled from "@emotion/styled";

const StyledHeard = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledADBox = styled(Box)({
  maxWidth: '680px',
  height: '90px',
  border: '1px #000 solid',
});

const StyledCenterBox = styled(Box)<{ theme: any }>(({ theme }) => ({
  height: 300,
  paddingLeft: 40,
  paddingRight: 40,
  textAlign: 'center',
  display: 'grid',
  placeContent: 'center',
  color: theme.fontColor,
  backgroundColor: theme.palette.primary.main,
}));

const Home = (): ReactElement => {
  const theme = useTheme();

  return (
    <Box sx={{ minHeight: 1000 }}>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <StyledHeard >
          <Typography variant="h3">Joy and Pear </Typography>
          <StyledADBox></StyledADBox>
        </StyledHeard>
      </Box>


      <StyledCenterBox theme={theme}>
        <Typography variant="h4" sx={{ mb: 2 }} >Gaming</Typography>
        A wonderful serenity has taken
        possession of my entire soul,
        like these sweet mornings of
        spring which I enjoy with my whole heart.
      </StyledCenterBox>
    </Box>
  )
}

export default Home;