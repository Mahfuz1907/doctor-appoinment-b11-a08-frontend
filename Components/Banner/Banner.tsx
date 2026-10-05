import React from 'react';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='mx-12.5 py-16 px-40 rounded-3xl bg-white flex flex-col justify-between items-center gap-5'>
            <h1 className='text-[#0f0f0f] text-5xl font-extrabold text-center'>Dependable Care, Backed by Trusted Professionals.</h1>
            <p className='text-center text-base font-medium text-[#0f0f0f]'>
                Our platform connects you with verified, experienced doctors 
                across various specialties — all at your convenience. 
                Whether it&amp;s a routine checkup or urgent consultation, 
                book appointments in minutes and 
                receive quality care you can trust.
            </p>
            <div className='flex flex-row justify-center items-center gap-5'>
                <Image src={'/assets/banner-img-1.png'} alt='banner' height={500} width={500} />
                <Image src={'/assets/banner-img-1.png'} alt='banner' height={500} width={500} />
            </div>
        </div>
    );
};

export default Banner;