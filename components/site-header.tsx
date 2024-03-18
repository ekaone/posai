import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Icons } from '@/components/icons'
import { MainNav } from '@/components/main-nav'
import { ThemeToggle } from '@/components/theme-toggle'

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background'>
      <div className='container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
        <MainNav items={siteConfig.mainNav} />
        <div className='flex flex-1 items-center justify-end space-x-4'>
          <nav className='flex items-center space-x-1'>
            <Link
              href={siteConfig.links.github}
              target='_blank'
              rel='noreferrer'
            >
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost'
                })}
              >
                <Icons.gitHub className='h-5 w-5' />
                <span className='sr-only'>GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target='_blank'
              rel='noreferrer'
            >
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost'
                })}
              >
                <Icons.twitter className='h-5 w-5 fill-current' />
                <span className='sr-only'>Twitter</span>
              </div>
            </Link>
            <div
              className={buttonVariants({
                size: 'icon',
                variant: 'ghost'
              })}
            >
              <Icons.cart className='h-5 w-5 fill-current' />
              <span className='sr-only'>Cart</span>
              <Badge className='relative left-[-7px] size-4 translate-y-[-10px] transform justify-center p-0 text-[10px]'>
                5
              </Badge>
            </div>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
