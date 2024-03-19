'use client'

import React, { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'

interface CartProps {
  items: number
}

export function Cart({ items }: CartProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <nav className='flex items-center'>
            <Icons.cart
              onClick={prev => setIsOpen(!prev)}
              className='h-5 w-5 fill-current'
            />
            <span className='sr-only'>Cart</span>
            <Badge className='relative left-[-7px] size-4 translate-y-[-10px] transform justify-center p-0 text-[10px]'>
              {items}
              <span className='sr-only'>Items</span>
            </Badge>
          </nav>
        </SheetTrigger>
        <SheetContent side={'right'}>
          <SheetHeader>
            <SheetTitle className='text-xl font-bold'>Items Ordered</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  )
}
