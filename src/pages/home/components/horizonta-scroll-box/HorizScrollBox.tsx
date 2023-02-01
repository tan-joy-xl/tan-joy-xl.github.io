import { ReactElement } from "react";
import { Box, useTheme } from "@mui/system";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';

import { ShowBox } from "../../../components/show-box";

import styled from "@emotion/styled";

const StyledScollBox = styled(Box)({
  overflowX: 'scroll',
  overflowY: 'hidden',
  height: '28vw',
});

const StyledScollContainer = styled(Box)({
  display: 'flex',
  width: '132vw',
  height: '100%',
  fontSize: '2vw',
});

const StyledScollItem = styled(Box)({
  width: '42vw',
  marginRight: '2vw',
});

export const HorizScrollBox = () => {
  return (
    <Stack direction="column" spacing={'2vw'}>
      <Box sx={{ height: '50vw' }}>
        <ShowBox />
      </Box>
      <StyledScollBox>
        <StyledScollContainer>
          <StyledScollItem>
            <ShowBox />
          </StyledScollItem>
          <StyledScollItem>
            <ShowBox />
          </StyledScollItem>
          <StyledScollItem>
            <ShowBox />
          </StyledScollItem>
        </StyledScollContainer>
      </StyledScollBox>


    </Stack>
  )
}