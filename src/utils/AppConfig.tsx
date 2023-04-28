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
  navTabsConfig: any[];
  footerConfig: footerConfiguration;
}

export const AppConfig: AppConfiguration = {
  navTabsConfig: [
    {
      icon: '',
      label: 'ONE',
      context: {
        title: 'Gaming One',
        content: `A wonderful serenity has taken
        possession of my entire soul,
        like these sweet mornings of
        spring which I enjoy with my whole heart.`
      },
      children: [
        {
          name: 'ONEoptOne',
          items: [
            {
              name: 'itemOne',
              link: '/',
            },
          ],
        },
        {
          name: 'ONEoptTwo',
          items: [
            {
              name: 'itemTwo',
              link: '/',
            },
          ],
        },
        {
          name: 'ONEoptThree',
          items: [
            {
              name: 'itemThree',
              link: '/',
            },
          ],
        },
      ],
    }, {
      icon: '',
      label: 'TWO',
      context: {
        title: 'Gaming Two',
        content: `A wonderful serenity has taken
        possession of my entire soul,
        like these sweet mornings of
        spring which I enjoy with my whole heart.`
      },
      children: [
        {
          name: 'TWOoptOne',
          items: [
            {
              name: 'itemOne',
              link: '/',
            },
          ],
        },
        {
          name: 'TWOoptTwo',
          items: [
            {
              name: 'itemTwo',
              link: '/',
            },
          ],
        },
        {
          name: 'TWOoptThree',
          items: [
            {
              name: 'itemThree',
              link: '/',
            },
          ],
        },
      ],
    }, {
      icon: '',
      label: 'THREE',
      context: {
        title: 'Gaming Three',
        content: `A wonderful serenity has taken
        possession of my entire soul,
        like these sweet mornings of
        spring which I enjoy with my whole heart.`
      },
      children: [
        {
          name: 'THREEoptOne',
          items: [
            {
              name: 'itemOne',
              link: '/',
            },
          ],
        },
        {
          name: 'THREEoptTwo',
          items: [
            {
              name: 'itemTwo',
              link: '/',
            },
          ],
        },
        {
          name: 'THREEoptThree',
          items: [
            {
              name: 'itemThree',
              link: '/',
            },
          ],
        },
      ],
    }, {
      icon: '',
      label: 'FOUR',
      context: {
        title: 'Gaming Four',
        content: `A wonderful serenity has taken
        possession of my entire soul,
        like these sweet mornings of
        spring which I enjoy with my whole heart.`
      },
      children: [
        {
          name: 'FOUR-optOne',
          items: [
            {
              name: 'itemOne',
              link: '/',
            },
          ],
        },
        {
          name: 'FOUR-optTwo',
          items: [
            {
              name: 'itemTwo',
              link: '/',
            },
          ],
        },
        {
          name: 'FOUR-optThree',
          items: [
            {
              name: 'itemThree',
              link: '/',
            },
          ],
        },
      ],
    },
  ],
  footerConfig: {
    actions: [
      {
        type: 'twitter',
        icon: <TwitterIcon />,
        link: 'https://twitter.com/JoyAdPear',
      },
      {
        type: 'facebook',
        icon: <FacebookIcon />,
        link: 'https://www.facebook.com/profile.php?id=100089281386990',
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
      {
        type: '微博',
        icon: <WeiboOutlined />,
        link: 'https://weibo.com/u/3898663642',
      },
      {
        type: 'b站',
        icon: <BilibiliOutlined />,
        link: '',
      },
      // {
      //   type: '微信公众号',
      //   icon: <WechatOutlined />,
      //   link: '',
      // },
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

