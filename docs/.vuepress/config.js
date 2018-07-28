module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Hello Concatenate!',
      description: 'A Vuepress Demo',
    }
  },
  head: [
    ['link', { rel: 'icon', href: `./hero.jpg`}]
  ],
  themeConfig: {
    nav: [
      { 
        text: 'Home', 
        link: '/' 
      },
      { 
        text: 'Dev Humor', 
        link: '/humor/' 
      },
      { 
        text: 'languages',
        items: [
          { 
            text: 'Chinese', 
            link: '/language/chinese/' 
          }
        ]
      },
      { 
        text: 'slides', 
        link: 'https://slides.com/lauragift21/vuepress' 
      },
    ],
    sidebar: {
      '/guide/': [
        '',
        'test'
      ]
    },
    lastUpdated: 'Last Updated',
    search: true,
    repo: 'lauragift21/Concatenate-vuepress',
    editLinks: true,
    editLinkText: 'Help us improve this page!'
  }
}