import type { ReactElement } from 'react';
import { useState, useEffect } from 'react';
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
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RedditIcon from '@mui/icons-material/Reddit';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

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
  }, {
    type: 'facebook',
    icon: <FacebookIcon />
  }, {
    type: 'instagram',
    icon: <InstagramIcon />
  }, {
    type: 'youtube',
    icon: <YouTubeIcon />
  }, {
    type: 'reddit',
    icon: <RedditIcon />
  }, {
    type: 'github',
    icon: <GitHubIcon />,
    link: 'https://github.com/tan-joy-xl',
  },
];

const tabs: any[] = [
  {
    icon: '',
    label: 'ONE',
  }, {
    icon: '',
    label: 'TWO',
  }, {
    icon: '',
    label: 'THREE',
  }, {
    icon: '',
    label: 'FOUR',
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

const StyledFooter = styled(Box)<{ theme: any }>(({ theme }) => ({
  height: '100%',
  padding: 40,
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

const StyledTabsContainer = styled(Box)({
  padding: '0 20px',
  height: 50,
  borderBottom: '1px solid rgb(232, 232, 232)',
});

const StyledDivider = styled(Divider)<{ theme: any }>(({ theme }) => ({
  marginTop: 40,
  marginBottom: 40,
  backgroundColor: theme.subColor,
}));

const StyledNavBar = styled(Box)({
  paddingTop: '8px',
  paddingBottom: '8px',
  paddingLeft: '30px',
  borderBottom: '1px solid #eee',
  marginBottom: '20px',
});

const StyledADContainer = styled(Box)({
  height: 130,
  backgroundImage: 'url(/bg3.jpeg)',
  backgroundSize: 'cover',
  backgroundPositionY: '55%',
});

const StyledPageContainer = styled(Box)({
  paddingLeft: '10px',
  paddingRight: '10px',
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

const StyledTab = styled(Tab)<{ theme: any }>(({ theme }) => ({
  position: 'relative',
  '&:after': {
    display: 'block',
    content: 'close-quote',
    width: 0,
    height: '2px',
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    bottom: 10,
    zIndex: 2,
    transition: '.5s ease',
  },
  '&:hover': {
    transition: '.5s ease',
    '&:after': {
      width: '90%',
      transition: '1.5s ease',
    }
  },
}));

const StyledLink = styled(Link)({
  cursor: 'pointer',
  fontSize: '14px',
});

const StyledTabPanel = styled(Box)({
  display: 'block',
  width: '600px',
  height: '300px',
});

const App = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tabVal, setTabVal] = useState(0);
  const [value, setValue] = useState(0);
  const [breadcrumbs, setBreadcrumbs] = useState<any[]>([]);
  const [opentab, setOpentab] = useState(false);
  const [timer, setTimer] = useState(0);


  const theme = useTheme();

  useEffect(() => {
    getBreadcrumbs();
  }, []);

  const getBreadcrumbs = () => {
    const pathlist = location.pathname === '/' ? [''] : location.pathname.split('/');
    const breas = pathlist.map((item: any) => {
      const curRoute = appRoutes[appRoutes.findIndex((route: any) => route?.path === item)];

      if (curRoute) {
        return {
          name: curRoute?.name,
          path: item ? item : '/',
        }
      }

      return {
        name: item,
        path: item,
      }
    });

    setBreadcrumbs(breas);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleAction = (action: Action) => {
    if (!action.link || window) {
      return alert('Just wait a fe time！it in development！ ♥ pear~');
    }
    open(action.link);
  };

  const renderBreadcrumbs = () => {
    return breadcrumbs?.map((item: any, index: number) => {
      if (index === breadcrumbs.length - 1) {
        return <Typography
          key="3axxd"
          color="text.primary"
          sx={{ fontSize: '14px' }}
        >
          {item?.name}
        </Typography>;
      }
      return <StyledLink
        key={item.path}
        underline="none"
        color="inherit"
        href={item?.path || ''}
      >
        {item?.name}
      </StyledLink>;
    })
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Pear&Jony
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
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}
            >
              Pear&Jony
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
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
              display: { xs: 'block', md: 'none' },
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
          {/* TODO tabs */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <StyledADContainer></StyledADContainer>

            <StyledTabsContainer sx={{ pl: 2, pr: 2 }}>
              <Tabs
                value={value}
                onChange={handleChange}
                sx={{ height: '100%' }}
              >
                {tabs.map((tab: any, index: number) => (
                  <StyledTab
                    theme={theme}
                    key={`${tab?.label}-${index}`}
                    label={tab?.label}
                    icon={<KeyboardArrowDownIcon />}
                    iconPosition="end"
                    onMouseOver={() => setTabVal(index)}
                  />
                ))}

              </Tabs>
              {tabVal === 0 && <StyledTabPanel >Item One</StyledTabPanel>}
              {tabVal === 1 && <StyledTabPanel >Item Two</StyledTabPanel>}
              {tabVal === 2 && <StyledTabPanel >Item Three</StyledTabPanel>}
              {tabVal === 3 && <StyledTabPanel >Item Four</StyledTabPanel>}

            </StyledTabsContainer>

            <StyledCenterBox theme={theme} sx={{ mt: 2 }}>
              <Typography variant="h4" sx={{ mb: 2 }} >Gaming</Typography>
              A wonderful serenity has taken
              possession of my entire soul,
              like these sweet mornings of
              spring which I enjoy with my whole heart.
            </StyledCenterBox>

            <StyledNavBar>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                {renderBreadcrumbs()}
              </Breadcrumbs>
            </StyledNavBar>
          </Box>

          {/* page container */}
          <StyledPageContainer>
            {useRoutes(appRoutes)}
          </StyledPageContainer>

          {/* web footer */}
          <StyledFooter theme={theme}>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Grid container spacing={6}>
                <Grid item xs={4}>
                  <Typography variant="h3">
                    Pear&Jony
                  </Typography>
                  <Box>
                    We bring you the latest WordPress News,
                    Reviews and Tutorials so you can learn
                    how to create amazing WordPress websites
                    for yourself and clients!
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>Follow Us</Typography>
                    {Actions.map((action: Action, index: number) => (
                      <StyledIconButton
                        key={`${action?.type}-${index}`}
                        theme={theme}
                        sx={{ mr: 1, mt: 1 }}
                        onClick={() => handleAction(action)}
                      >
                        {action.icon}
                      </StyledIconButton>
                    ))}
                  </Box>
                </Grid>

                <Grid item xs={4}>
                  <Box>
                    <Typography variant="h5" sx={{ color: 'rgb(249, 61, 83)' }}>
                      Pear&Jony
                    </Typography>
                    We bring you the latest WordPress News,
                    Reviews and Tutorials so you can learn
                    how to create amazing WordPress websites
                    for yourself and clients!
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <Typography variant="h5">
                      Pear&Jony
                    </Typography>
                    We bring you the latest WordPress News,
                    Reviews and Tutorials so you can learn
                    how to create amazing WordPress websites
                    for yourself and clients!
                  </Box>
                </Grid>

              </Grid>
            </Box>

            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <Stack spacing={6}>
                <Box>
                  <Typography variant="h3">
                    Pear&Jony
                  </Typography>
                  <Box>
                    We bring you the latest WordPress News,
                    Reviews and Tutorials so you can learn
                    how to create amazing WordPress websites
                    for yourself and clients!
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>Follow Us</Typography>
                    {Actions.map((action: Action, index: number) => (
                      <StyledIconButton
                        key={`${action?.type}-${index}`}
                        theme={theme}
                        sx={{ mr: 1, mt: 1 }}
                        onClick={() => handleAction(action)}
                      >
                        {action.icon}
                      </StyledIconButton>
                    ))}
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h5" sx={{ color: 'rgb(249, 61, 83)' }}>
                    Pear&Jony
                  </Typography>
                  We bring you the latest WordPress News,
                  Reviews and Tutorials so you can learn
                  how to create amazing WordPress websites
                  for yourself and clients!
                </Box>
                <Box>
                  <Typography variant="h5">
                    Pear&Jony
                  </Typography>
                  We bring you the latest WordPress News,
                  Reviews and Tutorials so you can learn
                  how to create amazing WordPress websites
                  for yourself and clients!
                </Box>

              </Stack>
            </Box>
            <StyledDivider theme={theme} />
          </StyledFooter>
        </StyledMainBox>
      </Box>
    </StyledContainer>
  )
}

export default App
