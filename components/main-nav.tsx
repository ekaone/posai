'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import { NavItem } from '@/types/nav'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Icons } from './icons'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className='flex gap-4 md:gap-4'>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div className='flex items-center space-x-2'>
          <SheetTrigger>
            <Icons.menu
              className='h-5 w-5'
              onClick={prev => setIsOpen(!prev)}
            />
            <span className='sr-only'>Menu Icon</span>
          </SheetTrigger>
          <SheetContent side={'left'}>
            <SheetHeader>
              <SheetTitle className='text-xl font-bold'>Menu</SheetTitle>
            </SheetHeader>
          </SheetContent>
        </div>
      </Sheet>

      {/**
       * Optional for navigation pages
       */}
      {items?.length ? (
        <nav className='flex gap-6'>
          {items?.map(
            (item, index) =>
              item.isActive && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    'flex items-center text-sm font-medium text-muted-foreground',
                    item.disabled && 'cursor-not-allowed opacity-80'
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
