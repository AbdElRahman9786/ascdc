"use client"
import { useTranslations } from 'next-intl'
import img from '../public/bg.png'
import Image from 'next/image'
import { useParams } from 'next/navigation';


const Hero = () => {
const t=useTranslations();
const params = useParams();
console.log(params.locale);


   
  return (
    <>
    <div className='relative flex items-center justify-center'>
        <Image src={img} alt='hero/img' className='w-screen max-h-[1024px] bg-center '/>
        <div className='absolute  xl:top-60 xsm:top-24 sm:top-20 max-w-[1120px]  h-[162px] text-white flex flex-col gap-6 sm:gap-3 xsm:gap-2'>
            
<div className='w-full max-h-[72px] '>
    <h1 className={`font-bold text-5xl xl:text-5xl xl:text-center sm:text-lg sm:text-center xsm:text-lg capitalize ${params.locale=='ar'&&'xlg:text-7xl'}`}>
      {t("software Consulting And Development")} </h1>
</div>
<div className='w-[863px] h-16 sm:w-[300px]'>
    <p className=' capitalize opacity-[70%] font-sans xsm:text-sm text-center text-xl sm:text-sm'>{t("a cutting-edge software development company, where innovation meets excellence in software solutions.  ")}</p>
</div>
        </div>
     
    </div>
    </>
  )
}

export default Hero