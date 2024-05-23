import { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
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
import CircularProgress from '@mui/material/CircularProgress';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import {
  StyledContainer,
  StyledMainBox,
  StyledNavBar,
  StyledADContainer,
  StyledPageContainer,
  StyledCenterBox,
  StyledTabsContainer,
  StyledTabs,
  StyledTab,
  StyledTabPanel,
  StyledListTabItem,
  StyledListItemButton,
  StyledListItemText,
  StyledTabList,
} from './../../../../styles';
import { appRoutes } from '../../../routers';
import { AppConfig } from '../../../../utils';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];
const Header = (props: any) => {
  const { navTabsConfig } = AppConfig;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tabVal, setTabVal] = useState(0);
  const [value, setValue] = useState(0);
  const [breadcrumbs, setBreadcrumbs] = useState<any[]>([]);
  const [tipBoxOpt, setTipBoxOpt] = useState<any>({});
  const [hoverIndex, setHoverIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [hoverTabsOpts, setHoverTabsOpts] = useState<any[]>([])
  const theme: any = useTheme();
  const { window } = props;

  const container = window !== undefined ? () => window().document.body : undefined;

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

  const loadingWarp = (
    <Box sx={{ width: '80%', height: '80%', display: 'grid', placeContent: 'center' }}>
      <CircularProgress color="info" />
    </Box>
  );

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

  return (
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
            S & Only Sharing
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Typography
              variant="h6"
              component="span"
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              S&OS
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
      </StyledMainBox>
    </Box >
  )
}

export default Header;