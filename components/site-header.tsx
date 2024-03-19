import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Icons } from '@/components/icons'
import { MainNav } from '@/components/main-nav'
import { ThemeToggle } from '@/components/theme-toggle'
import { Cart } from '@/components/cart'

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background'>
      <div className='container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
        <MainNav items={siteConfig.mainNav} />
        <div className='flex flex-1 items-center justify-end space-x-2'>
          <Cart items={8} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
