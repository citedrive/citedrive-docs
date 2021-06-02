export default {
  "title": "CiteDrive Documentation",
  "tagline": "Looking for an easy-to-use, web-based, collaborative Referencing tool, with over 9000 styles plus native R Mardown and BibTeX-support? ",
  "url": "http://docs.citedrive.com",
  "baseUrl": "/",
  "onBrokenLinks": "warn",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/citedrive-favicon.png",
  "organizationName": "citedrive",
  "projectName": "citedrive-docs",
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en",
      "fr"
    ],
    "localeConfigs": {}
  },
  "themeConfig": {
    "navbar": {
      "title": "CiteDrive Docs",
      "logo": {
        "alt": "CiteDrive Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "Docs",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://app.citedrive.com/",
          "label": "Login",
          "position": "left"
        },
        {
          "href": "https://app.citedrive.com/sign-up",
          "label": "Get started now",
          "position": "right"
        },
        {
          "type": "localeDropdown",
          "position": "left",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Getting Started",
              "to": "docs/"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Facebook",
              "href": "https://www.facebook.com/citedrive"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/citedrive"
            },
            {
              "label": "Community",
              "href": "https://github.com/citedrive/citedrive-docs/issues"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/citedrive"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 CiteDrive LLC"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/garethii/Documents/GitHub/citedrive-docs/sidebars.js",
          "editUrl": "https://github.com/citedrive/citedrive-docs/tree/main"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/citedrive/citedrive-docs/tree/main/"
        },
        "theme": {
          "customCss": "/Users/garethii/Documents/GitHub/citedrive-docs/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};