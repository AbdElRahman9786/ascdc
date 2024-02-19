import React from 'react'
import Image from 'next/image'
import twet from '../public/twitter logo.svg'
import micro from '../public/Vector.svg'
import linked from '../public/Group 5772.svg'
import xbox from '../public/g4146.svg'
import apple from '../public/Vector (2).svg'



function Clinets() {
  return (
    <div className=' w-full h-[336px] px-20 py-[120px] xl:w-[744px] xl:px-8 xl:py-[86px] sm:w-[360px] sm:h-[294px]'>
        <div className='flex flex-col'>
            <div className='w-[1200px] h-[80px]  text-center xl:w-[696px] xl:h-[75px] sm:w-[296px] sm:h-[75px]'>
                <div className='w-full h-[48px]  '>
                    <h1 className='font-bold text-4xl'>clients</h1>
                </div>
                <div className='w-full h-[23px]  flex items-center justify-center'>
                    <div className='w-[189px] h-full'>
                        <p className='opacity-[70%]'>Successful companies that </p>
                    </div>
                    <div  className='w-[108px] h-full'>
                        <p className='capitalize font-bold'>trust us</p>
                    </div>
                </div>
            </div>
            <div className='w-[1200px]  h-[64px ] xl:justify-end  flex items-center justify-center xl:w-[488px] xl:h-[40px] sm:w-[296px] sm:h-[136px] '>
                <div className='flex w-[70%] xl:w-[60%] sm:w-[95%]  items-center justify-between'>
                    <div>
                        <Image src={twet} alt=' twetter' className='w-[40px]  h-[40px]'/>
                    </div>
                    <div>
                    <Image src={micro} alt='micro' className='w-[40px]  h-[40px]'/>
                    </div>
                    <div>
                    <Image src={apple} alt='apple' className='w-[40px]  h-[40px]'/>
                    </div>
                    <div>
                    <Image src={xbox} alt='xbox' className='w-[40px]  h-[40px]'/>
                    </div>
                    
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Clinets
