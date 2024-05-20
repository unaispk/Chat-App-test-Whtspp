import React from 'react'

const DownloadWhatsappWindow = () => {
  return (
    <>
    <div className="w-full ml-32 bg-[#f0f2f5]">

{/* bg-[#f0f2f5] */}

<div className="flex flex-col justify-center items-center text-center  mt-24 fixed  ">

 <div>
     <img width="320"  src="/Images/wa669aeJeom.png" alt="" />
 </div>

  <div className='mt-6'>
     <h1 className='font-thin text-[#41525D] text-3xl'>Download WhatsApp for Windows</h1>
  </div>

  <div className='w-full text-center mt-4 text-sm leading-5'> 
     <p className='text-[#667781]'>Make calls, share your screen and get a faster experience when you download the </p>
     <span className='text-[#667781] text-center'>Windows app.</span>
  </div>

  <div className='mt-6 '>
     <button className='bg-[#008069] rounded-3xl px-6 py-2 text-white text-sm font-semibold'>Get from Microsoft Store</button>
  </div>

  <div className='flex  mt-14'>

     <img width='12'  src="/Images/icons8-lock-30.png" alt="lock-img" />
     <p className='text-[#8696a0] text-sm leading-5'><span></span>Your personal messages are end-to-end encrypted</p>
  
  </div>

</div>
</div>
      
    </>
  )
}

export default DownloadWhatsappWindow
