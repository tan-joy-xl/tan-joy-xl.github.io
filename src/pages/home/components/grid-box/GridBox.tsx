import { ReactElement } from "react";
import { Box, useTheme } from "@mui/system";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';

import { ShowBox } from "../../../components/show-box";

import styled from "@emotion/styled";

const StyledContainer = styled(Box)({
  height: '50vw',
  overflow: 'hidden',
});

const StyledVerticalFlexBox = styled(Box)({

});

const StyledGridContainer = styled(Grid)({
  height: '100%',
});

const StyledGridItem = styled(Grid)({
  height: '100%',
});

const StyledStack = styled(Box)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});


export const GridBox = (): ReactElement => {
  return (
    <StyledContainer>
      <StyledGridContainer container spacing={'1vw'}>
        <StyledGridItem item xs={9} sx={{ fontSize: '2vw' }} >
          <ShowBox></ShowBox>
        </StyledGridItem>
        <StyledGridItem item xs={3} sx={{ fontSize: '1vw' }}>
          <StyledStack>
            <ShowBox sx={{ mb: '1vw' }} />
            <ShowBox sx={{ mb: '1vw' }} />
            <ShowBox />
          </StyledStack>
        </StyledGridItem>
      </StyledGridContainer>
    </StyledContainer>
  )
}