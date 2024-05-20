import React, { useState } from 'react'
import { contactList } from '../Data'


const Chat = ({status,getId}) => {


  return (
    <>

    {contactList.map((cont, key) => (
       <>
       <div className=" flex  ml-12 border-b border-slate-100 mt-2 "></div>
           
       <div onClick={() => { status('chat'),getId(cont.id) }}
         className="flex justify-between py-2 w-full  space-x-12 " >
         <div className="flex space-x-2 items-center">
           <img width="46" height="46"
             className="rounded-full"
             src={`Images/${cont.profilePic}`} alt="Profile"

           />
           <div className="ml-4">
             <p className="text-black-700">{cont.name}</p>
             <p className="text-[#667781] text-sm">{cont.lastText}</p>
           </div>
         </div>
         <div className="mr-4">{cont.lastTextTime}</div>
       </div>
       <div className="flex ml-12 border-b border-slate-100 "></div>
      </>
    ))}
      
    </>
  )
}

export default Chat
