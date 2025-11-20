import { NAV_LINKS } from '@/constants'
import { link } from 'fs'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Button from './Button'

const Navbar = () => {
  return (
 <nav className='flex items-center justify-between max-container p-10 padding-container relative z-30 py-5'> 
<Link href={'/'}>
<Image  width={74} height={29} src={'./hilink-logo.svg'} alt='logo' />
    </Link>

<ul className='hidden h-full gap-12 lg:flex'>
{NAV_LINKS.map((link) => (
<Link href={link.href} key={link.key}
className='regular-16 text-black-30 cursor-pointer transition-all hover:font-bold'>
    {link.label}
</Link>
))}
</ul>

<div className='hidden h-full lg:flex'>
<Button
type='button'
title='Login'
icon='/user.svg'
variant='blue' />
</div>
 

<Image
 src='menu.svg'
 alt='menu'
 width={32}
 height={32}
 className='inline-block cursor-pointer lg:hidden'
 />

 </nav>
  )
}

export default Navbar
