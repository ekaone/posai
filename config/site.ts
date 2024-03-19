export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'NextJS Template',
  description: 'NextJS Template',
  mainNav: [
    {
      title: 'Home',
      href: '/',
      isView: false
    },
    {
      title: 'Contact',
      href: '/contact',
      isView: false
    }
  ],
  links: {
    twitter: 'https://twitter.com/',
    github: 'https://github.com/',
    projects: '/project'
  }
}
