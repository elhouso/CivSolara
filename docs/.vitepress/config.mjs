import { defineConfig } from 'vitepress'

const urlName = "https://civif.github.io/";
const ifImage = "https://civif.github.io/ImperialFederation-Flag.png";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Imperial Federation",
  description: "Federation of many different governments",
  lastUpdated: true,
  appearance: "dark",
  themeConfig: {
    siteTitle: "Imperial Federation",
    logo: "/ImperialFederation-Flag.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CivIF/civif.github.io' }
    ]
  }
})
