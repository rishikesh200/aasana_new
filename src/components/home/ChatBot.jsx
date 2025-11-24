import React from 'react'
import { useChatBot } from '../../contexts/ChatBotContext'
import bot from '../../assets/images/chatBot.webp'

const ChatBot = () => {
  const { chatBot, toggleChatBot } = useChatBot();

  return (
   <div className=''> 
        <div 
          onClick={toggleChatBot} 
          className='fixed z-50 flex justify-center items-center h-20 w-20 border-2 border-[#ec7979] bottom-10 right-10 rounded-full overflow-hidden cursor-pointer'
        >
            <img src={bot} className='h-full w-full rounded-full object-contain' alt='bot' />
        </div>

         {chatBot && (
           <div className='fixed bg-[white] chatBotShadow h-120 w-75 sm:w-80 bottom-35 right-3 sm:right-10 rounded-xl z-50'>
            {/* ChatBot content will go here */}
           </div>
         )}
    </div>   
  )
}

export default ChatBot