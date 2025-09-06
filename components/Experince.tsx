import { useTranslations } from 'next-intl'
import React from 'react'

function Experince() {
    const t=useTranslations()
  return (
    <div className='bg-white   p-5   py-10'>
        <div className='flex justify-between flex-wrap items-center w-[90%] mx-auto max-lg:justify-center '>
            <div className=' basis-1/2 max-lg:basis-full max-lg:mb-10'>
             <div className='flex flex-col gap-6 '>
                <div className=" font-bold text-5xl max-md:text-3xl">
<h1>{t("Experience World-class Agile Product Development")}</h1>
                </div>
                <div>
<p className='opacity-[70%]'>{t("experience_description")}</p>
                </div>
                <div>
                    <p className='opacity-[70%] font-bold'>{t("experience_end")}</p>
                </div>
             </div>
            </div>
            
            <div className='grid grid-cols-2 grid-rows-2 gap-8 '>
                <div className='text-center font-bold  shadow-2xl px-4 py-8 rounded-bl-2xl'>
                    <h1 className='text-5xl mb-3 max-md:text-xl'>+3</h1>
                    <p className='opacity-40'>{t("years experience")}</p>
                </div>
                <div className='text-center font-bold  shadow-2xl px-4 py-8 rounded-bl-2xl'>
                    <h1 className='text-5xl mb-3 max-md:text-xl'>100%</h1>
                    <p className='opacity-40'>{t("project delivered")}</p>
                </div>
                <div className='text-center font-bold  shadow-2xl px-4 py-8 rounded-bl-2xl'>
                    <h1 className='text-5xl mb-3 max-md:text-xl'>+1</h1>
                    <p className='opacity-40'>{t("app developed")}</p>
                </div>
                <div className='text-center font-bold   shadow-2xl px-4 py-8 rounded-bl-2xl'>
                    <h1 className='text-5xl mb-3 max-md:text-xl'>+6</h1>
                    <p className='opacity-40'>{t("website built")}</p>
                </div>
     
            </div>
        </div>
    </div>
  )
}

export default Experince