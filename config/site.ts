export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'NextJS Template',
  description: 'NextJS Template',
  mainNav: [
    {
      title: 'Home',
      href: '/',
      isActive: false
    },
    {
      title: 'Contact',
      href: '/contact',
      isActive: false
    }
  ],
  links: {
    twitter: 'https://twitter.com/',
    github: 'https://github.com/',
    projects: '/project'
  }
}
