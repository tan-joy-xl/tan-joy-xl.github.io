import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RedditIcon from '@mui/icons-material/Reddit';
import GitHubIcon from '@mui/icons-material/GitHub';
import { WeiboOutlined, WechatOutlined } from '@ant-design/icons';
import { BilibiliOutlined } from '../pages/components/SvgIcons';

interface footerConfiguration {
  actions: any[],
  navActions: any[],
}

interface AppConfiguration {
  footerConfig: footerConfiguration;
}

export const AppConfig: AppConfiguration = {
  footerConfig: {
    actions: [
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
      }, {
        type: 'b站',
        icon: <BilibiliOutlined />,
        link: '',
      }, {
        type: '微信公众号',
        icon: <WechatOutlined />,
        link: '',
      },
    ],
    navActions: [
      {
        name: 'Apps',
        label: 'Apps',
        link: '/',
      }, {
        name: 'Gadget',
        label: 'Gadget',
        link: '/',
      }, {
        name: 'Food',
        label: 'Food',
        link: '/',
      }, {
        name: 'Fashion',
        label: 'Fashion',
        link: '/',
      }, {
        name: 'Entertainment',
        label: 'Entertainment',
        link: '/',
      }, {
        name: 'Gaming',
        label: 'Gaming',
        link: '/home',
      }, {
        name: 'Health',
        label: 'Health',
        link: '/',
      }, {
        name: 'Lifestyle',
        label: 'Lifestyle',
        link: '/Lifestyle',
      },
    ],
  },
};

