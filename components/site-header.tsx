'use client'

import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from '@/components/ui/navigation-menu'
import { Input } from '@/components/ui/input'
import { Icons } from '@/components/icons'
import { MainNav } from '@/components/main-nav'
import { ThemeToggle } from '@/components/theme-toggle'
import { Cart } from '@/components/cart'

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-40 w-full border-b-[2px] bg-background'>
      <NavigationMenu className='mx-auto'>
        <NavigationMenuList className='container flex h-16 w-screen items-center justify-between px-4'>
          <NavigationMenuItem className='flex justify-start'>
            <MainNav items={siteConfig.mainNav} />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Input type='text' placeholder='Search' />
          </NavigationMenuItem>
          <NavigationMenuItem className='flex space-x-2'>
            <Cart items={8} />
            <ThemeToggle isActive={false} />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
