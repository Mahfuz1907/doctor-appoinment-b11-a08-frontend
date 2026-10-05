'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname()

    const handlePath = (path:string):boolean => {
        const isActive = (path === pathName)
        return isActive
    }
    return (
        <nav className='bg-[#efefef] px-40 py-5 flex flex-row justify-between items-center sticky top-0 z-50'>
            <Link onClick={() => handlePath('/')} href={'/'} className='flex flex-row justify-between items-center gap-2 cursor-pointer'>
                <Image src={'/assets/logo.png'} alt='logo' width={30} height={30} />
                <h1 className='text-[#0f0f0f] text-[32px] font-extrabold font-pjs'>Phudu</h1>
            </Link>
            <ul className='flex flex-row justify-between items-center gap-12 text-lg font-medium text-[#0f0f0fb2] font-pjs'>
                <Link onClick={() => handlePath('/')} href={'/'} 
                className={`${handlePath('/') ? 'text-blue-600' : ''} hover:text-black hover:font-bold`}>Home</Link>
                <Link onClick={() => handlePath('/bookings')} href={'/bookings'} 
                className={`${handlePath('/bookings') ? 'text-blue-600' : ''} hover:text-black hover:font-bold`}>My Bookings</Link>
                <a href="#blogs" className='hover:text-black hover:font-bold cursor-pointer'>Blogs</a>
                <a href="#footer" className='hover:text-black hover:font-bold cursor-pointer'>Contact Us</a>
            </ul>
            <button className='px-7.5 py-3.75 bg-[#176ae5] hover:bg-white hover:border hover:border-[#176ae5] rounded-[99px] text-white hover:text-[#176ae5] font-bold text-xl cursor-pointer'>Emergency</button>
        </nav>
    );
};

export default Navbar;