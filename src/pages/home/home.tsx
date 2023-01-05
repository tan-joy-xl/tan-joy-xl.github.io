import { ReactElement } from "react";
import { Box } from "@mui/system";
import { Typography, Stack } from "@mui/material";
import styled from "@emotion/styled";

const StyledHeard = styled(Box)({
  height: '130px',
  padding: '20px',
});

const StyledADBox = styled(Box)({
  flex: 2,
  maxWidth: '680px',
  height: '90px',
  border: '1px #000 solid',
});

const Home = (): ReactElement => {
  return (
    <Box sx={{ minHeight: 1000 }}>
      <StyledHeard>
        <Box>
          <Typography fontSize={24}>Joy and Pear </Typography>

          <StyledADBox></StyledADBox>
        </Box>
      </StyledHeard>
    </Box>
  )
}

export default Home;