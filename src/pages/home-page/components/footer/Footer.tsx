import type { ReactElement } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import {
  StyledFooter,
  StyledIconButton,
  StyledDivider,
  StyledLink,
  StyledLinkList,
  StyledLinkItem,
} from '../../../../styles';
import { AppConfig } from '../../../../utils';

interface Action {
  type: 'twitter' | 'facebook' | 'instagram' | 'youtube' | 'reddit' | 'github' | '微博',
  icon: ReactElement,
  link?: string;
}
const Footer = () => {
  const { footerConfig } = AppConfig;

  const theme: any = useTheme();
  const handleAction = (action: Action) => {
    if (!action.link || window) {
      return alert('Just wait a fe time！it in development！ ♥');
    }
    open(action.link);
  };
  return (
    <StyledFooter theme={theme}>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Grid container spacing={6}>
          <Grid item xs={4}>
            <Typography variant="h3" fontSize="2rem" sx={{ mb: '10px' }}>
              S & Only Sharing
            </Typography>
            <Box>
              （Share Bar）S&OS - Share And Only Sharing.
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
  )
}

export default Footer;