import type { ReactElement } from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RedditIcon from '@mui/icons-material/Reddit';
import GitHubIcon from '@mui/icons-material/GitHub';
import { WeiboOutlined } from '@ant-design/icons';


interface Action {
  type: 'twitter' | 'facebook' | 'instagram' | 'youtube' | 'reddit' | 'github' | '微博',
  icon: ReactElement,
  link?: string;
}

export const Actions: Action[] = [
  {
    type: 'twitter',
    icon: <TwitterIcon />,
    link: 'https://twitter.com/JoyAdPear',
  }, {
    type: 'facebook',
    icon: <FacebookIcon />,
    link: 'https://www.facebook.com/profile.php?id=100089281386990',
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
  }, {
    type: '微博',
    icon: <WeiboOutlined />,
    link: 'https://weibo.com/u/3898663642',
  },
];