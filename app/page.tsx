import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'
import { productItem } from '../config/constant'

export default function IndexPage() {
  return (
    <section className='container grid gap-6 py-10'>
      <div className='flex w-full flex-col gap-2 text-center'>
        <h1 className='text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl'>
          Dedicated to crafting products <br className='hidden sm:inline' />
          with focus on intricate details.
        </h1>
        <p className='text-lg text-muted-foreground'>
          Choose Products item below.
        </p>
      </div>
      <div className='flex items-center justify-center gap-4 py-5'>
        {JSON.stringify(productItem)}
      </div>
    </section>
  )
}
