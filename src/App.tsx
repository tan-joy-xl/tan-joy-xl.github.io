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
import CircularProgress from '@mui/material/CircularProgress';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { appRoutes } from './pages/routers';
import { AppConfig } from './utils';
import './App.css';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

interface Action {
  type: 'twitter' | 'facebook' | 'instagram' | 'youtube' | 'reddit' | 'github' | '微博',
  icon: ReactElement,
  link?: string;
}

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

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
  paddingLeft: '2vw',
  paddingRight: '2vw',
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

const StyledTabsContainer = styled(Box)({
  display: 'inline-block',
  padding: '0 20px',
  height: 50,
  borderBottom: '1px solid rgb(232, 232, 232)',
});

const StyledTabs = styled(Tabs)<{ theme: any }>(({ theme }) => ({
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

const StyledTab = styled(Tab)<{ theme: any }>(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
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

const StyledLink = styled(Link)<{ theme: any }>(({ theme }) => ({
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


const StyledTabPanel = styled(Box)({
  minHeight: '240px',
  width: '88vw',
  margin: '1 auto',
  position: 'absolute',
  left: '50%',
  marginLeft: '-44vw',
  // visibility: 'hidden',
  visibility: 'visible',
  // opacity: 0,
  zIndex: 2,
  transition: '.2s ease',
  border: '1px solid #eee',
  backgroundColor: '#ffffff',
  '&:hover': {
    opacity: 1,
    display: 'block',
    transition: '.2s ease',
  },
});

const StyledLinkList = styled(List)({
  display: 'flex',
  overflow: 'hidden',
  flexWrap: 'wrap',
});

const StyledLinkItem = styled(ListItem)({
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

const StyledListTabItem = styled(ListItem)({
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
});

const StyledListItemButton = styled(ListItemButton)({
  padding: 0,
  backgroundColor: '#f9f9f9',
});

const StyledListItemText = styled(ListItemButton)({
  margin: 0,
  padding: '4px 16px',
  '&:hover': {
    backgroundColor: '#ffffff',
  }
});

const StyledTabList = styled(List)({
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

const App = (props: Props) => {
  const { window } = props;
  const { navTabsConfig, footerConfig } = AppConfig;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tabVal, setTabVal] = useState(0);
  const [value, setValue] = useState(0);
  const [breadcrumbs, setBreadcrumbs] = useState<any[]>([]);
  const [tipBoxOpt, setTipBoxOpt] = useState<any>({});
  const [hoverIndex, setHoverIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [hoverTabsOpts, setHoverTabsOpts] = useState<any[]>([])
  const theme = useTheme();

  useEffect(() => {
    getBreadcrumbs();
    setTipBoxOpt(navTabsConfig[0]?.context)
    setHoverTabsOpts(navTabsConfig[0]?.children)
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
    setTipBoxOpt(navTabsConfig[newValue]?.context || {});
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
      return <Link
        key={item.path}
        underline="none"
        color="inherit"
        href={item?.path || ''}
      >
        {item?.name}
      </Link>;
    })
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Toolbar />
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

  const loadingWarp = (
    <Box sx={{ width: '100%', height: '100%', display: 'grid', placeContent: 'center' }}>
      <CircularProgress size={88} color="inherit" />
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <StyledContainer>
      <Box sx={{ display: 'flex' }}>
        <AppBar component="nav">
          <Toolbar sx={{ position: 'relative' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' }, position: 'absolute' }}
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
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <Typography
                variant="h6"
                component="span"
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                Pear&Jony
              </Typography>
            </Box>

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
              <StyledTabs
                className="tabs"
                value={value}
                theme={theme}
                onChange={handleChange}
                sx={{ height: '100%' }}
              >
                {navTabsConfig.map((tab: any, index: number) => (
                  <StyledTab
                    className="tab-item"
                    theme={theme}
                    key={`${tab?.label}-${index}`}
                    label={tab?.label}
                    icon={<KeyboardArrowDownIcon />}
                    iconPosition="end"
                    onMouseOver={() => {
                      setTabVal(index);
                      setHoverTabsOpts(navTabsConfig[index]?.children);
                    }}
                  />
                ))}
              </StyledTabs>

              <StyledTabPanel id="tabs-panel">
                <Grid container>
                  <Grid item xs={2}>
                    <StyledTabList>
                      {hoverTabsOpts.map((item: any, index: number) => (
                        <StyledListTabItem
                          className={`${index === hoverIndex ? 'hoveredItem' : ''}`}
                        >
                          <StyledListItemButton>
                            <StyledListItemText
                              onMouseOver={() => {
                                setHoverIndex(index)
                                setLoading(true);
                              }}
                              onMouseLeave={() => setLoading(false)}
                              className={`${index === hoverIndex ? 'hoveredText' : ''}`}
                            >
                              {item.name}
                            </StyledListItemText>
                          </StyledListItemButton>
                        </StyledListTabItem>
                      ))}
                    </StyledTabList>

                  </Grid>
                  <Grid item xs={10}>
                    {loading ? (
                      loadingWarp
                    ) : (
                      <></>
                    )}

                  </Grid>
                </Grid>
              </StyledTabPanel>
            </StyledTabsContainer>

            <StyledCenterBox theme={theme} sx={{ mt: 2 }}>
              <Typography variant="h4" sx={{ mb: 2 }} >{tipBoxOpt?.title}</Typography>
              {tipBoxOpt?.content}
            </StyledCenterBox>

          </Box>
          <StyledNavBar>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {renderBreadcrumbs()}
            </Breadcrumbs>
          </StyledNavBar>

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
                    {footerConfig.actions.map((action: any, index: number) => (
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
                    <StyledLinkList>
                      {footerConfig.navActions.map((item) => (
                        <StyledLinkItem>
                          <StyledLink theme={theme} href={item.link}>
                            {item.name}
                          </StyledLink>
                        </StyledLinkItem>
                      ))}
                    </StyledLinkList>
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
                    {footerConfig.actions.map((action: any, index: number) => (
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
                    Browse by Category
                  </Typography>
                  <StyledLinkList>
                    {footerConfig.navActions.map((item) => (
                      <StyledLinkItem>
                        <StyledLink theme={theme} href={item.link}>
                          {item.name}
                        </StyledLink>
                      </StyledLinkItem>
                    ))}
                  </StyledLinkList>
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
      </Box >
    </StyledContainer >
  )
};

export default App;
