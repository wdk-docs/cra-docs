/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

const siteConfig = {
  title: 'Create React App',
  tagline: '通过运行一个命令设置一个现代的web应用程序。',
  url: 'https://create-react-app.dev',
  baseUrl: '/cra-docs/',
  projectName: 'cra-docs',
  organizationName: 'wdk-docs',
  favicon: 'img/favicon/favicon.ico',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.json'),
          editUrl:
            'https://github.com/wdk-docs/cra-docs/edit/main/docusaurus/website',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  themeConfig: {
    image: 'img/logo-og.png',
    // announcementBar: {
    //   id: 'support_ukraine',
    //   content: '',
    //   backgroundColor: '#20232a',
    //   textColor: '#fff',
    //   isCloseable: false,
    // },
    algolia: {
      appId: 'AUJYIQ70HN',
      apiKey: '25243dbf9049cf036e87f64b361bd2b9',
      indexName: 'create-react-app',
    },
    navbar: {
      title: 'Create React App',
      logo: {
        alt: 'Create React App Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: 'docs/getting-started', label: '文档', position: 'right' },
        {
          href: 'https://reactjs.org/community/support.html',
          label: '帮助',
          position: 'right',
        },
        {
          href: 'https://www.github.com/facebook/create-react-app',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '开始',
              to: 'docs/getting-started',
            },
            {
              label: '学习 React',
              href: 'https://reactjs.org/',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/create-react-app',
            },
            {
              label: 'GitHub 讨论',
              href: 'https://github.com/facebook/create-react-app/discussions',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/reactjs',
            },
            {
              label: '贡献者约定',
              href: 'https://www.contributor-covenant.org/version/1/4/code-of-conduct',
            },
          ],
        },
        {
          title: '社交',
          items: [
            {
              label: 'GitHub',
              href: 'https://www.github.com/facebook/create-react-app',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/oss_logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
    },
  },
};

module.exports = siteConfig;
