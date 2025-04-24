import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12'>
      <h1 className='font-bold text-6xl py-2'>{title}</h1>
      <p className='text-lg w-1/2 py-4'>{overview}</p>
      <div>
        <button className='border-1 p-2 bg-gray-400 text-white text-l w-30 mr-3 rounded-lg cursor-pointer bg-opacity-50' > ▶️Play</button>
        <button className='border-1 p-2 bg-gray-400 text-white text-l w-30 mr-3 rounded-lg cursor-pointer bg-opacity-50'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
