import { useTranslations } from 'next-intl'
import React, { use } from 'react'

function Form() {
  const t=useTranslations()
  return (
    <div className='w-full  p-20 max-md:p-4 '>
        
            <div className='flex flex-col  items-center gap-4 w-[60%] mx-auto max-lg:w-full '>
                
<p className='capitalize text-start w-full'>{t("from_des")}</p>


                    <input type='text' placeholder={t("how can we help you?")} className='w-full pb-44 pt-2 px-4 bg-[#346BA2] bg-opacity-[10%] rounded-md ' readOnly />

               
                <div className='flex items-center w-full gap-4 '>
                   
                        <input type='text' placeholder={t("full name")} className='w-full rounded-md bg-[#346BA2] bg-opacity-[10%] pb-6 pt-3 px-2 placeholder:capitalize'/>
                    
                    
                    <input type='text' placeholder={t("company name")} className='w-full rounded-md bg-[#346BA2] bg-opacity-[10%] pb-6 pt-3 px-2 placeholder:capitalize'/>
                    
                </div>

                    <input type='email' placeholder={t("email")} className='w-full rounded-md bg-[#346BA2] bg-opacity-[10%] pb-6 pt-3 px-2 placeholder:capitalize'/>

                    <input type='email' placeholder={t("phone number")} className='w-full rounded-md bg-[#346BA2] bg-opacity-[10%] pb-6 pt-3 px-2 placeholder:capitalize'/>

                    <button className='w-full h-full bg-black rounded-md text-white py-3'>{t("submit")}</button>

                

            </div>

       
      
    </div>
  )
}

export default Form
