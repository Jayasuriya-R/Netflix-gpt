import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-15 absolute bg-gradient-r from-black text-white/90 '>
      <h1 className='font-bold text-6xl py-2'>{title}</h1>
      <p className='text-lg w-1/2 py-4'>{overview}</p>
      <div>
        <button className='border-1 p-2 bg-white text-black text-l w-30 mr-3 rounded-lg cursor-pointer hover:bg-white/80 ' > ▶️Play</button>
        <button className='border-1 p-2 bg-gray-500 text-white text-l w-30 mr-3 rounded-lg cursor-pointer hover:bg-gray-500/60  '> ℹ️More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
