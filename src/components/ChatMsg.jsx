import React from 'react'

const ChatMsg = ({name , message}) => {
  return (
    <div className='p-2 flex items-center bg-white m-2 text-sm gap-0.5 shadow-sm'>
      <img className='h-6 p-1 rounded-full border-1 ' src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="user image" />
      <span className='font-bold px-2'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMsg
