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
    <div className='relative flex items-center justify-center z-[-1]'>
        <Image src={img} alt='hero/img' className='w-screen h-screen  max-w-full '/>
        <div className='absolute text-center  text-white flex flex-col gap-6 items-center justify-center'>
            
<div className='w-full max-md:px-4 '>
    <h1 className={`font-bold text-5xl  max-md:text-2xl capitalize ${params.locale=='ar'&&'xlg:text-7xl'}`}>
      {t("software Consulting And Development")} </h1>
</div>
<div className=' '>
    <p className=' capitalize  text-xl '>{t("a cutting-edge software development company, where innovation meets excellence in software solutions.  ")}</p>
</div>
        </div>
     
    </div>
    
    </>
  )
}

export default Hero