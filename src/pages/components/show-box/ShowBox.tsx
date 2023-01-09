import { ReactElement } from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

interface ShowBoxProps {

};

const StyledContainer = styled(Box)({
  height: '100%',
  minHeight: '130px',
  position: 'relative',
  overflow: 'hidden',
  backgroundImage: 'url(/bg3.jpeg)',
  backgroundSize: '120%',
  backgroundPositionX: '50%',
  color: 'rgb(255, 255, 255)',
  transition: '.35s ease',
  cursor: 'pointer',

  '&:hover': {
    backgroundPositionX: '40%',
    transition: '.35s ease',
    '&:after': {
      content: 'close-quote',
      display: 'block',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 2,
      background: 'hsla(0, 0%, 90%, .15)',
      transition: '.35s ease',
    }
  },
});

const StyledMoveBox = styled(Box)({
  position: 'absolute',
  left: '20px',
  bottom: '10%',
});

const StyledTag = styled(Typography)({
  display: 'inline-block',
  padding: '0px 6px',
  backgroundColor: 'rgb(5, 112, 193)',
  fontSize: '14px',
  color: 'rgb(255, 255, 255)',
  marginBottom: '5px',
});



export const ShowBox = (props: ShowBoxProps): ReactElement => {
  return (
    <StyledContainer>
      <StyledMoveBox>
        <StyledTag>Politics</StyledTag>
        <Typography>These Are the 5 Big Tech Stories to Watch in 2017</Typography>
        <Box>Ferdy Korpershoek</Box>
        <Box>Ferdy Korpershoek</Box>
      </StyledMoveBox>
    </StyledContainer>
  )
}