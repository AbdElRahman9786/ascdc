import React from 'react'
import Image from 'next/image'
import apppic from "../public/app pic.svg"
import applopgo from '../public/Group 5772.svg'

function LastWork() {
  return (
    <div className=' bg-black  text-white p-5  mt-10'>
        <div className='flex items-center justify-between w-[90%] mx-auto flex-wrap'>
            <div className='basis-1/2 max-lg:basis-full max-lg:order-2 max-lg:flex  max-md:flex max-md:justify-center max-lg:justify-end'>
                <Image src={apppic} alt='apppic'/>
            </div>
            <div className='flex flex-col   justify-between basis-1/2 max-lg:basis-full max-lg:order-1'>
                <div className=' text-white capitalize font-bold text-5xl mb-10'>
                    <h1>Our latest work</h1>
                    </div>
                <div className='flex  items-center justify-between'>
                    <div className='  font-bold text-5xl mb-5'>
                        <h1>RASID</h1>
                    </div>
                    <div className=' flex justify-end'>
                        <div className=''>
<Image src={applopgo} alt='applogo'/>
</div>
                    </div>
                </div>
                <div className=' '>
                    <p className='opacity-[70%] text-white text-xl'>All-in-one app, revolutionizing the way teams operate, providing a centralized platform for communication, task management, and data collection. With intuitive interfaces and cloud-based accessibility. these tools empower workers and streamline operations, ultimately leading to a more productive and efficient work environment.
</p>
                    </div>
                <div className='mt-5'>
                    <button className='  text-white underline'>learn more</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default LastWork