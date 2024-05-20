import React, { useEffect, useState } from 'react'
import { contactList, messagesList } from '../Data'


const ChatWindow = ({ status, userId }) => {

  const [chat, setChat] = useState({})
  const [message, setMessage] = useState({})


  useEffect(() => {
    try {
      const filter = contactList?.filter((data) => {
        return data.id == userId
      })
      const filtermessage = messagesList?.filter((data) => {
        return data.id == userId
      })
      setChat(filter[0])
      setMessage(filtermessage[0])

    } catch (error) {
      console.log(error);
    }
  }, [userId])


  return (
    <>
      <div className="w-full flex flex-col bg-white  overflow-y-auto scroll-smooth">
        {/* Contact header --img, name, icons*/}

        <div className="flex fixed fixed-top  top-0  w-3/5 bg-[#f0f2f5] ">

          <div className='w-full py-1.5 '>
            <div className='flex  full bg-[#f0f2F5] '>
              {/* profile-pic */}
              <div className='flex justify-between w-64 '>
              <div className='my-2 mx-4'>
                <img onClick={() => { status('profile'),localStorage.setItem('userId',userId) }} width='46' height='46' src={`\Images${chat.profilePic}`} className='rounded-full ' alt="dp" />
              </div>
              {/* name */}
              <div onClick={() => { status('profile'),localStorage.setItem('userId',userId) }} className='flex w-64 items-center text-center'>
                <p className='text-black'>{chat.name}</p>
              </div>
              </div>
              

              {/* icons on RIghT side */}
              <div className=' flex justify-end  w-full mr-2'>
                {/* video camera icon */}
                <div className='flex justify-between text-black  p-4' >
                  <img width={'24px'} height={'24px'} src="\Images\video-call.png" alt="" />
                  <img className='ml-2' width={'12px'} height={'10px'} src="\Images\drop-down.png" alt="" />
                </div>

                <div className="flex justify-between p-4">
                  <div>
                    <img className='ml-2' width={'22px'} height={'22px'} src="\Images\search-lence.png" alt="img" />
                  </div>
                  <div>
                    <img className='ml-6' width={'22px'} height={'22px'} src="\Images\menu-vertical.png" alt="img" />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>



        {/* -- Center part (Chats showing part inside this section ) */}
        <div className="flex  justify-between md:w-full pl-12 space-y-4 space-x-4 bg-white mt-32 ">

          <div className="flex flex-col justify-start ml-2 px-2 py-1.5 bg-stone-200 rounded-lg  w-64 h-full ">
            <p className="text-base font-light color-[#667781] ">{message?.message}</p>
          </div>

          <div className="flex flex-col justify-end mr-22 px-2 py-1.5 bg-green-100 rounded-lg w-64 self-end w-full h-full my-12">
            <p className="text-base  font-light color-[#667781] cursor-default">{message?.replay}</p>
          </div>

        </div>


      </div>


      {/* ---Bottom part Message Typing */}
      <div className="flex  fixed fixed-bottom  bottom-0 py-2  w-3/5 bg-[#f0f2f5] ">

        <div className='flex justify-between items-center text-center w-full py-1.5 '>
            <img className='ml-6' width={'24px'} height={'24px'} src="\Images\smile.png" alt="" />
            <img className='ml-6' width={'24px'} height={'24px'} src="\Images\iplus-24.png" alt="" />
          <div className='flex w-full pl-2 ml-4 mr-8 py-1.5 rounded-lg bg-white '>
            <form className="message-input-form" onSubmit={''}>
              <input type="text"
                className="message-input w-full "
                placeholder="Type a message" style={{ border: 'none' }}
                 onChange={''}
              />
            </form>
          </div>
          <img className='mr-12' width={'24px'} height={'24px'} src="\Images\arrow-right-50-1.png" alt="" />



        </div>

      </div>


      {/* ---------------------------------------------------------------- */}



    </>
  )
}


export default ChatWindow
