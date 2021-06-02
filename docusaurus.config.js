/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CiteDrive Documentation',
  tagline: 'Looking for an easy-to-use, web-based, collaborative Referencing tool, with over 9000 styles plus native R Mardown and BibTeX-support? ',
  url: 'http://docs.citedrive.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/citedrive-favicon.png',
  organizationName: 'citedrive', // Usually your GitHub org/user name.
  projectName: 'citedrive-docs', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
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
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://app.citedrive.com/',
          label: 'Login',
          position: 'left',
        },
        {
          href: 'https://app.citedrive.com/sign-up',
          label: 'Get started now',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'left',
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
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/citedrive',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/citedrive',
            },
            {
              label: 'Community',
              href: 'https://github.com/citedrive/citedrive-docs/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
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
          // Please change this to your repo.
          editUrl:
            'https://github.com/citedrive/citedrive-docs/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/citedrive/citedrive-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
