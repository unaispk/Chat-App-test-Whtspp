
import React, { useState } from 'react'
import Chat from '../Components/Chat'
import DownloadWhatsappWindow from './DownloadWhatsappWindow'
import ChatWindow from './ChatWindow'
import ProfileSection from './ProfileSection'

const Home = () => {

  const [profile, setProfile] = useState(false);
  const [chat, setChat] = useState(false);
  const [chatId, setChatId] = useState('');
  const [whatsappImg, setwhatsappImg] = useState(true);


  const changeStatus =(status)=> {
    if (status == 'chat') {
      setChat(true)
      setProfile(false)
      setwhatsappImg(false)
    }
    if (status == 'profile') {
      setChat(false)
      setProfile(true)
      setwhatsappImg(false)
    }
    if (status == 'image') {
      setChat(false)
      setProfile(false)
      setwhatsappImg(true)
    }

   
  }

  const getId=(id)=>{
    setChatId(id)
  }

  return (
    <>
    <div className="flex h-screen">
  {/* Left side  */}
  <div className="w-full md:w-2/5 flex flex-col bg-white  overflow-y-auto custom-scrollbar ">

    {/* Left Side header (Chats, icons) */}
    <div className="flex flex-col justify-between h-36 fixed z-10 bg-white w-full md:w-2/5  px-2">
      <div className="flex items-center w-full mt-2 px-2">
        <div className="flex-1 cursor-default">
          <h1 className="font-bold text-2xl">Chats</h1>
        </div>
        <div className="flex items-center space-x-6">
          <img
            className="w-6 h-6 cursor-pointer"
            src="https://img.icons8.com/fluency-systems-regular/48/add-to-chat.png"
            alt="add-to-chat"
          />
          <img
            className="w-6 h-6 cursor-pointer"
            src="https://img.icons8.com/windows/32/menu-2.png"
            alt="menu-2"
          />
        </div>
      </div>

      {/* Search bar */}
      <div className="w-full mb-8 p-2">
        <div className="flex items-center bg-[#f0f2f5] py-1.5 rounded-lg">
          <svg className="ml-2"
            xmlns="http://www.w3.org/2000/svg"
            width="22" height="22" viewBox="0 0 24 24"
          >
            <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
          </svg>
          <input type="text" placeholder="Search"
            className="ml-4 bg-transparent outline-none text-gray-700 placeholder-gray-500 w-full"
          />
        </div>
      </div>

    </div>
    {/* Chat list (Scrollable) */}
    <div className="contacts flex flex-col space-y-0 bg-white mt-32 px-4 cursor-pointer ">
      
      <Chat  status={changeStatus} getId={getId}/>
      
    </div>
  </div>

  {/* ------------------------------------------------------------------------------ */}
  
  {/* Right side (scrollable) */}
  <div className="flex-1  overflow-y-auto overflow-x-hidden h-full  custom-scrollbar">

  { 
  whatsappImg == true ? 
  <DownloadWhatsappWindow /> :
  profile == true ?
   <ProfileSection status={changeStatus}/> : 
   <ChatWindow status={changeStatus} userId={chatId}/>

  }

</div>
</div>


      
    </>
  )
}

export default Home
// 

//  whatsappImg == true ? 
//  <DownloadWhatsappWindow /> :
//  profile == true ?
//   <ProfileSection /> :
   
//   <ChatWindow />
// 


   
      // whatsappImg == 'true' ? <DownloadWhatsappWindow /> : <ChatWindow /> 

     

        /* <ChatWindow /> */

    //  <div className='overflow-x-hidden'>
     /* <ProfileSection /> */

    //  </div>


//   </div>
// </div>


      
//     </>
//   )
// }

// export default Home
