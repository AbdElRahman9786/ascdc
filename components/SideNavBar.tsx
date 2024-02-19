"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import img from '../public/bgnavbar.png';
import Links from './Links'; // Import your Links component
import Button from './Buttom'; // Import your Button component
import lgo from '../public/logo.png'


function SideNavBar() {
    const [close,setclose]=useState(false);
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
        </div>
        <div className='absolute top-28 w-full  '>
          <div className='w-full h-full flex items-center justify-center '>
           
            <Links />
          </div>
          <div className=' pt-6'>
            
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNavBar;
