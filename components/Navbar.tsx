import { NAV_LINKS } from '@/constants'
import { link } from 'fs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
 <nav className='flex justify-between border-2 p-5 border-red-500  max-container padding-container relative z-30 py-5'> 
<Link href={'/'}>
<Image  width={74} height={29} src={'./hilink-logo.svg'} alt='logo' />
    </Link>

<ul className='hidden h-full gap-12 lg:flex'>
{NAV_LINKS.map((link) => (
<Link href={link.href} key={link.key}
className='regular-16 text-black-50 cursor-pointer pb-1.5 transition-all hover:font-bold'>
    {link.label}
</Link>
))}
</ul>

 </nav>
  )
}

export default Navbar
