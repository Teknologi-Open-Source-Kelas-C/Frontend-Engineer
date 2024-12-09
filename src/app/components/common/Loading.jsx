import React from 'react'

const Loading = () => {
  return (
    /* From Uiverse.io by yohohopizza */
    <div className="flex flex-row gap-2 justify-center items-center">
      <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce"></div>
      <div
        className="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:-.3s]"
      ></div>
      <div
        className="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:-.5s]"
      ></div>
    </div>

  )
}

export default Loading