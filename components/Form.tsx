import React from 'react'

function Form() {
  return (
    <div className='w-full  p-20 max-md:p-4 '>
        
            <div className='flex flex-col  items-center gap-4 w-[60%] mx-auto max-lg:w-full '>
                
<p className='capitalize text-start w-full'>tell us how can we help you. We are here to answer your questions 24/7.</p>
               
                
                    <input type='text' placeholder='how can we help you?' className='w-full pb-44 pt-2 px-4 bg-[#346BA2] bg-opacity-[10%] rounded-md ' readOnly />

               
                <div className='flex items-center w-full gap-4 '>
                   
                        <input type='text' placeholder='full name' className='w-full rounded-md bg-[#346BA2] bg-opacity-[10%] pb-6 pt-3 px-2 placeholder:capitalize'/>
                    
                    
                    <input type='text' placeholder='company name' className='w-full rounded-md bg-[#346BA2] bg-opacity-[10%] pb-6 pt-3 px-2 placeholder:capitalize'/>
                    
                </div>
                
                    <input type='email' placeholder='email' className='w-full rounded-md bg-[#346BA2] bg-opacity-[10%] pb-6 pt-3 px-2 placeholder:capitalize'/>
               
                
                    <input type='email' placeholder='phone number'className='w-full rounded-md bg-[#346BA2] bg-opacity-[10%] pb-6 pt-3 px-2 placeholder:capitalize'/>
               
                
                    <button className='w-full h-full bg-black rounded-md text-white py-3'>submit</button>

                

            </div>

       
      
    </div>
  )
}

export default Form
