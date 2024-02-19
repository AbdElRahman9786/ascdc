import React from 'react'
import Image from 'next/image'
import apppic from "../public/app pic.svg"
import applopgo from '../public/Group 5772.svg'

function LastWork() {
  return (
    <div className='w-full h-[512px] bg-black px-14 pt-8 text-white xl:w-[820px] xl:h-[606px] xl:px-12 xl:py-10'>
        <div className='flex items-center justify-center xl:w-[653px] xl:h-[579px] xl:flex-col-reverse xl:items-end sm:flex-col-reverse sm:items-baseline'>
            <div className='xl:w-[339px] xl:h-[330px] xl:bg-black sm:w-[279px] sm:h-[260px]'>
                <Image src={apppic} alt='apppic'/>
            </div>
            <div className='flex flex-col w-[713px] h-[446px]  justify-between xl:w-[646px] xl:h-[195px] sm:w-[296px] sm:h-[381px]'>
                <div className='w-[100%] h-[56px] text-white capitalize font-bold text-3xl'>
                    <h1>Our latest work</h1>
                    </div>
                <div className='flex w-[100%]  h-[57px] items-center justify-between'>
                    <div className='w-[348.5px]  font-bold text-4xl'>
                        <h1>RASID</h1>
                    </div>
                    <div className='w-[348.5px] flex justify-end'>
                        <div className='w-[66px] h-[25px]'>
<Image src={applopgo} alt='applogo'/>
</div>
                    </div>
                </div>
                <div className='w-[100%] h-[231px]  '>
                    <p className='opacity-[70%] text-white'>All-in-one app, revolutionizing the way teams operate, providing a centralized platform for communication, task management, and data collection. With intuitive interfaces and cloud-based accessibility. these tools empower workers and streamline operations, ultimately leading to a more productive and efficient work environment.
</p>
                    </div>
                <div className='w-[90px] h-[22px]  text-center'>
                    <button className=' text-center text-white underline'>learn more</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default LastWork