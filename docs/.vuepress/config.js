module.exports = {
  dest: 'vuepress',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Concatenate',
      description: 'A VuePress demo',
    }
  },
  head: [
    ['link', { rel: 'icon', href: './logo.jpg'}]
  ],
  themeConfig: {
    nav: [
      { 
        text: 'Home', 
        link: '/' 
      },
      { 
        text: 'Docs', 
        link: '/docs/' 
      },
      { 
        text: 'languages',
        items: [
          { 
            text: 'Chinese', 
            link: '/language/chinese/' 
          },
          { 
            text: 'Spanish', 
            link: '/language/spanish/' 
          },
        ]
      },
      { 
        text: 'demo', 
        link: 'https://slides.com/lauragift21/vuepress' 
      },
    ],
    sidebar: [
      {
        title: 'Docs',
        collapsable: false,
        children: [
          '/docs/', 
        ]
      }
    ],
    lastUpdated: 'Last Updated',
    search: true,
    repo: 'lauragift21/Concatenate-vuepress',
    editLinks: true,
    editLinkText: 'Help us improve this page!'
  }
}