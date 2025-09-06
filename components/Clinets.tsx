import React from 'react'
import Image from 'next/image'
import twet from '../public/twitter logo.svg'
import micro from '../public/Vector.svg'
import linked from '../public/Group 5772.svg'
import xbox from '../public/g4146.svg'
import apple from '../public/Vector (2).svg'
import { useTranslations } from 'next-intl'



function Clinets() {
    const t = useTranslations()
  return (
    <div className=' w-full  p-20 '>
        <div className='flex flex-col'>
            <div className='  text-center '>
                <div className='w-full   '>
                    <h1 className='font-bold text-5xl mb-3 max-md:text-3xl'>{t("clients")}</h1>
                </div>
                <div className='w-full   flex items-center justify-center mb-7'>
                    <div className=''>
                        <p className='opacity-[70%] text-xs'>{t("Successful companies that ")}</p>
                    </div>
                    <div  className='ml-3'>
                        <p className='capitalize font-bold'>{t("trust us")}</p>
                    </div>
                </div>
            </div>
            
                <div className='flex  items-center gap-5 justify-between w-[60%] mx-auto flex-wrap'>
                    <div>
                        <Image src={twet} alt=' twetter' className=''/>
                    </div>
                    <div>
                    <Image src={micro} alt='micro' className=''/>
                    </div>
                    <div>
                    <Image src={apple} alt='apple' className=''/>
                    </div>
                    <div>
                    <Image src={xbox} alt='xbox' className=''/>
                    </div>
                    
                </div>
            

        </div>
      
    </div>
  )
}

export default Clinets
