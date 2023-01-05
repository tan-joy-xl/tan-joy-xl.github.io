import type { ReactElement } from 'react';
import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RedditIcon from '@mui/icons-material/Reddit';
import GitHubIcon from '@mui/icons-material/GitHub';

import { appRoutes } from './pages/routers';
import './App.css';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

interface Action {
  type: 'twitter' | 'facebook' | 'instagram' | 'youtube' | 'reddit' | 'github',
  icon: ReactElement,
  link?: string;
}

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];
const Actions: Action[] = [
  {
    type: 'twitter',
    icon: <TwitterIcon />,
    link: 'https://twitter.com/JoyAdPear',
  },
  {
    type: 'facebook',
    icon: <FacebookIcon />
  },
  {
    type: 'instagram',
    icon: <InstagramIcon />
  },
  {
    type: 'youtube',
    icon: <YouTubeIcon />
  },
  {
    type: 'reddit',
    icon: <RedditIcon />
  },
  {
    type: 'github',
    icon: <GitHubIcon />,
    link: 'https://github.com/tan-joy-xl',
  },
];

const StyledContainer = styled(Box)({
  with: '100vw',
  height: '100vh',
});

const StyledMainBox = styled(Box)({
  width: '100%',
  height: '100%',
});

const StyledBottom = styled(Box)<{ theme: any }>(({ theme }) => ({
  width: '100%',
  height: '380px',
  padding: 10,
  color: theme.subColor,
  backgroundColor: theme.palette.primary.main,
}));

const StyledIconButton = styled(IconButton)<{ theme: any }>(({ theme }) => (({
  backgroundColor: 'rgb(66, 66, 66)',
  borderRadius: 4,
  color: theme.fontColor,
  '&:hover': {
    backgroundColor: theme.palette.info.main,
    transition: '0.3s',
  }
})));

const App = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleAction = (action: Action) => {
    console.log(action, action);
    if (!action.link || window) {
      return alert('Just wait a fe time！it in development！ ♥ pear~');
    }
    open(action.link);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Pear&Jony.
      </Typography>
      <Divider sx={{ bgcolor: 'rgba(84, 84, 84, .48)' }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <StyledContainer>
      <Box sx={{ display: 'flex' }}>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Pear&Jony.
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff' }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                bgcolor: 'black',
                color: '#ffffff'
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <StyledMainBox component="main">
          <Toolbar />
          {useRoutes(appRoutes)}
          <StyledBottom theme={theme}>
            <Typography variant="h3" sx={{ my: 2 }}>
              Pear&Jony.
            </Typography>
            <Box sx={{ width: '300px' }}>
              We bring you the latest WordPress News,
              Reviews and Tutorials so you can learn
              how to create amazing WordPress websites
              for yourself and clients!
            </Box>
            <Box>
              {Actions.map((action: Action) => (
                <StyledIconButton
                  theme={theme}
                  sx={{ mr: 1 }}
                  onClick={() => handleAction(action)}
                >
                  {action.icon}
                </StyledIconButton>
              ))}
            </Box>
          </StyledBottom>
        </StyledMainBox>
      </Box>
    </StyledContainer>
  )
}

export default App
