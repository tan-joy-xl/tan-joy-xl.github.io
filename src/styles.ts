import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Link from '@mui/material/Link';

export const StyledContainer = styled(Box)({
  with: '100vw',
  height: '100vh',
});

export const StyledMainBox = styled(Box)({
  width: '100%',
  height: '100%',
});

export const StyledFooter = styled(Box)<{ theme: any }>(({ theme }) => ({
  height: '100%',
  padding: 40,
  color: theme.subColor,
  backgroundColor: theme.palette.primary.main,
}));

export const StyledIconButton = styled(IconButton)<{ theme: any }>(({ theme }) => (({
  backgroundColor: 'rgb(66, 66, 66)',
  borderRadius: 4,
  color: theme.fontColor,
  '&:hover': {
    backgroundColor: theme.palette.info.main,
    transition: '0.3s',
  }
})));

export const StyledDivider = styled(Divider)<{ theme: any }>(({ theme }) => ({
  marginTop: 40,
  marginBottom: 40,
  backgroundColor: theme.subColor,
}));

export const StyledNavBar = styled(Box)({
  paddingTop: '8px',
  paddingBottom: '8px',
  paddingLeft: '30px',
  borderBottom: '1px solid #eee',
  marginBottom: '20px',
});

export const StyledADContainer = styled(Box)({
  height: 130,
  backgroundImage: 'url(/bg3.jpeg)',
  backgroundSize: 'cover',
  backgroundPositionY: '55%',
});

export const StyledPageContainer = styled(Box)({
  paddingLeft: '2vw',
  paddingRight: '2vw',
});

export const StyledCenterBox = styled(Box)<{ theme: any }>(({ theme }) => ({
  height: 300,
  paddingLeft: 40,
  paddingRight: 40,
  textAlign: 'center',
  display: 'grid',
  placeContent: 'center',
  color: theme.fontColor,
  backgroundColor: theme.palette.primary.main,
}));

export const StyledTabsContainer = styled(Box)({
  display: 'inline-block',
  padding: '0 20px',
  height: 50,
  borderBottom: '1px solid rgb(232, 232, 232)',
});

export const StyledTabs = styled(Tabs)<{ theme: any }>(({ theme }) => ({
  '&:hover + #tabs-panel': {
    opacity: 1,
    visibility: 'visible',
    transition: '.2s ease',
  },
  '& .MuiTabs-indicator': {
    width: '76px !important',
    backgroundColor: theme.tagBgColor,
  },
}));

export const StyledTab = styled(Tab)<{ theme: any }>(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  fontWeight: '700 !important',
  '&:after': {
    display: 'block',
    content: 'close-quote',
    width: 0,
    height: '2px',
    marginLeft: '20px',
    position: 'absolute',
    left: '-30%',
    bottom: 10,
    backgroundColor: theme.tagBgColor,
    zIndex: 2,
    transition: '.5s ease',
  },
  '&:hover': {
    transition: '.5s ease',
    '&:after': {
      width: '76px',
      transition: '0.5s ease',
      backgroundColor: 'rgb(5, 112, 193)',
    },
  },
}));

export const StyledLink = styled(Link)<{ theme: any }>(({ theme }) => ({
  color: theme.footerFontColor,
  fontSize: '14px',
  fontWeight: 700,
  textTransform: 'capitalize',
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': {
    color: '#fff',
  },
}));

export const StyledTabPanel = styled(Box)({
  minHeight: '240px',
  width: '88vw',
  margin: '1 auto',
  position: 'absolute',
  left: '50%',
  marginLeft: '-44vw',
  visibility: 'hidden',
  // visibility: 'visible',
  opacity: 0,
  zIndex: 2,
  transition: '.2s ease',
  border: '1px solid #eee',
  backgroundColor: '#ffffff',
  '&:hover': {
    opacity: 1,
    display: 'block',
    transition: '.2s ease',
    visibility: 'visible',
  },
});

export const StyledLinkList = styled(List)({
  display: 'flex',
  overflow: 'hidden',
  flexWrap: 'wrap',
});

export const StyledLinkItem = styled(ListItem)({
  width: '8vw',
  minWidth: '80px',
  height: '28px',
  lineHeight: '28px',
  marginRight: '1vw',
  padding: 0,
  display: 'inline-block',
  paddingBottom: '10px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const StyledListTabItem = styled(ListItem)({
  boxSizing: 'content-box',
  margin: 0,
  padding: 0,
  borderRight: '1px #eee solid',
  borderTop: '1px #f9f9f9 solid',
  borderBottom: '1px #f9f9f9 solid',
  backgroundColor: '#f9f9f9',

  '&:hover': {
    borderTop: '1px #eee solid',
    borderBottom: '1px #eee solid',
    borderRight: '1px #fff solid',
    backgroundColor: '#fff',
    transition: '.2s ease',
  },
  '&:hover .tabs-panel': {
    backgroundColor: 'red',
  }
});

export const StyledListItemButton = styled(ListItemButton)({
  padding: 0,
  backgroundColor: '#f9f9f9',
});

export const StyledListItemText = styled(ListItemButton)({
  margin: 0,
  padding: '4px 16px',
  fontWeight: 700,
  display: 'block',
  color: '#a0a0a0',
  textTransform: 'uppercase',
  transition: '.2s ease',
  '&:hover': {
    backgroundColor: '#ffffff',
    color: '#000',
    transition: '.2s ease',
  }
});

export const StyledTabList = styled(List)({
  minHeight: '240px',
  backgroundColor: '#f9f9f9',
  borderRight: '1px solid #eee',

  '& .hoveredItem': {
    borderTop: '1px #eee solid',
    borderBottom: '1px #eee solid',
    borderRight: '1px #fff solid',
  },

  '& .hoveredText': {
    backgroundColor: '#fff',
  }
});