import { defineConfig } from 'vitepress'

const urlName = "https://civif.github.io/";
const ifImage = "https://civif.github.io/ImperialFederation-Flag.png";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Imperial Federation",
  description: "Federation of many different governments",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
        type: "image/png",
        size: "16x16"
      }
    ]
  ],
  lastUpdated: true,
  appearance: "dark",
  themeConfig: {
    siteTitle: "Imperial Federation",
    logo: "/ImperialFederation-Flag.png",
    externalLinkIcon: true,
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'Constitution', 
        link: '/constitution/index',
        activeMatch: '/constitution/'
      },
      { 
        text: 'Laws', 
        link: '/laws/index',
        activeMatch: '/laws/' 
      },
      { 
        text: 'Government', 
        link: '/government/index',
        activeMatch: '/government/'
      },
      { 
        text: 'States', 
        link: '/states/index',
        activeMatch: '/states/' 
      },
      { 
        text: 'Edit Guide', 
        link: '/misc/editingGuide' 
      },
    ],
    editLink: {
      pattern:
        "https://github.com/CivIF/civif.github.io/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    sidebar: {
      "/constitution/": [
        {
          text: "Constitution"
        }
      ],
      "/laws/": [
        {
          text: "Laws"
        }
      ],
      "/government/": [
        {
          text: "Government"
        }
      ],
      "/states/": [
        {
          text: "States",
          items: [
            {
              text: "Introduction",
              link: "/states/"
            },
            {
              text: "Join the IF as a State",
              link: "/states/join-state"
            },
            {
              text: "List of current states",
              link: "/states/current-states"
            }
          ]
        }
      ],
    },
    socialLinks: [
      {
        icon: "discord",
        link: "https://discord.gg/Zakw3KYGrH",
      },
      {
        icon: 'github',
        link: 'https://github.com/CivIF/civif.github.io'
      }
    ],
    search: {
      provider: "local",
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present The Government of the Imperial Federation'
    },
  },
  sitemap: {
    hostname: urlName,
    lastmodDateOnly: false,
    xmlns: { // trim the xml namespace
      news: false,
      video: false,
      // custom: [
      //   'xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"',
      //   'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"',
      // ],
    }
  }
})
