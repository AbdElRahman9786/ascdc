"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import img from '../public/bgnavbar.png';

import Button from './Button'; 
import lgo from '../public/logo.png'
import Link from 'next/link';
import { useTranslations } from 'next-intl';


function SideNavBar() {
    const [close,setclose]=useState(false);
     const t=useTranslations();
    useEffect(()=>{
        setclose(false);
    },[])
  return (
    <>
      <div className={`absolute top-0 right-0 left-0 bottom-0 w-full h-screen ${close&&'invisible' }`}>
        <Image src={img} alt='nav/bg' className='w-full h-[100vh] bg-[aqua]' />
        <div className='absolute top-0 w-full h-auto '>
            <div className=' flex items-center justify-between px-10 py-10'>
<div>
<Image src={lgo} alt='nav.lgo'/>
</div>
<div>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"onClick={()=>{setclose(!close)}}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

</div>
</div>
  
           
            <ul className="flex flex-col gap-10 text-white ">
           <li>
            <Link href="/aboutus">{t('About us')}</Link>
          </li>
          <li>
            <Link href="/aboutus">{t('Servecis')}</Link>
          </li>
          <li>
            <Link href="/aboutus">{t('Why Us')}</Link>
          </li>
          <li>
            <Link href="/aboutus">{t('Clients')}</Link>
          </li>
          <li>
            <Link href="#whyus">{t('Work')}</Link>
          </li>
        </ul>
          
          <div className=' pt-6'>
            
            <Button />
          </div>
        </div>
        
        
        
      </div>
    </>
  );
}

export default SideNavBar;
