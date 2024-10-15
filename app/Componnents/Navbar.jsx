"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const Navbar = () => {
    const pathName =usePathname()
    const links = [
        {
            title:"Home",
            path:'/'
        },
        {
            title:"About",
            path:'/about'
        },
        {
            title:"Blog",
            path:'/blog'
        },
        {
            title:"Profile",
            path:'/profile'
        }
    ]
  return (
    <>
    <nav className='flex justify-between items-center bg-[black] py-2 px-4'>
        <div>
            <h1 className='text-white'>Mary</h1>
        </div>
        <div>
            <ul className='space-x-4 text-[white]'>
                {
                    links?.map((link)=><Link className={`${pathName === link.path && "border-b-2 border-[white] font-bold" }`} key={link.path} href={link.path}>{link.title}</Link>)
                }
            </ul>
        </div>
    </nav>
    </>
  )
}
