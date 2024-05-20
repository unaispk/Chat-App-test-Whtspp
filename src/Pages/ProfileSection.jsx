import React,{useEffect, useState} from 'react'
import { contactList } from '../Data';
 
const ProfileSection = ({status}) => {
const[profile,setProfile]=useState({})
const userId = localStorage.getItem('userId')
  useEffect(() => {
 
    try {
      const filter = contactList?.filter((data) => {
        return data.id == userId
      })
      setProfile(filter[0])
    } catch (error) {
      console.log(error);
    }
  }, [userId])

  return (
    <>

      {/* Close icon, Contact info */}
      <div onClick={()=>{status('chat')}} className="flex justify-between fixed fixed-top top-0  w-3/5 bg-white p-4 cursor-default">
        <div className="flex items-center">
          <img  onClick={()=>{status('profile')}}
            className="w-4 h-4  mr-2 cursor-pointer"
            src="\Images\icon-close-30.png" alt="Close icon"
          />
          <p className="text-lg font-light text-[#11b21]">Contact info</p>
        </div>
      </div>

    
        <>
         {/*-- Profile pic*/}
      <div className="flex justify-center items-center text-center flex-col w-full h-96 bg-white mt-8">
        <div className='flex justify-center items-center flex-col w-full h-full py-1.5'>
          <img className='rounded-full w-48 h-48' src={`\Images${profile.profilePic}`} alt="" />
          <div className="mt-4">
            <p className='text-xl font-semibold'>{profile.name}</p>
            <p className='text-gray-600'>+91 30749827182</p>
          </div>
        </div>
      </div>
        </>
    
     


      {/* -- About section */}
      <div className="flex flex-col justify-start w-full h-20 bg-white mt-2.5">
        <div className="flex flex-col justify-center items-start ml-7 w-full h-full py-1.5">
          <p className="text-base font-light color-[#667781] cursor-default">About</p>
          <p className="pt-2  text-lg color-[#111b21]">Busy</p>
        </div>
      </div>


      {/* Media, Links and docs section */}
      <div className="flex flex-col justify-start w-full h-16 bg-white mt-2.5">
        <div className="flex flex-col justify-center items-start ml-7 w-full h-full py-1.5 ">
          <p className="text-base font-light color-[#667781] cursor-pointer">Media, Links and docs</p>
        </div>
      </div>



      {/* Starred, Mute, Disappearing, Encription */}

      <div className='flex flex-col space-y-7 justify-start w-full h-72 bg-white pt-4 mt-2.5 '>

        <div className='flex justify-between items-start  w-full  py-1.5 '>
          <div className='flex ml-10 justify-between space-x-6 cursor-pointer'>
            <img width={'18px'} height={'18px'}
              src="/Images/icons8-star-30.png" alt="" />
            <h1 className='color-[#111b21]'>Starred messages</h1>
          </div>
          <img className='mr-8' width={'18px'} height={'8px'}  src="/Images/arrow-forward.png" alt="" />
        </div>

        <div className='flex justify-between items-start  w-full py-1.5 '>
          <div className='flex ml-10 justify-between space-x-6 cursor-pointer'>
            <img width={'18px'} height={'18px'} src="/Images/ibell-64.png" alt="" />
            <h1 className='color-[#111b21]'>Mute notifications</h1>
          </div>
          <img className='mr-8' src="/Images/toggle-off.png" alt="" />
        </div>

        <div className='flex justify-between items-start  w-full py-1.5 '>
          <div className='flex ml-10 justify-between space-x-6 cursor-pointer'>
            <img width={'18px'} height={'8px'}  src="/Images/time-machine-64.png" alt="" />            
            <div>
              <h1 className='color-[#111b21]'>Disappearing messages</h1>
              <p className='leading-3 text-sm'>Off</p>
            </div>
          </div>
          <img className='mr-8' width={'18px'} height={'8px'}  src="/Images/arrow-forward.png" alt="" />
        </div>

        <div className='flex justify-between items-start  w-full py-1.5 '>
          <div className='flex ml-10 justify-between space-x-6 cursor-pointer'>
            <img width={'18px'} height={'18px'}  src="/Images/lock-50.png" alt="" />
            <div>
              <h1 className='color-[#111b21]'>Encryption</h1>
              <p className='leading-3 text-sm'>Messages are end-to-end encrypted. Click to verify.</p>
            </div>
          </div>
        </div>
      </div>


     {/* Block, report, Delet chat */}

      <div className="flex grow ml-12 border-b border-slate-100  "></div>

      <div className='flex flex-col space-y-4 justify-start w-full h-44 bg-white pt-8 mb-8'>

      <div className='flex  items-start  w-full py-1 ml-10 space-x-6 cursor-pointer'>
            <img width={'18px'} height={'18px'} src="/Images/stop.png" alt="" />
            <h1 className='text-red-500 font-medium'>  Block John Doe</h1>
        </div>

        <div className='flex  items-start  w-full py-1 ml-10 space-x-6 cursor-pointer'>
            <img width={'18px'} height={'18px'} src="/Images/thumbs-down.png" alt="" />
            <h1 className='text-red-500 font-medium'>Report John Doe</h1>
        </div>

        <div className="flex grow ml-12 border-b border-slate-100  "></div>


        <div className='flex items-start  w-full py-1 ml-10 space-x-6 cursor-pointer'>
            <img width={'18px'} height={'18px'} src="/Images/trash-30.png" alt="" />
            <h1 className='text-red-500 font-medium'>Delete chat</h1>
        </div>
      </div>
    </>
  )
}

export default ProfileSection
