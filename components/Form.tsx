import React from 'react'

function Form() {
  return (
    <div className='w-full h-[709px] px-20 py-[280px] flex items-center justify-center xl:w-[744px] xl:h-[603px] sm:w-[360px] sm:h-[628px]'>
        <div className='w-[880px] h-[549px] xl:w-[616px] xl:h-[539px] sm:w-[296px] sm:h-[564px]  '>
            <div className='flex flex-col  items-center gap-4 '>
                <div className='w-full h-[69px]  flex items-end'>
<p className='capitalize'>tell us how can we help you. We are here to answer your questions 24/7.</p>
                </div>
                <div className='w-[880px] h-[160px] xl:w-[616px] xl:h-[160px] sm:w-[296px] sm:h-[160px] '>
                    <input type='text' placeholder='
how can we help you?' className='w-full h-full bg-[#346BA2] bg-opacity-[10%] rounded-md ' readOnly />

                </div>
                <div className='flex w-full h-[56px] gap-4 '>
                    <div className='w-[432px] h-[56px]'>
                        <input type='text' placeholder='full name' className='w-full h-full rounded-md bg-[#346BA2] bg-opacity-[10%] placeholder:capitalize'/>
                    </div>
                    <div className='w-[432px] h-[56px]'>
                    <input type='text' placeholder='company name' className='w-full h-full rounded-md bg-[#346BA2] bg-opacity-[10%] placeholder:capitalize'/>
                    </div>
                </div>
                <div className='w-full h-[56px]'>
                    <input type='email' placeholder='email' className='w-full h-full placeholder:capitalize bg-[#346BA2] bg-opacity-[10%] rounded-md'/>
                </div>
                <div className='w-full h-[56px]'>
                    <input type='email' placeholder='phone number' className='w-full h-full placeholder:capitalize bg-[#346BA2] bg-opacity-[10%] rounded-md'/>
                </div>
                <div className='w-full h-[56px]'>
                    <button className='w-full h-full bg-black rounded-md text-white'>submit</button>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Form
