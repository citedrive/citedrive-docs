/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CiteDrive Documentation',
  tagline: 'Looking for an easy-to-use, web-based, collaborative Referencing tool, with over 9000 styles plus native R Mardown and BibTeX-support? ',
  url: 'https://docs.citedrive.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/citedrive-favicon.png',
  organizationName: 'citedrive',
  projectName: 'citedrive-docs',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themeConfig: {
    navbar: {
      title: 'CiteDrive Docs',
      logo: {
        alt: 'CiteDrive Logo',
        src: 'img/logo.svg',
      },

      items: [
        {
          type: 'doc',
          docId: 'quick-start',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://citedrive.medium.com',
          label: 'Blog', 
          position: 'left',
        },
        {
          label: 'Forum',
          href: 'https://forum.citedrive.com',
          position: 'left',
        },
        {
          href: 'https://app.citedrive.com/',
          label: 'Login',
          position: 'right',
        },
        
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Quick Start',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Questions & Issues',
              href: 'https://forum.citedrive.com',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/citedrive',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/citedrive',
            },
            
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://citedrive.medium.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/citedrive',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CiteDrive LLC`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
           routeBasePath: '/',
          editUrl:
            'https://github.com/citedrive/citedrive-docs/tree/main',
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl:
        //     'https://github.com/citedrive/citedrive-docs/tree/main/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
