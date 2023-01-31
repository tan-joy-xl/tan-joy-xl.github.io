import { ReactElement } from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

interface ShowBoxProps {
  sx?: any;
  tag?: string;
  title?: string;
  subTitle?: any;
};

const StyledContainer = styled(Box)({
  overflow: 'hidden',
  height: '100%',
  position: 'relative',
  backgroundImage: 'url(/bg3.jpeg)',
  backgroundSize: '160%',
  backgroundPositionX: '50%',
  backgroundRepeat: 'no-repeat',
  color: 'rgb(255, 255, 255)',
  transition: '.35s ease',
  cursor: 'pointer',
  fontSize: '1em',

  '&:hover': {
    backgroundPositionX: '35%',
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
    },

    '& .move-box': {
      bottom: '10%',
      transition: '.35s ease',
      '& .sub-title': {
        color: 'rgba(255, 255, 255, 1)',
        transition: '.35s ease',
      },
    },
  },
});

const StyledMoveBox = styled(Box)({
  position: 'absolute',
  left: '20px',
  bottom: '-8%',
  fontSize: '1em',
  transition: '.35s ease',
  '& .sub-title': {
    color: 'rgba(255, 255, 255, 0)',
    transition: '.3s ease',
  },
});

const StyledTag = styled(Typography)({
  display: 'inline-block',
  padding: '0px 6px',
  backgroundColor: 'rgb(5, 112, 193)',
  fontSize: '14px',
  color: 'rgb(255, 255, 255)',
  marginBottom: '5px',
});

const StyledSubTitle = styled(Box)({
  marginTop: 20,
});



export const ShowBox = (props: ShowBoxProps): ReactElement => {
  const { sx, tag, title, subTitle } = props;
  return (
    <StyledContainer sx={sx}>
      <StyledMoveBox className="move-box">
        <StyledTag>{tag || 'Politics'}</StyledTag>
        <Typography variant="h5" sx={{ fontSize: '1.4em' }}>
          {title || 'These Are the 5 Big Tech Stories to Watch in 2017'}
        </Typography>

        <StyledSubTitle className="sub-title">
          {subTitle || <Typography color="inherit" sx={{ fontSize: '0.8em' }}>Ferdy Korpershoek</Typography>}
        </StyledSubTitle>
      </StyledMoveBox>
    </StyledContainer>
  )
}